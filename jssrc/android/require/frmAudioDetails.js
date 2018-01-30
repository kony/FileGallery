define("frmAudioDetails", function() {
    return function(controller) {
        function addWidgetsfrmAudioDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var headerContainer18 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "9%",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerIconLeft = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_da3aa9f62eae4117a10debaf5dd59733,
                "skin": "headerButtonBackSkin",
                "text": "Back",
                "top": "0dp",
                "width": "75dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
            var sliderAudio = new kony.ui.Slider({
                "centerX": "50%",
                "height": "45dp",
                "id": "sliderAudio",
                "isVisible": true,
                "leftSkin": "slSliderLeftBlue",
                "max": 100,
                "min": 0,
                "onSelection": controller.AS_Slider_d55aedbb37394051824313267aa0fe1a,
                "onTouchEnd": controller.AS_Slider_d3a444c9b4584e2c9c8e5ef913823e92,
                "rightSkin": "slSliderRightBlue",
                "selectedValue": 1,
                "step": 1,
                "thumbImage": "slider_android.png",
                "top": "300dp",
                "width": "284dp",
                "zIndex": 2
            }, {}, {
                "thickness": 3
            });
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
                "onClick": controller.AS_Button_dee6f1958d3740a8ae045dd07305f95a,
                "skin": "ButtonRoundFloatSkinNormal1",
                "width": "80dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            RoundFloatingButton.add(ButtonRoundFloat);
            var imgAudio = new kony.ui.Image2({
                "centerX": "50%",
                "height": "130dp",
                "id": "imgAudio",
                "isVisible": true,
                "skin": "slImage",
                "src": "mp3.png",
                "top": "55dp",
                "width": "150dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxData.add(sliderAudio, RoundFloatingButton, imgAudio);
            var footerPlayRewindForwardStop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "9%",
                "id": "footerPlayRewindForwardStop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0e87dd617ff5a41",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            footerPlayRewindForwardStop.setDefaultUnit(kony.flex.DP);
            var FlexContainer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0da5d82f430dc47",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            FlexContainer2.setDefaultUnit(kony.flex.DP);
            var btnPlay = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopyslButtonTransBlack0b417bb1ef78045",
                "height": "100%",
                "id": "btnPlay",
                "isVisible": true,
                "left": "25dp",
                "onClick": controller.AS_Button_bd02fa831310450c8e0d45b6205186aa,
                "skin": "CopyslButtonTransBlack0b417bb1ef78045",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Pause = new kony.ui.Label({
                "id": "Pause",
                "isVisible": false,
                "left": "31dp",
                "onTouchEnd": controller.AS_Label_c4ebf2181d634b7ebeffc8aff412230d,
                "skin": "CopyslFontAwesomeIcon0d520109a8bc34b",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "13dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainer2.add(btnPlay, Pause);
            var FlexContainer4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "75%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0da5d82f430dc47",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            FlexContainer4.setDefaultUnit(kony.flex.DP);
            var btnStop = new kony.ui.Button({
                "focusSkin": "CopyslButtonTransBlack0f7b570cdb7504e",
                "height": "100%",
                "id": "btnStop",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f2a979ee5ba44309b159ac6a620456d6,
                "skin": "CopyslButtonTransBlack0f7b570cdb7504e",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer4.add(btnStop);
            var FlexContainer1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "12.50%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0a61505ef2c3448",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            FlexContainer1.setDefaultUnit(kony.flex.DP);
            var btnRewind = new kony.ui.Button({
                "focusSkin": "slButtonTransBlack",
                "height": "100%",
                "id": "btnRewind",
                "isVisible": true,
                "left": "0dp",
                "onTouchEnd": controller.AS_Button_f7c3194f989041d4b539620c65ba79cd,
                "skin": "slButtonTransBlack",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer1.add(btnRewind);
            var FlexContainer3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0a61505ef2c3448",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            FlexContainer3.setDefaultUnit(kony.flex.DP);
            var btnForward = new kony.ui.Button({
                "focusSkin": "slButtonTransBlack",
                "height": "100%",
                "id": "btnForward",
                "isVisible": true,
                "left": "0dp",
                "onTouchEnd": controller.AS_Button_h91a83473de24284944d39ffbdc0c3fa,
                "skin": "slButtonTransBlack",
                "text": "",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer3.add(btnForward);
            footerPlayRewindForwardStop.add(FlexContainer2, FlexContainer4, FlexContainer1, FlexContainer3);
            this.add(headerContainer18, flxMenuLine, flxData, footerPlayRewindForwardStop);
        };
        return [{
            "addWidgets": addWidgetsfrmAudioDetails,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmAudioDetails",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "CopyslForm0dbbc9313005749"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 3
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});