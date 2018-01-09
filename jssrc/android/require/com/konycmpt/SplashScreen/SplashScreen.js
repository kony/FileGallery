define(function() {
    return function(controller) {
        var SplashScreen = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "SplashScreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_h5f441c918b243e78a570d74abb0e724,
            "preShow": controller.AS_FlexContainer_e29f618a4850434aa7fc1a10bdd67178,
            "skin": "CopyCopyslFbox4",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        SplashScreen.setDefaultUnit(kony.flex.DP);
        var segGetStarted = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgGetStart": "img1.png",
                "lblAppTitle": "Label",
                "lblSplashDesc": "RichText",
                "lblStrip": "Label"
            }, {
                "imgGetStart": "img1.png",
                "lblAppTitle": "Label",
                "lblSplashDesc": "RichText",
                "lblStrip": "Label"
            }],
            "groupCells": false,
            "height": "75%",
            "id": "segGetStarted",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "pageOffDotImage": "dot_normal.png",
            "pageOnDotImage": "dot_active.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg3",
            "rowSkin": "Copyseg0a43167f6bc544a",
            "rowTemplate": "flxFullSplashScreen",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopysliPhoneSegmentHeader2",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "5%",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flexAppName": "flexAppName",
                "flxDescription": "flxDescription",
                "flxFullSplashScreen": "flxFullSplashScreen",
                "flxImgContainer": "flxImgContainer",
                "imgGetStart": "imgGetStart",
                "lblAppTitle": "lblAppTitle",
                "lblSplashDesc": "lblSplashDesc",
                "lblStrip": "lblStrip"
            },
            "widgetSkin": "CopyCopyseg",
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxToolbar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxToolbar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopysknSplashToolbar1",
            "top": "100%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxToolbar.setDefaultUnit(kony.flex.DP);
        var btnGetStarted = new kony.ui.Button({
            "bottom": "90%",
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "CopyCopyslButtonGlossRed2",
            "height": "100%",
            "id": "btnGetStarted",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_ad16b736d53e480f9d67cd6cb5223666,
            "skin": "CopyCopyslButtonGlossBlue1",
            "text": "Get Started",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxToolbar.add(btnGetStarted);
        SplashScreen.add(segGetStarted, flxToolbar);
        return SplashScreen;
    }
})