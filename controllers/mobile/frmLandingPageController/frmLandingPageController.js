define({
    addDataToViewFlag: true,
    data: [{
            "APIName": "Collection View",
            "Description": "A CollectionView consists of multiple items, and each item can have multiple child widgets. The CollectionView widget is similar to the SegmentedUI widget, and shares many of that widgets properties and methods. The items that fill the CollectionView widget are based on templates.",
            "DocLink": 'Please find it documented in Kony Documentation here <br><a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#CollectionView.htm%3FTocPath%3DReference%7CCollectionView%2520Widget%7C_____0">Collection View</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@Function basicConfig()<br>@Description This function will return the basic configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><label style=color:#ffffff>function basicConfig() {<br>return {<br>"autogrowMode": kony.flex.AUTOGROW_NONE,<br>"data": null,<br>"left": "0dp",<br>"top": "0dp",<br>"width": "100%",<br>"height": "100%",<br>"id": "myCollectionView",<br>"isVisible": true,<br>"minLineSpace": 0,<br>"minItemSpace": 0,<br>"retainSelection": true,<br>"skin": "sknFullFlex",<br>"itemTemplate": "flxCollection",<br>"scrollingEvents": {},<br>"sectionHeaderTemplate": "flxHeader",<br>"sectionFooterTemplate": null,<br>"selectionBehavior": kony.collectionview.SINGLE_SELECT,<br>"showScrollbars": false,<br>"layout": kony.collectionview.LAYOUT_HORIZONTAL,<br>"contentSize": [1000, 1000],<br>"widgetDataMap": {<br>"lblHeader":"lblHeader",<br>"lblAPIname": "lblAPIname",<br>"imgArrow": "imgArrow",<br>"imgMain" : "imgMain",<br>"FileImage" : "FileImage",<br>"thumbnail" : "thumbnail"<br><br>},<br>"zIndex": 1,<br>"onItemSelect" : function(){alert("dd");}<br>};<br>}<br></label><br><label style=color:#f2f1f1>/*<br>@Function layoutConfig()<br>@Description This function will return the layout configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><br><label style=color:#ffffff>function layoutConfig() {<br>return {<br>"padding": [0, 0, 0, 0],<br>"paddingInPixel": false<br>};<br>}<br></label><br><label style=color:#f2f1f1>/*<br>@Function platformConfig()<br>@Description This function will return the platform configuration<br>required for collection view<br>Written in separate JS Module<br>*/</label><br><br><label style=color:#ffffff>function platformConfig() {<br>return {<br>"bounces": true,<br>"enableDictionary": false,<br>};<br>}<br></label><br><label style=color:#f2f1f1>/*<br>@Function addCollectionViewToForm<br>@Description This API creates collection view with the<br>configurations provided and set it on a form<br>Written in Form Controller<br>*/</label><br><br><label style=color:#ffffff>addCollectionViewToForm : function()<br>{<br>var bsp = basicConfig();<br>var lsp = layoutConfig();<br>var psp = platformConfig();<br>bsp.onItemSelect = this.setSelectionCallback;<br>bsp.data = item;<br>bsp.layout = kony.collectionview.LAYOUT_HORIZONTAL;<br>bsp.contentSize = null;<br>psp.bounces = false;<br>var collectionView = new kony.ui.CollectionView(bsp,lsp,psp);<br>this.view.flxMainLanding.add(collectionView);<br>this.view.forceLayout();<br>}<br></label><br>'
        },

        {
            "APIName": "Navigation Bar",
            "Description": "Navigation bar appears at the top of an app screen, below the status bar, and enables navigation through a series of hierarchical app screens. When a new screen is displayed, a back button, often labeled with the title of the previous screen, appears on the left side of the bar.",
            "DocLink": 'Please find it documented in Kony Documentation here <br> <a href = "http://docs.kony.com/konylibrary/visualizer/viz_widget_prog_guide/Default.htm#Tool_and_Navigation_bars_for_iOS.htm">Navigation Bar</a>',
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
            "DocLink": 'Please find it documented in Kony Documentation here<br> <a href = "http://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#toast_api.htm%3FTocPath%3DOverviews%7C_____50">Toast API</a>',
            "CodeSnippet": '<label style=color:#f2f1f1>/*<br>@Function showToast<br>@Description This API accepts a string and populate to a toast<br>@Written in Form Controller<br>*/</label><br><label style=color:#ffffff>showToast : function(toastText)<br>{<br>var toast = new kony.ui.Toast({"text":toastText, "duration":constants.SHORT});<br>var offset = {<br>gravity: constants.TOAST_POS_BOTTOM_CENTER<br>};<br>toast.alignConfig = offset;<br>toast.show();<br>}<br></label>'
        }
    ],
    collectionViewData: item,
    changeLayoutFlag: true,
    helpClicked: false,
    onNavigate: function() {
        if (flag === false)
            stopAudio();
        for (var sections in this.collectionViewData) {
            for (var rows in this.collectionViewData[sections][1]) {
                if (kony.os.deviceInfo().name === "android")
                    this.collectionViewData[sections][1][rows]["flxCollection"]["width"] = "49.7%";
                else if (kony.os.deviceInfo().name === "iPhone")
                    this.collectionViewData[sections][1][rows]["flxCollection"]["width"] = "50%";

            }
        }

        this.addViewToForm();
        if (this.helpClicked === true) {
            this.initInterstitial();
            this.helpClicked = false;
        }


    },

    /*
    	@Function addViewToForm()
        @Description This API sets the collection view to form by providing data

    */
    addViewToForm: function() {
        if (kony.store.getItem("oneTimeInitFlag") === undefined || kony.store.getItem("oneTimeInitFlag") === null || kony.store.getItem("oneTimeInitFlag") === "false") {
            this.initInterstitial();
            kony.store.setItem("oneTimeInitFlag", "true");
        } else {
            this.view.flxInterstitial.setVisibility(false);
        }

        if (this.changeLayoutFlag === true) {
            this.addCollectionViewToForm();
            this.view.myCollectionView.setVisibility(true);
        }

    },

    /*
	@Function addCollectionViewToForm
    @Description This API creates collection view with the 
    configurations provided and set it on a form    			 
*/
    addCollectionViewToForm: function() {
        var bsp = basicConfig();
        var lsp = layoutConfig();
        var psp = platformConfig();
        bsp.onItemSelect = this.setSelectionCallback;
        bsp.data = this.collectionViewData;
        bsp.layout = kony.collectionview.LAYOUT_HORIZONTAL;
        bsp.contentSize = null;
        psp.bounces = false;
        var collectionView = new kony.ui.CollectionView(bsp, lsp, psp);
        this.view.flxMainLanding.add(collectionView);
        this.view.forceLayout();
    },
    addSegmentToForm: function() {
        this.view.sgmtItemList.widgetDataMap = {
            "lblAPInameList": "lblAPIname",
            "lblHeader": "lblHeader",
            "FileImageList": "FileImage",
            "thumbnailList": "thumbnail"
        };
        this.view.sgmtItemList.setData(item);

    },
    screenFlag: true,
    index: 0,
    screenData: [{
        image: "arrow_1.png",
        textTop: "65",
        top: "76",
        left: "58",
        text: "Tap this button to see the APIs used in the current screen and corresponding code snippets.."
    }, {
        image: "arrow_2.png",
        textTop: "12",
        top: "3",
        left: "4",
        text: "Tap here to see additional menu items.."
    }, {
        image: "arrow_2.png",
        textTop: "37",
        top: "26",
        left: "36",
        text: "Select this mode to see the list of new APIs and explore the implementation details for each.."
    }],
    initInterstitial: function() {
        this.view.flxInterstitial.setVisibility(true);
        this.setPointer(this.screenData[0]);
    },
    setPointer: function(screendata) {
        this.screenFlag = true;
        var widgetTop = parseInt(screendata.top);
        var widgetLeft = parseInt(screendata.left);
        var flxTextTop = parseInt(screendata.textTop);
        this.view.imgDirection.top = widgetTop + "%";
        this.view.imgDirection.left = widgetLeft + "%";
        this.view.imgDirection.src = screendata.image;
        this.view.flxText.top = flxTextTop + "%";
        this.view.lblText.text = screendata.text;
        if (this.view.flxInterstitial.isVisible === true) {
            this.view.flxFullPage.setEnabled(false);
            this.view.hamburger.setEnabled(false);
            this.view.flxCover.setEnabled(false);
            this.index++;
        }


    },
    setSelectionCallback: function(eventobject, sectionindex, rowindex) {
        kony.print("Event Object" + eventobject);
        var finalObject = eventobject.data;
        var navigat;
        var selectedData = eventobject.data[sectionindex][1][rowindex];

        if (selectedData["lblAPIname"]["text"] === "Zip") {
            this.showToast("Cannot open .zip file");
            return;
        } else if (finalObject[sectionindex][0]["lblHeader"]["text"] === "Music") {
            navigat = new kony.mvc.Navigation("frmAudioDetails");
            navigat.navigate(selectedData["lblAPIname"]["filename"]);
            return;
        } else if (finalObject[sectionindex][0]["lblHeader"]["text"] === "Image") {
            if (selectedData["lblAPIname"]["text"] === "Image") {
                alert("Sorry! No Image Available");
                return;
            }
            navigat = new kony.mvc.Navigation("frmImageDetails");
            navigat.navigate(selectedData["image"]["src"]);
            return;
        } else if (finalObject[sectionindex][0]["lblHeader"]["text"] === "PDF") {
            navigat = new kony.mvc.Navigation("frmPDFDetails");
            navigat.navigate(selectedData["lblAPIname"]["text"]);
            return;
        }

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
    onClickList: function() {
        this.view.flxListView.skin = "sknViewSelected";
        this.view.lblList.skin = "lblViewSelected";
        this.view.flxGridView.skin = "sknFlxViewUnselected";
        this.view.lblGrid.skin = "sknViewUnselected";
        //this.addSegmentToForm();
        this.view.myCollectionView.setVisibility(false);
        this.view.sgmtItemList.setVisibility(true);
        // this.view.forceLayout();
    },
    onClickGrid: function() {
        this.view.flxGridView.skin = "sknViewSelected";
        this.view.lblGrid.skin = "lblViewSelected";
        this.view.flxListView.skin = "sknFlxViewUnselected";
        this.view.lblList.skin = "sknViewUnselected";
        this.view.myCollectionView.setVisibility(true);
        this.view.sgmtItemList.setVisibility(false);
        //this.view.forceLayout();
    },
    onClickHelp: function() {
        this.hideHam();
        this.helpClicked = true;
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
        object.animate(
            kony.ui.createAnimation({
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
        var controllerScope = this;
        this.view.skin = "sknMenuBlue";
        this.view.flxCover.zIndex = 10;
        this.view.flxCover.isVisible = true;
        this.view.flxCover.left = "80%";
        this.view.flxCover.width = "20%";
        this.view.flxCover.height = "100%";
        this.view.flxShadow.isVisible = true;
        this.view.forceLayout();
        var loginMenuData = [{
                text: "Indexed Mode",
                src: "selection.png",
                callback: this.moveToAPIIndexed.bind(this)
            },
            {
                text: "Kony Base Camp",
                src: "selection.png",
                callback: function() {
                    controllerScope.hideHam();
                    kony.application.openURL("https://basecamp.kony.com/s/");
                }
            },
            {
                text: "Kony Documentation",
                src: "selection.png",
                callback: function() {
                    controllerScope.hideHam();
                    kony.application.openURL("https://community.kony.com/documentation");
                }
            }
        ];
        var otherAppsData = [{
                text: "News and Weather",
                src: "selection.png",
                callback: this.launchNewsAndWeather.bind(this)

            },
            {
                text: "Employee Directory",
                src: "selection.png",
                callback: function() {
                    alert("Link to Employee Directory App");
                }
            }
        ];
        this.view.hamburger.addMenuItems(loginMenuData);
        this.view.hamburger.addMenuItems2(otherAppsData);
        if (this.index === 2) {

            this.view.flxInterstitial.setVisibility(true);
            this.setPointer(this.screenData[this.index]);
            //this.index = 0;
        }

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
    moveToAPIIndexed: function() {
        this.view.hamburger.left = "-100%";
        this.animation(this.view.flxShadow, 1, 1, "0%", true);
        this.animation(this.view.flxFullPage, 1, 1, "0%", false);
        this.view.flxFullPage.left = "0%";
        this.view.flxCover.isVisible = false;
        this.view.flxShadow.isVisible = false;
        this.view.forceLayout();
        var nav = new kony.mvc.Navigation("frmAPIIndexed");
        nav.navigate();
    },
    onInterstitialButtonClick: function() {
        if (this.index >= 2) {
            if (this.index > 2)
                this.index = 0;
            this.view.flxInterstitial.setVisibility(false);
            this.view.flxFullPage.setEnabled(true);
            this.view.hamburger.setEnabled(true);
            this.view.flxCover.setEnabled(true);
            return;
        }
        this.setPointer(this.screenData[this.index]);
    },
    onClickFloatingButton: function() {
        var nav = new kony.mvc.Navigation("frmKnowledgeFramework");
        nav.navigate(this.data);
    },
    launchNewsAndWeather: function() {
        this.hideHam();
        if (kony.os.deviceInfo().name === "android") {
            kony.application.openURL("News://com.orgname.NewAndWeather");
        }
        if (kony.os.deviceInfo().name === "iPhone") {
            kony.application.openURL("News://");
        }

    }


});