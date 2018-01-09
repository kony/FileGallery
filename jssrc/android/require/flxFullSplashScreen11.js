define("flxFullSplashScreen11", function() {
    return function(controller) {
        var flxFullSplashScreen11 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFullSplashScreen11",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopysknSplash",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxFullSplashScreen11.setDefaultUnit(kony.flex.DP);
        var flxImgContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.04%",
            "id": "flxImgContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyslFbox3",
            "top": "13%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxImgContainer.setDefaultUnit(kony.flex.DP);
        var imgGetStart = new kony.ui.Image2({
            "centerX": "50.00%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgGetStart",
            "isVisible": true,
            "skin": "CopyslImage4",
            "src": "img1.png",
            "width": "90%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgContainer.add(imgGetStart);
        var flxDescription = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "13%",
            "id": "flxDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyslFbox2",
            "top": "5%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDescription.setDefaultUnit(kony.flex.DP);
        var lblSplashDesc = new kony.ui.Label({
            "centerX": "50.00%",
            "height": "100%",
            "id": "lblSplashDesc",
            "isVisible": true,
            "skin": "CopysknLabelSplash",
            "text": "Description goes here\nDescription goes here",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDescription.add(lblSplashDesc);
        flxFullSplashScreen11.add(flxImgContainer, flxDescription);
        return flxFullSplashScreen11;
    }
})