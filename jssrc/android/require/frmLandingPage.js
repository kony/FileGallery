define("frmLandingPage", function() {
    return function(controller) {
        function addWidgetsfrmLandingPage() {
            this.setDefaultUnit(kony.flex.DP);
            var flxInterstitial = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxInterstitial",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknInterstitial",
                "top": "0dp",
                "width": "100%",
                "zIndex": 299
            }, {}, {});
            flxInterstitial.setDefaultUnit(kony.flex.DP);
            var flxText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "CopyslFbox0bdbbf6e1534b4b",
                "top": "12%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxText.setDefaultUnit(kony.flex.DP);
            var lblText = new kony.ui.Label({
                "id": "lblText",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblInterstitial",
                "text": "This is help text.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxText.add(lblText);
            var imgDirection = new kony.ui.Image2({
                "height": "10%",
                "id": "imgDirection",
                "isVisible": true,
                "left": "2%",
                "skin": "slImage",
                "src": "arrow_2.png",
                "top": "2.50%",
                "width": "25%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnOK = new kony.ui.Button({
                "height": "30dp",
                "id": "btnOK",
                "isVisible": true,
                "onClick": controller.AS_Button_bf9af04f711a4bc98e621d5de25d4199,
                "right": "5%",
                "skin": "CopysknbtnFocus0f162bd7ebeaa4a",
                "top": "2%",
                "width": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInterstitial.add(flxText, imgDirection, btnOK);
            var flxFullPage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFullPage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c5054568cf1e40",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxFullPage.setDefaultUnit(kony.flex.DP);
            var headerContainer07 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                "text": "Home",
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
                "centerY": "50%",
                "id": "headerIconLeft",
                "isVisible": false,
                "left": "11dp",
                "skin": "headerCartIconSkin",
                "text": "",
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
                "onTouchEnd": controller.AS_Button_f8e01adafad446799e1a22e1b07ef5d4,
                "skin": "headerButtonClearSkin",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgMenu = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgMenu",
                "isVisible": true,
                "left": "16dp",
                "skin": "slImage",
                "src": "menu_icon.png",
                "top": "19dp",
                "width": "20dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer07.add(headerTitleLabel, headerIconLeft, headerButtonLeft, imgMenu);
            var flxSubheader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxSubheader",
                "isVisible": false,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRecent = new kony.ui.Label({
                "bottom": "4dp",
                "centerX": "50%",
                "id": "lblRecent",
                "isVisible": true,
                "onTouchEnd": controller.AS_Label_d2b9a6bf49724b62a3cda73e06f72ca4,
                "skin": "sknlblSubHeader",
                "text": "Recent",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDownloaded = new kony.ui.Label({
                "bottom": "4dp",
                "id": "lblDownloaded",
                "isVisible": true,
                "onTouchEnd": controller.AS_Label_cd8ba1ee15a3471c8ae1467fdf767662,
                "right": "0%",
                "skin": "sknlblSubHeader",
                "text": "Downloaded",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "skin": "CopyslFbox0f1e36463323f41",
                "top": "10%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxLanding.setDefaultUnit(kony.flex.DP);
            var flxMainLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknLandingPage",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxMainLanding.setDefaultUnit(kony.flex.DP);
            var sgmtItemList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "lblHeader": "Type",
                            "lblLine": "Label",
                            "lblShowAll": "Label"
                        },
                        [{
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }, {
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }, {
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }]
                    ],
                    [{
                            "lblHeader": "Type",
                            "lblLine": "Label",
                            "lblShowAll": "Label"
                        },
                        [{
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }, {
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }, {
                            "FileImageList": "",
                            "lblAPInameList": "Label",
                            "thumbnailList": "imagedrag.png"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "sgmtItemList",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_i304c7543be342c68aa96cdd41747507,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": true,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSegmentRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FileImageList": "FileImageList",
                    "flxHeader": "flxHeader",
                    "flxSegmentRow": "flxSegmentRow",
                    "lblAPInameList": "lblAPInameList",
                    "lblHeader": "lblHeader",
                    "lblLine": "lblLine",
                    "lblShowAll": "lblShowAll",
                    "thumbnailList": "thumbnailList"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var RoundFloatingButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "RoundFloatingButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "74.33%",
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
                "height": "100.30%",
                "id": "ButtonRoundFloat",
                "isVisible": true,
                "onClick": controller.AS_Button_ha2d8e2faffe4b8dadd49949b4f10c1a,
                "skin": "ButtonRoundFloatSkinNormal1",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            RoundFloatingButton.add(ButtonRoundFloat);
            flxMainLanding.add(sgmtItemList, RoundFloatingButton);
            flxLanding.add(flxMainLanding);
            var footerEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "footerEdit",
                "isVisible": false,
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
                "onClick": controller.AS_FlexContainer_bed72d204e34434d920148bb807abf53,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "onClick": controller.AS_FlexContainer_fd746b5d77434f6588e9f44b664a45d0,
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "top": "10%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxMenuLine.setDefaultUnit(kony.flex.DP);
            flxMenuLine.add();
            flxFullPage.add(headerContainer07, flxSubheader, flxLanding, footerEdit, flxMenuLine);
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_h584f29943e64d0faa8cea2453f03f42,
                "skin": "CopyslFbox0e75b49a7640242",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCover.setDefaultUnit(kony.flex.DP);
            flxCover.add();
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_cb84f0ece0cc4bf7ae97cbc05b1a9948,
                "skin": "CopyslFbox0d141f828ff684b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var hamburger = new com.konymp.slidingmenu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyCopyslFbox0f97d911c166740",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            hamburger.headerFlexHeight = "16%";
            hamburger.headingText = "File Gallery";
            hamburger.headingTop = "10%";
            hamburger.menuControlFlexHeight = "31%";
            hamburger.menuControlFlexTop = "25%";
            hamburger.subHeadingText = "v1.0";
            hamburger.subHeadingTop = "5%";
            hamburger.slidingMenuDirection = "\"Left\"";
            hamburger.headerAnimation = "\"Slide In\"";
            hamburger.profileImageType = "\"Circle\"";
            hamburger.footerStyle = "\"only Image\"";
            hamburger.slidingMenuSkin = "sknMainSliding";
            hamburger.headingSkin = "CopyCopysknLblNunitof";
            hamburger.subHeadingSkin = "CopyCopysknlblnunitoLightf1";
            hamburger.menuItemTextSkin = "sknlblnunito";
            hamburger.footerTextSkin = "sknlblnunito";
            hamburger.menuItemHeaderTextSkin = "slFLabel";
            hamburger.btnClickSkin = "sknBtnTransperant";
            hamburger.callbackMode = false;
            hamburger.onClickFooterHelp = controller.AS_UWI_a9dca9dcfa8949358f98e57d307106db;
            hamburger.onClickFooterShare = controller.AS_UWI_a8a0bbd8f32c4b28a5a6ecb4ca8fe16b;
            this.add(flxInterstitial, flxFullPage, flxCover, flxShadow, hamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmLandingPage,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmLandingPage",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0f07cf9d8d95549"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 2
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "outTransitionConfig": {
                "formAnimation": 0
            },
            "retainScrollPosition": true,
            "titleBar": false,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});