define("frmPDFDetails", function() {
    return function(controller) {
        function addWidgetsfrmPDFDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var headerContainer18 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "10%",
                "id": "headerContainer18",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer18.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "72dp",
                "right": "72dp",
                "skin": "headerTitleSkinMaster",
                "text": "Title",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var headerIconLeft = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin",
                "text": "",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_h329eb0c40de49eda98976facc939d2b,
                "skin": "headerButtonBackSkin",
                "text": "Back",
                "width": "75dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "showProgressIndicator": true
            });
            headerContainer18.add(headerTitleLabel, headerIconLeft, headerButtonLeft);
            var flxMenuLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxMenuLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0ja0119efebbf44",
                "top": "0%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxMenuLine.setDefaultUnit(kony.flex.DP);
            flxMenuLine.add();
            var flxData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "81%",
                "id": "flxData",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFullFlex",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxData.setDefaultUnit(kony.flex.DP);
            var onlinepdfviewer = new com.konymp.onlinepdfviewer({
                "clipBounds": true,
                "height": "100%",
                "id": "onlinepdfviewer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyCopyslFbox0e3db619549424b",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            onlinepdfviewer.url = "http://forms.kony.com/rs/konysolutions/images/DS-Kony-Marketplace.pdf";
            flxData.add(onlinepdfviewer);
            var footerEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "9%",
                "id": "footerEdit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "footerSkin",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            footerEdit.setDefaultUnit(kony.flex.DP);
            footerEdit.add();
            this.add(headerContainer18, flxMenuLine, flxData, footerEdit);
        };
        return [{
            "addWidgets": addWidgetsfrmPDFDetails,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmPDFDetails",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "CopyslForm0i8b9bc4514254e"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "inTransitionConfig": {
                "transitionDirection": "fromRight",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionPush"
            },
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});