define("frmAPIIndexed", function() {
    return function(controller) {
        function addWidgetsfrmAPIIndexed() {
            this.setDefaultUnit(kony.flex.DP);
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
                "zIndex": 5
            }, {}, {});
            flxFullPage.setDefaultUnit(kony.flex.DP);
            var headerContainer07 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "56dp",
                "id": "headerContainer07",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer07.setDefaultUnit(kony.flex.DP);
            var headerTitleLabel = new kony.ui.Label({
                "height": "100%",
                "id": "headerTitleLabel",
                "isVisible": true,
                "left": "72dp",
                "right": "72dp",
                "skin": "headerTitleSkinMaster",
                "text": "API Indexed",
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
                "onClick": controller.AS_Button_de593f1371a9457f883161c1eb3d693e,
                "skin": "headerButtonClearSkin",
                "text": "Back",
                "top": "0dp",
                "width": "59dp",
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
            var btnBack = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslButtonGlossBlue0jf4c7e2921c74d",
                "text": "",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer07.add(headerTitleLabel, headerIconLeft, headerButtonLeft, imgMenu, btnBack);
            var flxAPIIndexed = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAPIIndexed",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "skin": "CopyslFbox0ddff89459bda4f",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxAPIIndexed.setDefaultUnit(kony.flex.DP);
            var flxHeadingBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeadingBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyCopysknFlx0e6f31a7439af45",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHeadingBar.setDefaultUnit(kony.flex.DP);
            var flxHeading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHeading",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18%",
                "skin": "CopyslFbox3",
                "top": "0%",
                "width": "64.00%",
                "zIndex": 1
            }, {}, {});
            flxHeading.setDefaultUnit(kony.flex.DP);
            var lblHeading = new kony.ui.Label({
                "centerX": "30%",
                "centerY": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "skin": "CopysknLabelHeading0b09cb924ada147",
                "text": "Indexed Mode",
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
            flxHeading.add(lblHeading);
            var flexCloseClick = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0c6644658c65b4e",
                "height": "50dp",
                "id": "flexCloseClick",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "86%",
                "skin": "CopyslFbox0i77fb336562f4e",
                "top": "12dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flexCloseClick.setDefaultUnit(kony.flex.DP);
            flexCloseClick.add();
            var flexClickBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0c6644658c65b4e",
                "height": "50dp",
                "id": "flexClickBack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "onClick": controller.AS_FlexContainer_i96080a1566f4f449bdf3ea693dfa931,
                "skin": "CopyslFbox0i77fb336562f4e",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flexClickBack.setDefaultUnit(kony.flex.DP);
            var CopybtnBack0f1b0033c396b4f = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "CopybtnBack0f1b0033c396b4f",
                "isVisible": true,
                "skin": "CopyslImage5",
                "src": "back_icon.png",
                "top": "21dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexClickBack.add(CopybtnBack0f1b0033c396b4f);
            var flxMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_j71d844c8bb84c308c82721b223b6bac,
                "skin": "slFbox",
                "top": "0dp",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
            var CopyimgMenu0g00fbe4df8e24a = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyimgMenu0g00fbe4df8e24a",
                "isVisible": true,
                "skin": "slImage",
                "src": "menu_icon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMenu.add(CopyimgMenu0g00fbe4df8e24a);
            flxHeadingBar.add(flxHeading, flexCloseClick, flexClickBack, flxMenu);
            var flxSegData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxSegData",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0ccd9524b73c94e",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegData.setDefaultUnit(kony.flex.DP);
            var sgmtAPI = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "AngleRight": "",
                    "lblAPIName": "Label"
                }, {
                    "AngleRight": "",
                    "lblAPIName": "Label"
                }, {
                    "AngleRight": "",
                    "lblAPIName": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmtAPI",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_edaf4a3245964f8db94f3881edf4a4eb,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg2",
                "rowSkin": "Copyseg0e332f6232b8a42",
                "rowTemplate": "flxRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "CopysliPhoneSegmentHeader1",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "343e484f",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "AngleRight": "AngleRight",
                    "flxRow": "flxRow",
                    "lblAPIName": "lblAPIName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFullScreen = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100.18%",
                "horizontalScrollIndicator": true,
                "id": "flxFullScreen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "100%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFullKnowledge0b67859646c0243",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFullScreen.setDefaultUnit(kony.flex.DP);
            var flexAcc1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexAcc1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_d6bb7072db8c407082ba833e2d22e3ca,
                "skin": "CopysknFlexDevCode",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexAcc1.setDefaultUnit(kony.flex.DP);
            var lblrchTextDesc = new kony.ui.Label({
                "centerY": "50.20%",
                "height": "100%",
                "id": "lblrchTextDesc",
                "isVisible": true,
                "left": "0.00%",
                "skin": "CopysknLabelKnowledge0feb0803e7bc242",
                "text": "What's it ?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnAccordian1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "btnAccordian1",
                "isVisible": true,
                "left": "90%",
                "skin": "CopyslImage5",
                "src": "chevron_active.png",
                "top": "21dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexAcc1.add(lblrchTextDesc, btnAccordian1);
            var flexScrollDesc1 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flexScrollDesc1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "maxHeight": "40%",
                "minHeight": "33%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexScrollDesc1.setDefaultUnit(kony.flex.DP);
            var rchDesc1 = new kony.ui.RichText({
                "id": "rchDesc1",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0f4b9963e1dae4f",
                "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexScrollDesc1.add(rchDesc1);
            var flexAcc2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexAcc2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_j0338e211ed4493fa3a980e2b70f080d,
                "skin": "CopysknFlexDevCode",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexAcc2.setDefaultUnit(kony.flex.DP);
            var lbllblCodeSnippet = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lbllblCodeSnippet",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLabelKnowledge0feb0803e7bc242",
                "text": "How to use ?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnAccordian2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "btnAccordian2",
                "isVisible": true,
                "left": "90%",
                "skin": "CopyslImage5",
                "src": "chevron_active.png",
                "top": "21dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStrip1 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblStrip1",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLabelKnowledge0gea5b8e8819449",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexAcc2.add(lbllblCodeSnippet, btnAccordian2, lblStrip1);
            var flexScrollDesc2 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "65.98%",
                "horizontalScrollIndicator": true,
                "id": "flexScrollDesc2",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexScrollDesc2.setDefaultUnit(kony.flex.DP);
            var rchDesc2 = new kony.ui.RichText({
                "id": "rchDesc2",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslRichText0f4b9963e1dae4f",
                "text": "<b>INTEGRATION & ORCHESTRATION</b><br>Learn how to integrate and configure a backend integration to a rest service and then orchestrate the data response to optimize it for the mobile device using Kony MobileFabric.\n\n",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0ffb83cb7a75b48 = new kony.ui.Label({
                "height": "12%",
                "id": "Label0ffb83cb7a75b48",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslLabel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexScrollDesc2.add(rchDesc2, Label0ffb83cb7a75b48);
            var flexAcc3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexAcc3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_b1dd211e16384d63b804e5f2c73431cb,
                "skin": "CopysknFlexDevCode",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexAcc3.setDefaultUnit(kony.flex.DP);
            var lblrchtextDoc = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblrchtextDoc",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLabelKnowledge0feb0803e7bc242",
                "text": "Documentation Link",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStrip3 = new kony.ui.Label({
                "height": "1dp",
                "id": "lblStrip3",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLabelKnowledge0gea5b8e8819449",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "98%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnAccordian3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "btnAccordian3",
                "isVisible": true,
                "left": "90%",
                "skin": "CopyslImage5",
                "src": "chevron_active.png",
                "top": "21dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStrip4 = new kony.ui.Label({
                "bottom": "0%",
                "height": "1dp",
                "id": "lblStrip4",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLabelKnowledge0gea5b8e8819449",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flexAcc3.add(lblrchtextDoc, lblStrip3, btnAccordian3, lblStrip4);
            var flexScrollDesc3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flexScrollDesc3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_c22c85ea457543309d8ecd34b4f4e24d,
                "skin": "CopyslFbox5",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexScrollDesc3.setDefaultUnit(kony.flex.DP);
            var rchDesc3 = new kony.ui.RichText({
                "id": "rchDesc3",
                "isVisible": true,
                "left": "0.93%",
                "linkSkin": "CopyslRichText0bb5d088dd54940",
                "skin": "CopyslRichText0f4b9963e1dae4f",
                "text": "www.docs.kony.com",
                "top": "12.01%",
                "width": "97.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [4, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexScrollDesc3.add(rchDesc3);
            flxFullScreen.add(flexAcc1, flexScrollDesc1, flexAcc2, flexScrollDesc2, flexAcc3, flexScrollDesc3);
            flxSegData.add(sgmtAPI, flxFullScreen);
            flxAPIIndexed.add(flxHeadingBar, flxSegData);
            flxFullPage.add(headerContainer07, flxAPIIndexed);
            var flxCover = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCover",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_f5f63fc17f9649acb69bcf016afa2b8b,
                "skin": "slFbox",
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
                "onClick": controller.AS_FlexContainer_a63a7f1e78f6463485cb92e166d06bcf,
                "skin": "CopyslFbox0d141f828ff684b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
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
                "zIndex": 2
            }, {}, {});
            hamburger.headerFlexHeight = "16%";
            hamburger.headingText = "File Gallery";
            hamburger.headingTop = "10%";
            hamburger.menuControlFlexHeight = "31%";
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
            hamburger.onClickFooterHelp = controller.AS_UWI_f64a2c9347504da59eb2574f9855c22b;
            hamburger.onClickFooterShare = controller.AS_UWI_e7fcfff28d6f407887807511be841195;
            this.add(flxFullPage, flxCover, flxShadow, hamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmAPIIndexed,
            "enabledForIdleTimeout": false,
            "id": "frmAPIIndexed",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0jcbd1fa1bacd40"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});