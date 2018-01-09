define("frmImageDetails", function() {
    return function(controller) {
        function addWidgetsfrmImageDetails() {
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
                "onClick": controller.AS_Button_g1530ce93ae442df8746165c1313f236,
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
                "height": "90%",
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
            var imageFile = new kony.ui.Image2({
                "centerX": "50%",
                "height": "305dp",
                "id": "imageFile",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "10dp",
                "width": "95%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var footerEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "10%",
                "id": "footerEdit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "footerSkin",
                "top": "90%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            footerEdit.setDefaultUnit(kony.flex.DP);
            var FlexContainer0je9c65c155b04b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer0je9c65c155b04b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "right": "0%",
                "skin": "slFbox0ec1024cdbe8443",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            FlexContainer0je9c65c155b04b.setDefaultUnit(kony.flex.DP);
            FlexContainer0je9c65c155b04b.add();
            footerEdit.add(FlexContainer0je9c65c155b04b);
            var RoundFloatingButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "RoundFloatingButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "75.33%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0d404311285cb47",
                "top": "76.36%",
                "width": "80dp",
                "zIndex": 6
            }, {}, {});
            RoundFloatingButton.setDefaultUnit(kony.flex.DP);
            var ButtonRoundFloat = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "ButtonRoundFloatShadowSkinFocus",
                "height": "80dp",
                "id": "ButtonRoundFloat",
                "isVisible": true,
                "onClick": controller.AS_Button_e8e54a58326f4ad08cc95e740457e813,
                "skin": "ButtonRoundFloatSkinNormal1",
                "width": "80dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            RoundFloatingButton.add(ButtonRoundFloat);
            flxData.add(imageFile, footerEdit, RoundFloatingButton);
            this.add(headerContainer18, flxMenuLine, flxData);
        };
        return [{
            "addWidgets": addWidgetsfrmImageDetails,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmImageDetails",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "CopyslForm0i5f3a6546a2f42"
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
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionPush"
            },
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});