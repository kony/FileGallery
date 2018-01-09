define("flxRow", function() {
    return function(controller) {
        var flxRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknRowTemp"
        }, {}, {});
        flxRow.setDefaultUnit(kony.flex.DP);
        var lblAPIName = new kony.ui.Label({
            "centerY": "50.41%",
            "id": "lblAPIName",
            "isVisible": true,
            "left": "40dp",
            "skin": "sknlbltemp",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var AngleRight = new kony.ui.Label({
            "centerY": "50%",
            "id": "AngleRight",
            "isVisible": true,
            "right": "5%",
            "skin": "slFontAwesomeIcon",
            "text": "",
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
        flxRow.add(lblAPIName, AngleRight);
        return flxRow;
    }
})