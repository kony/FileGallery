define({
    isMenuOpen: false,
    onNavigate: function() {
        this.setData(this.apiData);
    },
    apiData: [{
        "APIName": "Battery API",
        "Description": "The Battery API provides a standard interface that can be used across multiple hardware platforms for checking the current state of a device's battery. In addition, it provides capabilities to check the charging/discharging states of the battery, and also to register callback functions which is automatically invoked upon battery state/level change.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#battery_api.htm%3FTocPath%3DOverviews%7C_____10">here</a>',
        "CodeSnippet": '<h4>To get Battery Level percentage</h4><br><label style=color:#103070><br>function getBatteryLevel()<br>{<br>kony.os.getBatteryLevel();<br>}<label><br><h4>To get Battery State</h4><br><label style=color:#103070><br>function getBatteryLevel()<br>{<br>kony.os.getBatteryState();<br>}<br></label><br><br>'
    }, {
        "APIName": "Collection View",
        "Description": "A CollectionView consists of multiple items, and each item can have multiple child widgets. The CollectionView widget is similar to the SegmentedUI widget, and shares many of that widgets properties and methods. The items that fill the CollectionView widget are based on templates.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#CollectionView.htm%3FTocPath%3DReference%7CCollectionView%2520Widget%7C_____0">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>@Function basicConfig()<br>@Description This function will return the basic configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><label style=color:#103070>function basicConfig() {<br>return {<br>"autogrowMode": kony.flex.AUTOGROW_NONE,<br>"data": null,<br>"left": "0dp",<br>"top": "0dp",<br>"width": "100%",<br>"height": "100%",<br>"id": "myCollectionView",<br>"isVisible": true,<br>"minLineSpace": 0,<br>"minItemSpace": 0,<br>"retainSelection": true,<br>"skin": "sknFullFlex",<br>"itemTemplate": "flxCollection",<br>"scrollingEvents": {},<br>"sectionHeaderTemplate": "flxHeader",<br>"sectionFooterTemplate": null,<br>"selectionBehavior": kony.collectionview.SINGLE_SELECT,<br>"showScrollbars": false,<br>"layout": kony.collectionview.LAYOUT_HORIZONTAL,<br>"contentSize": [1000, 1000],<br>"widgetDataMap": {<br>"lblHeader":"lblHeader",<br>"lblAPIname": "lblAPIname",<br>"imgArrow": "imgArrow",<br>"imgMain" : "imgMain",<br>"FileImage" : "FileImage",<br>"thumbnail" : "thumbnail"<br><br>},<br>"zIndex": 1,<br>"onItemSelect" : function(){alert("dd");}<br>};<br>}<br></label><br><label style=color:#4e5221>/*<br>@Function layoutConfig()<br>@Description This function will return the layout configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><br><label style=color:#103070>function layoutConfig() {<br>return {<br>"padding": [0, 0, 0, 0],<br>"paddingInPixel": false<br>};<br>}<br></label><br><label style=color:#4e5221>/*<br>@Function platformConfig()<br>@Description This function will return the platform configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><br><label style=color:#103070>function platformConfig() {<br>return {<br>"bounces": true,<br>"enableDictionary": false,<br>};<br>}<br></label><br><label style=color:#4e5221>/*<br>@Function addCollectionViewToForm<br>@Description This API creates collection view with the<br>configurations provided and set it on a form<br>Written in Form Controller<br>*/</label><br><br><label style=color:#103070>addCollectionViewToForm : function()<br>{<br>var bsp = basicConfig();<br>var lsp = layoutConfig();<br>var psp = platformConfig();<br>bsp.onItemSelect = this.setSelectionCallback;<br>bsp.data = item;<br>bsp.layout = kony.collectionview.LAYOUT_HORIZONTAL;<br>bsp.contentSize = null;<br>psp.bounces = false;<br>var collectionView = new kony.ui.CollectionView(bsp,lsp,psp);<br>this.view.flxMainLanding.add(collectionView);<br>this.view.forceLayout();<br>}<br></label><br>'
    }, {
        "APIName": "Image API",
        "Description": "The Image API gives your app image processing tools. With the Image API, you can create JavaScript Image objects, scale them, compress them, apply filters to them, and so forth. Your app can use Image objects on Image widgets and button widgets.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#imageapi.htm%3FTocPath%3DOverviews%7C_____24">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>@funtion setImageUsingImageAPI<br>@description This API accepts imagefile and create image object to apply image operations<br>*/</label><br><label style=color:#103070><br>setImageUsingImageAPI : function(imageName)<br>{<br>var filter = kony.filter.createFilter();<br>var img = kony.image.createImage(imageName);<br>var filterData;<br><br>filterData = {<br>"filterName": kony.filter.BOX_BLUR,<br>"inputImage": img,<br>"inputRadius": 1<br>};<br><br>filter.applyFilter(filterData);<br>var imageObj = filter.getOutputImage();<br>this.view.imageFile.rawBytes=imageObj.getImageAsRawBytes();<br>}<br></label><br>'
    }, {
        "APIName": "Media API",
        "Description": "The Media API enables your app to play and record audio files. It also encompasses play, pause, stop, forward and backward capabilities to an audio track.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#media_api.htm%3FTocPath%3DOverviews%7C_____33">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>@function setAudio<br>@description This API will create Media Object of provided audio file<br>*/</label><br><label style=color:#103070>function setAudio(self,filename)<br>{<br>audioPageContext = self;<br>var destFilePath = kony.io.FileSystem.getDataDirectoryPath() + filename;<br>kony.io.FileSystem.copyBundledRawFileTo(filename, destFilePath);<br>var file = new kony.io.File(destFilePath);<br>mediaObj = kony.media.createFromFile(file);<br>mediaObj.setCallbacks({ onProgressCallBack: OnMediaProgress,onMediaCompleted:onMediaComplete });<br>kony.timer.schedule("KonyFacilityTimer", startAudio, 1,false);<br>}</label><br><h4>To Play Audio</h4><br><label style=color:#4e5221>/*<br>@function startAudio<br>@description This API will play the audio for once<br>*/</label><br><label style=color:#103070>function startAudio()<br>{<br>mediaObj.play(1);<br>}</label><br><h4>To Pause Audio</h4><br><label style=color:#4e5221>/*<br>@function pauseAudio<br>@description This API will pause the audio<br>*/</label><br><label style=color:#103070>function pauseAudio()<br>{<br>mediaObj.pause();<br>}</label><br><h4>To Stop Audio</h4><br><label style=color:#4e5221>/*<br>@function stopAudio<br>@description This API will stop the audio<br>*/</label><br><label style=color:#103070>function stopAudio()<br>{<br>flag = true;<br>mediaObj.stop();<br>}</label><br><h4>To Seek Forward Audio</h4><br><label style=color:#4e5221>/*<br>@function seekForward<br>@description This API will seek forward audio<br>*/</label><br><label style=color:#103070>function seekForward(currentPos)<br>{<br>var requiredPos = currentPos + 3;<br>if(requiredPos > = mediaObj.duration)<br>requiredPos = mediaObj.duration;<br>mediaObj.seek(Number(requiredPos));<br>}</label><br><h4>To Seek Backward Audio</h4><br><label style=color:#4e5221>/*<br>@function seekBackward<br>@description This API will seek backward audio<br>*/</label><br><label style=color:#103070>function seekBackward(currentPos)<br>{<br>var requiredPos = currentPos - 3;<br>if(requiredPos &lt; = 0)<br>requiredPos = 0;<br>mediaObj.seek(Number(requiredPos));<br>}</label><br>'
    }, {
        "APIName": "Navigation Bar",
        "Description": "Navigation bar appears at the top of an app screen, below the status bar, and enables navigation through a series of hierarchical app screens. When a new screen is displayed, a back button, often labeled with the title of the previous screen, appears on the left side of the bar.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Tool_and_Navigation_bars_for_iOS.htm">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>Bar Button Items<br>*/</label><br><label style=color:#103070><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#4e5221>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#103070><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#4e5221>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#103070><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "10307000",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
    }, {
        "APIName": "Toast",
        "Description": "The Toast API enables your app to display small feedback messages to the user. These messages include warnings or success messages that appear for a short time along the bottom of the user's screen. Users cannot interact with them and they fade away automatically after a short period of time. Because users cannot interact with toasts, they are a non-blocking form of communication with the user. That is, while the toast is displayed, the user can continue to interact with the app in other ways.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#toast_api.htm%3FTocPath%3DOverviews%7C_____50">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>@Function showToast<br>@Description This API accepts a string and populate to a toast<br>@Written in Form Controller<br>*/</label><br><label style=color:#103070>showToast : function(toastText)<br>{<br>var toast = new kony.ui.Toast({"text":toastText, "duration":constants.SHORT});<br>var offset = {<br>gravity: constants.TOAST_POS_BOTTOM_CENTER<br>};<br>toast.alignConfig = offset;<br>toast.show();<br>}<br></label>'
    }, {
        "APIName": "Toolbar",
        "Description": "A toolbar appears at the bottom of a application and contains context sensitive buttons for performing actions relevant to the current form. Toolbars are translucent, may have a background tint, and can be hidden when the user is unlikely to need them. Use a toolbar when navigation isn’t needed or you want multiple controls for managing content.",
        "DocLink": 'Please find it documented in Kony Documentation <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Toolbar.htm%3FTocPath%3DReference%7CToolbar%2520Widget%7C_____0">here</a>',
        "CodeSnippet": '<label style=color:#4e5221>/*<br>Bar Button Items<br>*/</label><br><label style=color:#103070><br>item0 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_TITLE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: false,<br>action: null,<br>metaData: {<br>title: "Home"<br>}<br>});<br>item1 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_SYSTEM_ITEM,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: onClick,<br>metaData: {<br>systemItem: constants.SYSTEM_ITEM_REPLY<br>}<br>});<br>item2 = new kony.ui.BarButtonItem({<br>type: constants.BAR_BUTTON_IMAGE,<br>style: constants.BAR_ITEM_STYLE_PLAIN,<br>enabled: true,<br>action: null,<br>metaData: {<br>image: "pinb.png"<br>}<br>});</label><br/><h4>To Set Buttons in Navigation Bar</h4><br><label style=color:#4e5221>/*<br>@function setBarButtonItems<br>@description This API will assign BarButtonItems to Naivgation Bar<br>*/<br></label><br><label style=color:#103070><br>function setBarButtonItems(){<br>var btns = [item0,item1];<br>var btns1 = [item2];<br>newAttributes.leftBarButtonItems = btns;<br>newAttributes.rightBarButtonItems = btns1;<br>}<br></label><h4>To Change Navigation Bar Attributes</h4><br><label style=color:#4e5221>/*<br>@function changeTitleBarAttributes<br>@description This API will change TitleBar Attributes<br>*/<br></label><br><label style=color:#103070><br>function changeTitleBarAttributes(){<br>newAttributes = {<br>"prompt": "",<br>"tintColor": "10307000",<br>"navigationBarHidden": false,<br>"barStyle": constants.BAR_STYLE_DEAFULT,<br>"translucent": false,<br>"leftBarButtonItems": [],<br>"rightBarButtonItems" : [],<br>"backIndicatorImage": "back_btn.png",<br>"backIndicatorTransitionMaskImage": "back_btn.png",<br>"hidesBackButton" : false,<br>"titleView" : null,<br>"leftItemsSupplementBackButton" : true<br>};<br>frmLandingPage.titleBarAttributes = newAttributes;<br></label><br>'
    }],
    setAPIDataToSegment: function(data) {
        this.view.sgmtAPIIndexed.widgetDataMap = {
            "lblAPIName": "APIName"
        };
        this.view.sgmtAPIIndexed.setData(data);
    },
    onClickHelp: function() {
        this.hideHam();
        kony.store.setItem("oneTimeInitFlag", "false");
        var navigat = new kony.mvc.Navigation("frmSplash");
        navigat.navigate();
    },
    onNavigated: function(context) {
        this.flag = 0;
    },
    animation: function(object, scaleX, scaleY, left, flag) {
        var controllerScope = this;
        var defaultImage = kony.ui.makeAffineTransform();
        defaultImage.scale(scaleX, scaleY);
        var duration = 0.5;
        if (flag === false) {
            duration = 0;
        }
        object.animate(kony.ui.createAnimation({
            100: {
                "left": left,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": defaultImage
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: duration
        }, {
            animationEnd: function() {
                if (controllerScope.view.flxFullPage.left == "0%") {
                    controllerScope.view.skin = "sknMenuGrey";
                }
            }
        });
    },
    setShadowPosition: function() {
        if (this.view.flxFullPage.left == "-70%") {
            this.view.flxShadow.isVisible = true;
            this.view.flxShadow.left = "-80%";
        } else if (this.view.flxFullPage.left == "70%") {
            this.view.flxShadow.isVisible = true;
            this.view.flxShadow.left = "80%";
        } else {
            this.view.flxShadow.isVisible = false;
        }
    },
    menuClick: function() {
        this.animation(this.view.flxFullPage, 0.8, 0.8, "70%", true);
        this.animation(this.view.flxShadow, 0.8, 0.8, "70%", true);
        this.view.hamburger.left = "0%";
        this.view.forceLayout();
    },
    listMenuClick: function() {
        this.view.skin = "sknMenuBlue";
        this.view.flxCover.zIndex = 10;
        this.view.flxCover.isVisible = true;
        this.view.flxCover.left = "80%";
        this.view.flxCover.width = "20%";
        this.view.flxCover.height = "100%";
        this.view.flxShadow.isVisible = true;
        this.view.forceLayout();
        var loginMenuData = [{
            text: "Default Mode",
            src: "selection.png",
            callback: this.moveToLandingPage.bind(this)
        }, {
            text: "Kony Base Camp",
            src: "selection.png",
            callback: function() {
                controllerScope.hideHam();
                kony.application.openURL("https://basecamp.kony.com/s/");
            }
        }, {
            text: "Kony Documentation",
            src: "selection.png",
            callback: function() {
                controllerScope.hideHam();
                kony.application.openURL("https://community.kony.com/documentation");
            }
        }];
        var otherAppsData = [{
            text: "News and Weather",
            src: "selection.png",
            callback: function() {
                this.hideHam();
                this.launchNewsAndWeather();
            }
        }, {
            text: "Employee Directory",
            src: "selection.png",
            callback: function() {
                alert("Link to Employee Directory App");
            }
        }];
        this.view.hamburger.addMenuItems(loginMenuData);
        this.view.hamburger.addMenuItems2(otherAppsData);
        this.menuClick();
    },
    hideHam: function() {
        this.view.hamburger.left = "-100%";
        this.view.flxCover.isVisible = false;
        this.animation(this.view.flxShadow, 1, 1, "0%", true);
        this.animation(this.view.flxFullPage, 1, 1, "0%", true);
        this.view.flxShadow.isVisible = false;
        this.view.flxFullPage.left = "0%";
        this.view.forceLayout();
    },
    flxCoverOnClick: function() {
        this.view.flxShadow.isVisible = false;
        if (this.view.flxFullPage.left == "-70%" || this.view.flxFullPage.left == "70%") {
            if (this.view.hamburger.left == "0%") {
                this.view.hamburger.left = "-100%";
                this.animation(this.view.flxShadow, 1, 1, "0%", true);
                this.animation(this.view.flxFullPage, 1, 1, "0%", true);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            } else if (this.view.filterMenu.left == "20%") {
                this.view.filterMenu.left = "100%";
                this.animation(this.view.flxShadow, 1, 1, "0%", true);
                this.animation(this.view.flxFullPage, 1, 1, "0%", true);
                this.view.filterMenu.addMenuItems(this.view.flxFullPage.getData());
                this.view.flxFullPage.filterAndSetData([]);
                this.view.forceLayout();
                this.view.flxCover.isVisible = false;
            }
        }
        this.view.flxShadow.isVisible = false;
    },
    moveToLandingPage: function() {
        this.view.hamburger.left = "-100%";
        this.animation(this.view.flxShadow, 1, 1, "0%", true);
        this.animation(this.view.flxFullPage, 1, 1, "0%", false);
        this.view.flxFullPage.left = "0%";
        this.view.flxCover.isVisible = false;
        this.view.flxShadow.isVisible = false;
        this.view.forceLayout();
        var nav = new kony.mvc.Navigation("frmLandingPage");
        nav.navigate();
    },
    launchNewsAndWeather: function() {
        this.hideHam();
        if (kony.os.deviceInfo().name === "android") {
            kony.application.openURL("News://com.orgname.NewAndWeather");
        }
        if (kony.os.deviceInfo().name === "iPhone") {
            kony.application.openURL("News://");
        }
    },
    previosAcc: null,
    isClosed: false,
    setData: function(data) {
        this.view.lblHeading.text = "Indexed Mode";
        this.view.sgmtAPI.removeAll();
        this.view.sgmtAPI.isVisible = true;
        this.view.sgmtAPI.widgetDataMap = {
            lblAPIName: "APIName"
        };
        this.view.sgmtAPI.setData(data);
    },
    onRowClick: function() {
        this.showAccord("flexAcc1");
        var data = this.view.sgmtAPI.selectedRowItems[0];
        this.animateDescriptionScreen(0, data.APIName, this.setUIAfterAnimation);
        this.populateData(data);
    },
    setUIAfterAnimation: function(left, headerText) {
        if (left === 100) {
            this.view.flexClickBack.setVisibility(false);
            this.view.flxMenu.setVisibility(true);
        } else {
            this.view.flexClickBack.setVisibility(true);
            this.view.flxMenu.setVisibility(false);
        }
        if (this.isClosed) {
            this.navigateToPreviousScreen();
            this.isClosed = false;
        }
    },
    animateDescriptionScreen: function(left, headerText, callbackFunction) {
        var controllerScope = this;
        controllerScope.view.flxFullScreen.animate(kony.ui.createAnimation({
            100: {
                left: left + "%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {
                if (left === 0) {
                    controllerScope.view.flexClickBack.setVisibility(true);
                    controllerScope.view.flxMenu.setVisibility(false);
                } else {
                    controllerScope.view.flexClickBack.setVisibility(false);
                    controllerScope.view.flxMenu.setVisibility(true);
                }
            }
        });
    },
    populateData: function(data) {
        this.view.rchDesc1.text = data.Description;
        this.view.rchDesc2.text = data.CodeSnippet;
        this.view.rchDesc3.text = data.DocLink;
    },
    showAccord: function(id) {
        id = id.split("flexAcc")[1];
        if (this.previosAcc !== null && this.previosAcc !== id) {
            this.view["btnAccordian" + this.previosAcc].src = "chevron_active.png";
            this.view["btnAccordian" + id].src = "chevron_down.png";
            this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
            this.view["flexScrollDesc" + id].isVisible = true;
            this.previosAcc = id;
        } else if (this.previosAcc == id) {
            if (this.view["btnAccordian" + id].src == "chevron_down.png") {
                this.view["btnAccordian" + this.previosAcc].src = "chevron_down.png";
                this.view["btnAccordian" + id].src = "chevron_active.png";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = true;
                this.view["flexScrollDesc" + id].isVisible = false;
                this.previosAcc = id;
            } else {
                this.view["btnAccordian" + this.previosAcc].src = "chevron_active.png";
                this.view["btnAccordian" + id].src = "chevron_down.png";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            }
        } else {
            this.view["btnAccordian" + id].src = "chevron_down.png";
            this.view["flexScrollDesc" + id].isVisible = true;
            this.previosAcc = id;
        }
    },
    closeWhenDone: function() {
        this.isClosed = true;
        this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
        this.setUIAfterAnimation(100, "Behind The Scene");
    },
    navigateToPreviousScreen: function() {
        var prevForm = kony.application.getPreviousForm();
        var navObj = new kony.mvc.Navigation(prevForm.id);
        navObj.navigate();
    },
    onClickBack: function() {
        this.resetDescScreen();
        this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
    },
    resetDescScreen: function() {
        for (i = 1; i <= 3; i++) {
            this.view["btnAccordian" + i].src = "chevron_active.png";
            this.view["flexScrollDesc" + i].isVisible = false;
        }
    },
    onLinkClick: function() {
        kony.application.openURL(this.view.sgmtAPI.selectedItems[0].link);
    }
});