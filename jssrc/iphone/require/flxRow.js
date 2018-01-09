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
            "top": "1dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRow.add(lblAPIName);
        return flxRow;
    }
})