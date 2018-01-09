var mediaObj = null;
var flag = true;
var audioPageContext = null;
var batteryLevel;
var batteryState;
function getPreviousForm() {
 return kony.application.getPreviousForm().id;
}
function showBattery()
{    
    var battery = kony.os.getBatteryLevel();
    alert(battery);
    alert(kony.os.getBatteryState());    
}
/*
	@function setAudio
    @description This API will create Media Object of provided audio file
*/
function setAudio(self,filename)
{
 audioPageContext = self;
  var destFilePath;
  //var path =kony.io.FileSystem.getApplicationDirectoryPath ();
 //myfile = kony.io.FileSystem.getFile(path+"/"+filename);
  if(kony.os.deviceInfo().name === "iPhone")
  	 destFilePath = kony.io.FileSystem.getDataDirectoryPath() +"/"+ filename;
  else if(kony.os.deviceInfo().name === "android")
     destFilePath = kony.io.FileSystem.getDataDirectoryPath() + filename;
    kony.io.FileSystem.copyBundledRawFileTo(filename, destFilePath);
  var file = new kony.io.File(destFilePath);
  mediaObj = kony.media.createFromFile(file);
  mediaObj.setCallbacks({ onProgressCallBack: OnMediaProgress,onMediaCompleted:onMediaComplete });
  kony.timer.schedule("KonyFacilityTimer", startAudio, 1,false);
}
function mybatterychangecallback(batteryinfo)
{
   batteryLevel = batteryinfo.batterylevel;
   batteryState = batteryinfo.batterystate; 
}
/*
	@function startAudio
    @description This API will play the audio for once
*/
var basicConf,pspConf,infoAlert;
function startAudio()
{ 
  var actionSheetObject,actionItem1,actionItem2;
  flag = false;
  kony.os.registerBatteryService(mybatterychangecallback);
  batteryLevel = kony.os.getBatteryLevel();
  batteryState = kony.os.getBatteryState();
  var duration = mediaObj.duration;
  audioPageContext.view.sliderAudio.max = duration;
  
  if(batteryLevel <= "20" && batteryState == kony.os.BATTERY_STATE_DISCHARGING)
    {
      if(kony.os.deviceInfo().name === "android")
        {
          //Defining basicConf parameter for alert
           basicConf = {message: "Not recommended to play audio below 20%",alertType: constants.
                           ALERT_TYPE_INFO,alertTitle: "Alert",yesLabel:"OK",
                            alertHandler: null};

          //Defining pspConf parameter for alert
           pspConf = {};
          //Alert definition
           infoAlert = kony.ui.Alert(basicConf,pspConf); 
        }
      if(kony.os.deviceInfo().name === "iPhone")
      {
        actionItem1 = new kony.ui.ActionItem(
          {
            "title":"OK", 
            "style":constants.ACTION_STYLE_DEFAULT, 
            "action":null
          }	
        );

        actionSheetObject = new kony.ui.ActionSheet(
          {
            "title":"Alert", 
            "message":"Not recommended to play audio below 20%", 
            "showCompletionCallback": null
          }
        );
        actionSheetObject.addAction(actionItem1);
        actionSheetObject.show();
      }
    }
  else if(batteryLevel > "20" && batteryLevel <= "30" )
  {

    if(kony.os.deviceInfo().name === "android")
          {
            //Defining basicConf parameter for alert
            basicConf = {message: "Battery level below 30%. Do you still want to play?",alertType: constants.ALERT_TYPE_CONFIRMATION,
                         alertTitle: "Alert",yesLabel:"Play",noLabel: "Cancel",
                         alertHandler: handle2};

            //Defining pspConf parameter for alert
            pspConf = {};
            //Alert definition
            infoAlert = kony.ui.Alert(basicConf,pspConf); 
          }
          

    if(kony.os.deviceInfo().name === "iPhone")
    {
       actionItem2 = new kony.ui.ActionItem(
        {
          "title":"Cancel", 
          "style":constants.ACTION_ITEM_STYLE_DEFAULT, 
          "action":function(){}
        }	
      );
        actionItem1 = new kony.ui.ActionItem(
        {
          "title":"Play", 
          "style":constants.ACTION_ITEM_STYLE_DEFAULT, 
          "action":function(){  mediaObj.play(1);}
        }	
      );

      actionSheetObject = new kony.ui.ActionSheet(
        {
          "title":"Alert", 
          "message":"Battery level below 30%. Do you still want to play?", 
          "showCompletionCallback": function(){}
        }
      );
      actionSheetObject.addAction(actionItem1);
      actionSheetObject.addAction(actionItem2);
      actionSheetObject.show();
    }
  }
  else
    {
      if(kony.application.getPreviousForm().id === null || kony.application.getPreviousForm().id === "frmLandingPage" && kony.os.deviceInfo().name === "android")
      	showToast("Playing Audio using Media API");
      audioPageContext.view.btnPlay.setVisibility(false);
      audioPageContext.view.Pause.setVisibility(true);
      mediaObj.play(1);
    }
  kony.os.unregisterBatteryService(); 
 
}
 /*
    	@Function showToast
        @Description This API accepts a string and populate to a toast
        			
    */
function showToast(toastText) {
        var toast = new kony.ui.Toast({
            "text": toastText,
            "duration": constants.LONG
        });
        var offset = {
            gravity: constants.TOAST_POS_BOTTOM_CENTER
        };
        toast.alignConfig = offset;
        toast.show();
    }

