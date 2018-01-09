define("flxHeader", function() {
    return function(controller) {
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknSection"
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblHeader = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "left": "1%",
            "skin": "sknLabel",
            "text": "Type",
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
        var lblShowAll = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblShowAll",
            "isVisible": false,
            "right": "1%",
            "skin": "CopyslLabel0acd4944fa1dd43",
            "text": "Show All",
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
        var lblLine = new kony.ui.Label({
            "centerX": "50%",
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "skin": "CopyslLabel0f7d818c3d91e47",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxHeader.add(lblHeader, lblShowAll, lblLine);
        return flxHeader;
    }
})