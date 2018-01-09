define("flxSegmentRow", function() {
    return function(controller) {
        var flxSegmentRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxSegmentRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknRowTemp"
        }, {}, {});
        flxSegmentRow.setDefaultUnit(kony.flex.DP);
        var FileImageList = new kony.ui.Label({
            "centerY": "50%",
            "id": "FileImageList",
            "isVisible": true,
            "left": "7dp",
            "skin": "CopyslLabel0ibbaafe1848e4a",
            "text": "",
            "top": "3dp",
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
        var lblAPInameList = new kony.ui.Label({
            "centerY": "52%",
            "id": "lblAPInameList",
            "isVisible": true,
            "left": "58dp",
            "skin": "sknlbltemp",
            "text": "Label",
            "top": "10dp",
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
        var thumbnailList = new kony.ui.Image2({
            "height": "30dp",
            "id": "thumbnailList",
            "isVisible": false,
            "left": "7dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "3dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSegmentRow.add(FileImageList, lblAPInameList, thumbnailList);
        return flxSegmentRow;
    }
})