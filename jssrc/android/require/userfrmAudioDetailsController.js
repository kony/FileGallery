define({
    file: null,
    onNavigate: function(filename) {
        if (filename) {
            this.view.headerTitleLabel.text = filename;
            this.file = filename;
        } else {
            this.view.headerTitleLabel.text = this.file;
        }
        this.view.Pause.setVisibility(true);
        this.view.btnPlay.setVisibility(false);
        this.playAudio();
    },
    /*
      	@Function showToast
          @Description This API accepts a string and populate to a toast

      */
    showToast: function(toastText) {
        var toast = new kony.ui.Toast({
            "text": toastText,
            "duration": constants.SHORT
        });
        var offset = {
            gravity: constants.TOAST_POS_BOTTOM_CENTER
        };
        toast.alignConfig = offset;
        toast.show();
    },
    onClickFloatingButton: function() {
        stopAudio();
        var nav = new kony.mvc.Navigation("frmKnowledgeFramework");
        nav.navigate(this.data);
    },
    playAudio: function() {
        if (flag === true) setAudio(this, this.file);
        else startAudio();
    },
    data: [{
            "APIName": "Media API",
            "Description": "The Media API enables your app to play and record audio files. It also encompasses play, pause, stop, forward and backward capabilities to an audio track.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#media_api.htm%3FTocPath%3DOverviews%7C_____33">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@function setAudio<br>@description This API will create Media Object of provided audio file<br>*/</label><br><label style=color:#ffffff>function setAudio(self,filename)<br>{<br>audioPageContext = self;<br>var destFilePath = kony.io.FileSystem.getDataDirectoryPath() + filename;<br>kony.io.FileSystem.copyBundledRawFileTo(filename, destFilePath);<br>var file = new kony.io.File(destFilePath);<br>mediaObj = kony.media.createFromFile(file);<br>mediaObj.setCallbacks({ onProgressCallBack: OnMediaProgress,onMediaCompleted:onMediaComplete });<br>kony.timer.schedule("KonyFacilityTimer", startAudio, 1,false);<br>}</label><br><h4>To Play Audio</h4><br><label style=color:#f2f1f1>/*<br>@function startAudio<br>@description This API will play the audio for once<br>*/</label><br><label style=color:#ffffff>function startAudio()<br>{<br>mediaObj.play(1);<br>}</label><br><h4>To Pause Audio</h4><br><label style=color:#f2f1f1>/*<br>@function pauseAudio<br>@description This API will pause the audio<br>*/</label><br><label style=color:#ffffff>function pauseAudio()<br>{<br>mediaObj.pause();<br>}</label><br><h4>To Stop Audio</h4><br><label style=color:#f2f1f1>/*<br>@function stopAudio<br>@description This API will stop the audio<br>*/</label><br><label style=color:#ffffff>function stopAudio()<br>{<br>flag = true;<br>mediaObj.stop();<br>}</label><br><h4>To Seek Forward Audio</h4><br><label style=color:#f2f1f1>/*<br>@function seekForward<br>@description This API will seek forward audio<br>*/</label><br><label style=color:#ffffff>function seekForward(currentPos)<br>{<br>var requiredPos = currentPos + 3;<br>if(requiredPos > = mediaObj.duration)<br>requiredPos = mediaObj.duration;<br>mediaObj.seek(Number(requiredPos));<br>}</label><br><h4>To Seek Backward Audio</h4><br><label style=color:#f2f1f1>/*<br>@function seekBackward<br>@description This API will seek backward audio<br>*/</label><br><label style=color:#ffffff>function seekBackward(currentPos)<br>{<br>var requiredPos = currentPos - 3;<br>if(requiredPos &lt; = 0)<br>requiredPos = 0;<br>mediaObj.seek(Number(requiredPos));<br>}</label><br>'
        }, {
            "APIName": "Battery API",
            "Description": "The Battery API provides a standard interface that can be used across multiple hardware platforms for checking the current state of a device's battery. In addition, it provides capabilities to check the charging/discharging states of the battery, and also to register callback functions which is automatically invoked upon battery state/level change.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#battery_api.htm%3FTocPath%3DOverviews%7C_____10">here</a>',
            "CodeSnippet": '<h4>To get Battery Level percentage</h4><br><label style=color:#ffffff><br>function getBatteryLevel()<br>{<br>kony.os.getBatteryLevel();<br>}<label><br><h4>To get Battery State</h4><br><label style=color:#ffffff><br>function getBatteryLevel()<br>{<br>kony.os.getBatteryState();<br>}<br></label><br><br>'
        }, {
            "APIName": "Navigation Bar",
            "Description": "Navigation bar appears at the top of an app screen, below the status bar, and enables navigation through a series of hierarchical app screens. When a new screen is displayed, a back button, often labeled with the title of the previous screen, appears on the left side of the bar.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Tool_and_Navigation_bars_for_iOS.htm">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>Bar Button Items<br>*/</label><br><label style=color:#ffffff><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#f2f1f1>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#ffffff><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#f2f1f1>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#ffffff><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "FFFFFF00",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
        },
        //         {
        //             "APIName": "Toolbar",
        //             "Description": "A toolbar appears at the bottom of a application and contains context sensitive buttons for performing actions relevant to the current form. Toolbars are translucent, may have a background tint, and can be hidden when the user is unlikely to need them. Use a toolbar when navigation isn’t needed or you want multiple controls for managing content.",
        //             "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Toolbar.htm%3FTocPath%3DReference%7CToolbar%2520Widget%7C_____0">here</a>',
        //             "CodeSnippet": '<label style=color:#f2f1f1>/*<br>Bar Button Items<br>*/</label><br><label style=color:#ffffff><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#f2f1f1>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#ffffff><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#f2f1f1>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#ffffff><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "FFFFFF00",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
        //         },
        {
            "APIName": "Toast",
            "Description": "The Toast API enables your app to display small feedback messages to the user. These messages include warnings or success messages that appear for a short time along the bottom of the user's screen. Users cannot interact with them and they fade away automatically after a short period of time. Because users cannot interact with toasts, they are a non-blocking form of communication with the user. That is, while the toast is displayed, the user can continue to interact with the app in other ways.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#toast_api.htm%3FTocPath%3DOverviews%7C_____50">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@Function showToast<br>@Description This API accepts a string and populate to a toast<br>@Written in Form Controller<br>*/</label><br><label style=color:#ffffff>showToast : function(toastText)<br>{<br>var toast = new kony.ui.Toast({"text":toastText, "duration":constants.SHORT});<br>var offset = {<br>gravity: constants.TOAST_POS_BOTTOM_CENTER<br>};<br>toast.alignConfig = offset;<br>toast.show();<br>}<br></label>'
        }
    ]
});