function handle2(response)
{
  if(response === true)
    {
      mediaObj.play(1);
    }   
}
function actionOnPlay(actionSheetObject,actionItem2)
{
  //alert(actionSheetObject + " ==" + actionItem2);
  mediaObj.play(1);
}
function onMediaComplete()
{
  audioPageContext.view.btnPlay.setVisibility(true);
  audioPageContext.view.Pause.setVisibility(false);
}
/*
	@function pauseAudio
    @description This API will pause the audio
*/
function pauseAudio()
{
  mediaObj.pause();
}
/*
	@function stopAudio
    @description This API will stop the audio
*/
function stopAudio()
{
  flag = true;
  mediaObj.stop(); 
}
function OnMediaProgress(position)
{
  audioPageContext.view.sliderAudio.selectedValue = Number(position);
  audioPageContext.view.forceLayout();
}
function onSlide(endPos)
{
	mediaObj.seek(Number(endPos));
}
/*
	@function seekForward
    @description This API will seek forward audio
*/
function seekForward(currentPos)
{
  var requiredPos = currentPos + 3;
  if(requiredPos >= mediaObj.duration)
     requiredPos = mediaObj.duration;
  mediaObj.seek(Number(requiredPos));
}
/*
	@function seekBackward
    @description This API will seek backward audio
*/
function seekBackward(currentPos)
{
  var requiredPos = currentPos - 3;
  if(requiredPos <= 0)
    requiredPos = 0;
  mediaObj.seek(Number(requiredPos));
}

var item = [
  [
    {
      "lblHeader": {
        "text": "Image"
      },
      "flxHeader": {
        "top": "0dp"
      }
    },
    [
      {
        
        
        "lblAPIname": {
          "text": "OMNI CHANNEL APPS"
        },
        
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
          "width": "49%"
        },
      
        "thumbnail":{
          "isVisible" : true,
          "src" : "bankthumb.png" 
        },
        "image":{
          "src":"bank.jpg"
        }
      },
      {
       
        "lblAPIname": {
          "text": "HEALTHCARE"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
         "height": "130dp",
          "width": "49%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "healththumb.png" 
        },
        "image":{
          "src":"health.png"
        }
      },
      {
        
        "lblAPIname": {
          "text": "KONY BADGES"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
          "width": "49%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "badgesthumb.png" 
        },
        "image":{
          "src":"badges.png"
        }
      },
      {
        
        "lblAPIname": {
          "text": "TABLET SCREEN"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
          "width": "49%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "tabletthumb.png" 
        },
        "image":{
          "src":"tablet.jpg"
        }
      }
    ],{}
  ],
  [
    {
      "lblHeader": {
        "text": "Music"
      }
    },
    [
      {
       
        "lblAPIname": {
          "text": "FIRST",
          "filename" : "first.mp3"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
          "width": "44.7%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "mp3.png"
        }
      },
      {
       
        "lblAPIname": {
           "text": "SECOND",
          "filename" : "second.mp3"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
           "width": "44.7%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "mp3.png"
        }
      },
      {
       
        "lblAPIname": {
           "text": "THIRD",
          "filename" : "third.mp3"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
           "width": "44.7%"
        },
      
        "thumbnail":{
          "isVisible" : true,
          "src" : "mp3.png"
        }
      }
    ],{}

  ],

  [
    {
      "lblHeader": {
        "text": "PDF"
      }
    },
    [
      {
       
        "lblAPIname": {
          "text": "Kony Fabric Installer Mac"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
           "width": "44.7%"
        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "pdf.png"
        }
      },
      {
       
        "lblAPIname": {
          "text": "Viz Enterprise Mac"
        },
        
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
          "width": "44.7%"

        },
       
        "thumbnail":{
          "isVisible" : true,
          "src" : "pdf.png"
        }
      },
      {
       
        "lblAPIname": {
          "text": "Viz Starter Mac"
        },
       
        "imgMain": {
          "height": "50dp",
          "width": "85dp"
        },
        "flxCollection": {
          "height": "130dp",
           "width": "44.7%"
        },
        
        "thumbnail":{
          "isVisible" : true,
          "src" : "pdf.png"
        }
      }
    ],{}

  ]
];

//   [
//     {
//       "lblHeader": {
//         "text": "Zip"
//       }
//     },
//     [
//       {
       
//         "lblAPIname": {
//           "text": "Zip"
//         },
//         "imgArrow": {
//           "height": "30dp",
//           "width": "30dp",
//           "src" : "unselected.png"
//         },
//         "imgMain": {
//           "height": "50dp",
//           "width": "85dp"
//         },
//         "flxCollection": {
//           "height": "130dp",
//            "width": "50%"
//         },
//         "FileImage" : {
//           "text" : "\uf1c6"
//         },
//         "thumbnail":{
//           "isVisible" : false,
//         }
//       },
//       {
       
//         "lblAPIname": {
//           "text": "Zip"
//         },
//         "imgArrow": {
//           "height": "30dp",
//           "width": "30dp",
//           "src" : "unselected.png"
//         },
//         "imgMain": {
//           "height": "50dp",
//           "width": "85dp"
//         },
//         "flxCollection": {
//           "height": "130dp",
//            "width": "50%"
//         },
//         "FileImage" : {
//           "text" : "\uf1c6"
//         },
//         "thumbnail":{
//           "isVisible" : false,
//         }
//       },
//       {
//         "lblAPIname": {
//           "text": "Zip"
//         },
//         "imgArrow": {
//           "height": "30dp",
//           "width": "30dp",
//           "src" : "unselected.png"
//         },
//         "imgMain": {
//           "height": "50dp",
//           "width": "85dp"
//         },
//         "flxCollection": {
//           "height": "130dp",
//            "width": "50%"
//         },
//         "FileImage" : {
//           "text" : "\uf1c6"
//         },
//         "thumbnail":{
//           "isVisible" : false,
//         }
//       }
//     ]

//   ]

//];