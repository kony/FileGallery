define("flxCollection", function() {
    return function(controller) {
        var flxCollection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "170dp",
            "id": "flxCollection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFullFlex"
        }, {}, {});
        flxCollection.setDefaultUnit(kony.flex.DP);
        var flxMainCollection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainCollection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "skntmpCollection",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMainCollection.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgArrow",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "unselected.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var thumbnail = new kony.ui.Image2({
            "centerX": "50%",
            "height": "70%",
            "id": "thumbnail",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0a9bf32bb08fd48 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "29.89%",
            "id": "FlexContainer0a9bf32bb08fd48",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "right": "0dp",
            "skin": "CopyslFbox0c034ffcaa19c4f",
            "zIndex": 2
        }, {}, {});
        FlexContainer0a9bf32bb08fd48.setDefaultUnit(kony.flex.DP);
        var lblAPIname = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "40%",
            "id": "lblAPIname",
            "isVisible": true,
            "skin": "CopyslLabel0e30f84741edc40",
            "text": "LABEL",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        FlexContainer0a9bf32bb08fd48.add(lblAPIname);
        flxMainCollection.add(imgArrow, thumbnail, FlexContainer0a9bf32bb08fd48);
        flxCollection.add(flxMainCollection);
        return flxCollection;
    }
})