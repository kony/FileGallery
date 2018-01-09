define({
    imageName: {},
    onNavigate: function(imageName) {
        if (imageName) this.imageName = imageName;
        this.setImageUsingImageAPI(this.imageName);
        if (kony.os.deviceInfo().name === "android" && (kony.application.getPreviousForm() === null || kony.application.getPreviousForm() === "frmLandingPage")) this.showToast("Showing Image using Image API");
    },
    /*
     	@Function showToast
         @Description This API accepts a string and populate to a toast
         			
     */
    showToast: function(toastText) {
        var toast = new kony.ui.Toast({
            "text": toastText,
            "duration": constants.LONG
        });
        var offset = {
            gravity: constants.TOAST_POS_BOTTOM_CENTER
        };
        toast.alignConfig = offset;
        toast.show();
    },
    /*
    	@funtion setImageUsingImageAPI
        @description This API accepts imagefile and create image object to apply image operations
    */
    setImageUsingImageAPI: function(imageName) {
        this.view.headerTitleLabel.text = imageName;
        var filter = kony.filter.createFilter();
        var img = kony.image.createImage(imageName);
        var filterData;
        if (kony.os.deviceInfo().name === "android") {
            filterData = {
                "filterName": kony.filter.BOX_BLUR,
                "inputImage": img,
                "inputRadius": 1
            };
        } else if (kony.os.deviceInfo().name === "iPhone") {
            filterData = {
                "filterName": kony.filter.BOX_BLUR,
                "inputImage": img,
                "inputRadius": 1
            };
        }
        filter.applyFilter(filterData);
        var imageObj = filter.getOutputImage();
        this.view.imageFile.rawBytes = imageObj.getImageAsRawBytes();
    },
    onClickBack: function() {
        this.view.imageFile.rawBytes = null;
        var navigat = new kony.mvc.Navigation("frmLandingPage");
        navigat.navigate();
    },
    data: [{
            "APIName": "Image API",
            "Description": "The Image API gives your app image processing tools. With the Image API, you can create JavaScript Image objects, scale them, compress them, apply filters to them, and so forth. Your app can use Image objects on Image widgets and button widgets.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#imageapi.htm%3FTocPath%3DOverviews%7C_____24">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@funtion setImageUsingImageAPI<br>@description This API accepts imagefile and create image object to apply image operations<br>*/</label><br><label style=color:#ffffff><br>setImageUsingImageAPI : function(imageName)<br>{<br>var filter = kony.filter.createFilter();<br>var img = kony.image.createImage(imageName);<br>var filterData;<br><br>filterData = {<br>"filterName": kony.filter.BOX_BLUR,<br>"inputImage": img,<br>"inputRadius": 1<br>};<br><br>filter.applyFilter(filterData);<br>var imageObj = filter.getOutputImage();<br>this.view.imageFile.rawBytes=imageObj.getImageAsRawBytes();<br>}<br></label><br>'
        }, {
            "APIName": "Navigation Bar",
            "Description": "Navigation bar appears at the top of an app screen, below the status bar, and enables navigation through a series of hierarchical app screens. When a new screen is displayed, a back button, often labeled with the title of the previous screen, appears on the left side of the bar.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>Bar Button Items<br>*/</label><br><label style=color:#ffffff><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#f2f1f1>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#ffffff><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#f2f1f1>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#ffffff><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "FFFFFF00",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
        },
        //         {
        //             "APIName": "Toolbar",
        //             "Description": "A toolbar appears at the bottom of a application and contains context sensitive buttons for performing actions relevant to the current form. Toolbars are translucent, may have a background tint, and can be hidden when the user is unlikely to need them. Use a toolbar when navigation isn’t needed or you want multiple controls for managing content.",
        //             "DocLink": 'Please find it documented in Kony Documentation <a href = "">here</a>',
        //             "CodeSnippet": '<label style=color:#f2f1f1>/*<br>Bar Button Items<br>*/</label><br><label style=color:#ffffff><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#f2f1f1>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#ffffff><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#f2f1f1>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#ffffff><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "FFFFFF00",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
        //         },
        {
            "APIName": "Toast",
            "Description": "The Toast API enables your app to display small feedback messages to the user. These messages include warnings or success messages that appear for a short time along the bottom of the user's screen. Users cannot interact with them and they fade away automatically after a short period of time. Because users cannot interact with toasts, they are a non-blocking form of communication with the user. That is, while the toast is displayed, the user can continue to interact with the app in other ways.",
            "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#toast_api.htm%3FTocPath%3DOverviews%7C_____50">here</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@Function showToast<br>@Description This API accepts a string and populate to a toast<br>@Written in Form Controller<br>*/</label><br><label style=color:#ffffff>showToast : function(toastText)<br>{<br>var toast = new kony.ui.Toast({"text":toastText, "duration":constants.SHORT});<br>var offset = {<br>gravity: constants.TOAST_POS_BOTTOM_CENTER<br>};<br>toast.alignConfig = offset;<br>toast.show();<br>}<br></label>'
        }
    ],
    onClickFloatingButton: function() {
        var nav = new kony.mvc.Navigation("frmKnowledgeFramework");
        nav.navigate(this.data);
    },
});