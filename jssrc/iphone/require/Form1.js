define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_e6a1cafbd24f4d75b1ec645919028d86,
                "skin": "CopyslFbox0d141f828ff684b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_c9388069e3254cbe9b91a6b0910c9d8c,
                "skin": "CopyslFbox0e75b49a7640242",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCover.setDefaultUnit(kony.flex.DP);
            flxCover.add();
            var flxFullPage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFullPage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxFullPage.setDefaultUnit(kony.flex.DP);
            var KnowledgeFramework1 = new com.konycmpt.KnowledgeFramework1({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFramework1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "100%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            var headerContainer07 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "10%",
                "id": "headerContainer07",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            headerContainer07.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "72dp",
                "right": "72dp",
                "skin": "headerTitleSkinMaster",
                "text": "Landing Page",
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
                "centerY": "50%",
                "id": "headerIconLeft",
                "isVisible": false,
                "left": "11dp",
                "skin": "headerCartIconSkin",
                "text": "",
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
                "onTouchEnd": controller.AS_Button_e3563177c78f48e6bb8bc15834ccac84,
                "skin": "headerButtonClearSkin",
                "top": "0dp",
                "width": "43dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "showProgressIndicator": true
            });
            var lblMenuIcon = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMenuIcon",
                "isVisible": true,
                "left": "9dp",
                "skin": "sknHamMenu",
                "text": "",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            headerContainer07.add(headerTitleLabel, headerIconLeft, headerButtonLeft, lblMenuIcon);
            var flxSubheader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxSubheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknSubHeader",
                "top": "9%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSubheader.setDefaultUnit(kony.flex.DP);
            var flxLineSubHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxLineSubHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0i7b3c74b280c47",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxLineSubHeader.setDefaultUnit(kony.flex.DP);
            flxLineSubHeader.add();
            var lblAll = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblAll",
                "isVisible": true,
                "left": "0dp",
                "onTouchEnd": controller.AS_Label_d284b840e123496aaf44d786da3e9dd8,
                "skin": "sknlblSubHeader",
                "text": "All",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblRecent = new kony.ui.Label({
                "bottom": "4dp",
                "centerX": "50%",
                "id": "lblRecent",
                "isVisible": true,
                "onTouchEnd": controller.AS_Label_d2b9a6bf49724b62a3cda73e06f72ca4,
                "skin": "sknlblSubHeader",
                "text": "Recent",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDownloaded = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblDownloaded",
                "isVisible": true,
                "onTouchEnd": controller.AS_Label_cd8ba1ee15a3471c8ae1467fdf767662,
                "right": "0%",
                "skin": "sknlblSubHeader",
                "text": "Downloaded",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSubheader.add(flxLineSubHeader, lblAll, lblRecent, lblDownloaded);
            var flxLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onTouchMove": controller.AS_FlexContainer_d565099221b8479c81d0cfcdbb8f8bd2,
                "skin": "CopyslFbox0f1e36463323f41",
                "top": "10%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxLanding.setDefaultUnit(kony.flex.DP);
            var flxMainLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93.56%",
                "id": "flxMainLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknLandingPage",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainLanding.setDefaultUnit(kony.flex.DP);
            flxMainLanding.add();
            flxLanding.add(flxMainLanding);
            var footerEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "footerEdit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "footerSkin",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            footerEdit.setDefaultUnit(kony.flex.DP);
            var flxListView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxListView",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "onClick": controller.AS_FlexContainer_d080d832c4f44e3d896032d5b0717cd5,
                "right": "14.469999999999999%",
                "skin": "sknFlxViewUnselected",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxListView.setDefaultUnit(kony.flex.DP);
            var lblList = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblList",
                "isVisible": true,
                "skin": "sknViewUnselected",
                "text": "",
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
            flxListView.add(lblList);
            var flxGridView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxGridView",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "onClick": controller.AS_FlexContainer_b6d7e33b80f3492b817722681d253c4d,
                "right": "2.1399999999999997%",
                "skin": "sknViewSelected",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxGridView.setDefaultUnit(kony.flex.DP);
            var lblGrid = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblGrid",
                "isVisible": true,
                "skin": "lblViewSelected",
                "text": "",
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
            flxGridView.add(lblGrid);
            var flxLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "12%",
                "skin": "sknLine",
                "top": "4dp",
                "width": "2dp",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            flxLine.add();
            footerEdit.add(flxListView, flxGridView, flxLine);
            flxFullPage.add(KnowledgeFramework1, headerContainer07, flxSubheader, flxLanding, footerEdit);
            this.add(flxShadow, flxCover, flxFullPage);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": true,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": true,
            "titleBar": true,
            "titleBarConfig": {
                "renderTitleText": true,
                "prevFormTitle": false,
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back",
                "titleBarRightSideView": "button",
                "imageRightSideView": "calbtn.png"
            },
            "titleBarSkin": "slTitleBar"
        }]
    }
});