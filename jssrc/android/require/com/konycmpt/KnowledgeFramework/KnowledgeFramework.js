define(function() {
    return function(controller) {
        var KnowledgeFramework = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "KnowledgeFramework",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox3",
            "top": "0%",
            "width": "100%",
            "zIndex": 50
        }, {}, {});
        KnowledgeFramework.setDefaultUnit(kony.flex.DP);
        var flxDeveloperCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeveloperCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopysknFullFlex",
            "top": "0%",
            "width": "100%",
            "zIndex": 50
        }, {}, {});
        flxDeveloperCode.setDefaultUnit(kony.flex.DP);
        var flxHeadingBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxHeadingBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopysknFlx",
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
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "CopysknLabelHeading",
            "text": "Services",
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
            "onClick": controller.AS_FlexContainer_jf582ae16db246a8aa7078364c207959,
            "skin": "CopyslFbox0i77fb336562f4e",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flexCloseClick.setDefaultUnit(kony.flex.DP);
        var btnClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "btnClose",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "closewhite.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexCloseClick.add(btnClose);
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
            "onClick": controller.AS_FlexContainer_eb36dc9d1d454a4db5a8ee39a0e85b9b,
            "skin": "CopyslFbox0i77fb336562f4e",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flexClickBack.setDefaultUnit(kony.flex.DP);
        var btnBack = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "btnBack",
            "isVisible": true,
            "skin": "CopyslImage5",
            "src": "back.png",
            "top": "21dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexClickBack.add(btnBack);
        flxHeadingBar.add(flxHeading, flexCloseClick, flexClickBack);
        var flxSegData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxSegData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0e0297f06a37947",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSegData.setDefaultUnit(kony.flex.DP);
        var sgmtAPI = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgLeftAPI": "imagedrag.png",
                "lblDummy": "",
                "lblNameOfAPI": "Label"
            }, {
                "imgLeftAPI": "imagedrag.png",
                "lblDummy": "",
                "lblNameOfAPI": "Label"
            }, {
                "imgLeftAPI": "imagedrag.png",
                "lblDummy": "",
                "lblNameOfAPI": "Label"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "sgmtAPI",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_d3e09723a5254b45ac9431b7e4bdbb06,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg2",
            "rowSkin": "Copyseg0h3978eb63f734f",
            "rowTemplate": "flexAPIs",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flexAPIs": "flexAPIs",
                "flexFreeAPI": "flexFreeAPI",
                "imgLeftAPI": "imgLeftAPI",
                "lblDummy": "lblDummy",
                "lblNameOfAPI": "lblNameOfAPI"
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
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopysknFullKnowledge",
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
            "onClick": controller.AS_FlexContainer_e007ca5e942e474fa13735d61e8be717,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc1.setDefaultUnit(kony.flex.DP);
        var lblAccordian1 = new kony.ui.Label({
            "centerY": "50.20%",
            "height": "100%",
            "id": "lblAccordian1",
            "isVisible": true,
            "left": "0.00%",
            "skin": "sknLabelKnowledgeSelected",
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
            "src": "chevron.png",
            "top": "21dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAcc1.add(lblAccordian1, btnAccordian1);
        var flexScrollDesc1 = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
            "horizontalScrollIndicator": true,
            "id": "flexScrollDesc1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "maxHeight": "70%",
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
            "skin": "CopyslRichText0befaf1717afb44",
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
            "onClick": controller.AS_FlexContainer_c048300a3ec34ffd93bc4493926ec85e,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc2.setDefaultUnit(kony.flex.DP);
        var lblAccordian2 = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAccordian2",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLabelKnowledgeUnselected",
            "text": "How to use ?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": "70%",
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
            "src": "chevron.png",
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
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
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
        var imgMail = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgMail",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_a32f3e4fe6334b9eb98a36d0783f1737,
            "right": "19%",
            "skin": "slImage",
            "src": "mail_icon.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnMail = new kony.ui.Button({
            "centerY": "50%",
            "height": "50dp",
            "id": "btnMail",
            "isVisible": true,
            "onClick": controller.AS_Button_gf7b5906cd7b4969b87f4c81564efed9,
            "right": "15%",
            "skin": "CopyslButtonGlossBlue0ded1ff7d0fad4c",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAcc2.add(lblAccordian2, btnAccordian2, lblStrip1, imgMail, btnMail);
        var flexScrollDesc2 = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "70%",
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
            "skin": "CopyslRichText0hd536424950643",
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
            "onClick": controller.AS_FlexContainer_abbbd3c02ea345acae74375d13194554,
            "skin": "CopysknFlexDevCode",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexAcc3.setDefaultUnit(kony.flex.DP);
        var lblAccordian3 = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAccordian3",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLabelKnowledgeUnselected",
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
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
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
            "src": "chevron.png",
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
            "skin": "CopysknLabelKnowledge0f9feaf03022349",
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
        flexAcc3.add(lblAccordian3, lblStrip3, btnAccordian3, lblStrip4);
        var flexScrollDesc3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flexScrollDesc3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_c4e3b910ebce44b58770be3ed6ba6531,
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
            "skin": "CopyslRichText0fd346071038149",
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
        flxDeveloperCode.add(flxHeadingBar, flxSegData);
        KnowledgeFramework.add(flxDeveloperCode);
        return KnowledgeFramework;
    }
})