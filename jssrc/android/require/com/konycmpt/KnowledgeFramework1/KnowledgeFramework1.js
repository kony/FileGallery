define(function() {
    return function(controller) {
        var KnowledgeFramework1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "KnowledgeFramework1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 50
        }, {}, {});
        KnowledgeFramework1.setDefaultUnit(kony.flex.DP);
        var RoundFloatingButtonWithShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "RoundFloatingButtonWithShadow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "78%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "CopyslFbox0f50377f2b7e646",
            "top": "77%",
            "width": "18.60%",
            "zIndex": 2
        }, {}, {});
        RoundFloatingButtonWithShadow.setDefaultUnit(kony.flex.DP);
        var FlxOverlay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "55dp",
            "id": "FlxOverlay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "skin": "CopyslFbox0b753441fbc1d48",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        FlxOverlay.setDefaultUnit(kony.flex.DP);
        FlxOverlay.add();
        var ButtonRoundFloatWithShadow = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ButtonRoundFloatShadowSkinFocus",
            "height": "55dp",
            "id": "ButtonRoundFloatWithShadow",
            "isVisible": true,
            "onClick": controller.AS_Button_g3ef0b69037b49fea0b05328a98c5383,
            "skin": "ButtonRoundFloatShadowSkinNormal",
            "text": "< />",
            "width": "55dp",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        RoundFloatingButtonWithShadow.add(FlxOverlay, ButtonRoundFloatWithShadow);
        var flxDeveloperCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeveloperCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFullFlex",
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
            "skin": "sknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, {}, {});
        flxHeadingBar.setDefaultUnit(kony.flex.DP);
        var flxbtnClose = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxbtnClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_h314be8536c14244aed44bb5da39740c,
            "right": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "18%",
            "zIndex": 1
        }, {}, {});
        flxbtnClose.setDefaultUnit(kony.flex.DP);
        var btnClose = new kony.ui.Button({
            "centerX": "48%",
            "centerY": "50%",
            "focusSkin": "sknbtnFocus",
            "height": "42.49%",
            "id": "btnClose",
            "isVisible": true,
            "onTouchEnd": controller.AS_Button_abe4f10e0f104eda85096deca9556e0b,
            "right": "4%",
            "skin": "sknbtn",
            "text": "Done",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxbtnClose.add(btnClose);
        var flxHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "18%",
            "onTouchEnd": controller.AS_FlexContainer_edd606b3f1ca4d11a8eee363db772f5f,
            "onTouchStart": controller.AS_FlexContainer_d53e76a2dd634dad933d5de3606bd715,
            "skin": "slFbox",
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
            "skin": "sknLabelHeading",
            "text": "Behind The Scene",
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
        var flxArrows = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxArrows",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "18%",
            "zIndex": 1
        }, {}, {});
        flxArrows.setDefaultUnit(kony.flex.DP);
        var AngleDoubleUp = new kony.ui.Label({
            "centerY": "50%",
            "height": "85%",
            "id": "AngleDoubleUp",
            "isVisible": false,
            "left": "25%",
            "skin": "CopyslFontAwesomeIcon0e46f746652714d",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var AngleDoubleDown = new kony.ui.Label({
            "centerY": "50%",
            "height": "85%",
            "id": "AngleDoubleDown",
            "isVisible": false,
            "left": "25%",
            "skin": "CopyslFontAwesomeIcon0ce617d16392f47",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LongArrowLeft = new kony.ui.Label({
            "centerY": "50%",
            "height": "85%",
            "id": "LongArrowLeft",
            "isVisible": true,
            "left": "25%",
            "skin": "CopyslFontAwesomeIcon0e5f644b4733843",
            "text": "",
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
        flxArrows.add(AngleDoubleUp, AngleDoubleDown, LongArrowLeft);
        var btnArrows = new kony.ui.Button({
            "height": "100%",
            "id": "btnArrows",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_fa60c1d3fb1f4fddbf1be6b2f184f2f3,
            "skin": "CopyslButtonGlossBlue0af14307e3edc44",
            "top": "0dp",
            "width": "18%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeadingBar.add(flxbtnClose, flxHeading, flxArrows, btnArrows);
        var flxSegData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxSegData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSegData.setDefaultUnit(kony.flex.DP);
        var sgmtAPI = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
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
            "id": "sgmtAPI",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_a69848b46ac74c27b36d6d7b27ba82d5,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg0i700253cbe9342",
            "rowSkin": "sknSegKnowledge",
            "rowTemplate": "flxRow",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "dddddd00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
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
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFullKnowledge",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFullScreen.setDefaultUnit(kony.flex.DP);
        var flxrchTextDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxrchTextDesc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_a2f32bdea9d24e478fc0d187580337fd,
            "skin": "sknFlexDevCode",
            "top": "3%",
            "width": "92.84%",
            "zIndex": 1
        }, {}, {});
        flxrchTextDesc.setDefaultUnit(kony.flex.DP);
        var lblrchTextDesc = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblrchTextDesc",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLabelKnowledge",
            "text": "What's it ?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var arrowrchTextDesc = new kony.ui.Label({
            "centerY": "50%",
            "id": "arrowrchTextDesc",
            "isVisible": true,
            "left": "2%",
            "skin": "lblArrow",
            "text": "",
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
        flxrchTextDesc.add(lblrchTextDesc, arrowrchTextDesc);
        var rchTextDesc = new kony.ui.RichText({
            "id": "rchTextDesc",
            "isVisible": false,
            "left": "6%",
            "skin": "sknRchtxtDesc",
            "text": "hello\\n\nhi\\n\nqwe\n",
            "top": "2%",
            "width": "90.34%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxlblCodeSnippet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxlblCodeSnippet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_a12c7232c1184f62bd42cf40ec8b807c,
            "skin": "sknFlexDevCode",
            "top": "3%",
            "width": "92.84%",
            "zIndex": 1
        }, {}, {});
        flxlblCodeSnippet.setDefaultUnit(kony.flex.DP);
        var arrowlblCodeSnippet = new kony.ui.Label({
            "centerY": "50%",
            "id": "arrowlblCodeSnippet",
            "isVisible": true,
            "left": "2%",
            "skin": "lblArrow",
            "text": "",
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
        var lbllblCodeSnippet = new kony.ui.Label({
            "centerY": "50%",
            "id": "lbllblCodeSnippet",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLabelKnowledge",
            "text": "How to use ?",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnEmailTo = new kony.ui.Button({
            "height": "25dp",
            "id": "btnEmailTo",
            "isVisible": true,
            "left": "85%",
            "onClick": controller.AS_Button_h22a76bb9fad4bd798f156cb67b2d280,
            "skin": "CopyslButtonGlossBlue0ff01708de72f4f",
            "text": "",
            "top": "5dp",
            "width": "43dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxlblCodeSnippet.add(arrowlblCodeSnippet, lbllblCodeSnippet, btnEmailTo);
        var lblCodeSnippet = new kony.ui.RichText({
            "id": "lblCodeSnippet",
            "isVisible": false,
            "left": "6%",
            "skin": "sknCode",
            "text": "RichText",
            "top": "2%",
            "width": "91%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxrchtextDoc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "flxrchtextDoc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_g56f1e816e494b6ea6756d5d9675455a,
            "skin": "sknFlexDevCode",
            "top": "3%",
            "width": "92.84%",
            "zIndex": 1
        }, {}, {});
        flxrchtextDoc.setDefaultUnit(kony.flex.DP);
        var arrowrchtextDoc = new kony.ui.Label({
            "centerY": "50%",
            "id": "arrowrchtextDoc",
            "isVisible": true,
            "left": "2%",
            "skin": "lblArrow",
            "text": "",
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
        var lblrchtextDoc = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblrchtextDoc",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLabelKnowledge",
            "text": "Documentation Link",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxrchtextDoc.add(arrowrchtextDoc, lblrchtextDoc);
        var rchtextDoc = new kony.ui.RichText({
            "id": "rchtextDoc",
            "isVisible": false,
            "left": "6.00%",
            "linkSkin": "CopysknrchDoc0cfe557b5319844",
            "skin": "sknrchDoc",
            "text": "<a href = \"www.google.com\" >www.google.com </a>",
            "top": "2.00%",
            "width": "90.47%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFullScreen.add(flxrchTextDesc, rchTextDesc, flxlblCodeSnippet, lblCodeSnippet, flxrchtextDoc, rchtextDoc);
        flxSegData.add(sgmtAPI, flxFullScreen);
        flxDeveloperCode.add(flxHeadingBar, flxSegData);
        KnowledgeFramework1.add(RoundFloatingButtonWithShadow, flxDeveloperCode);
        return KnowledgeFramework1;
    }
})