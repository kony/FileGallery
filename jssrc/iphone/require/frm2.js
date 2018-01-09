define("frm2", function() {
    return function(controller) {
        function addWidgetsfrm2() {
            this.setDefaultUnit(kony.flex.DP);
            var Image0b92a18c8840148 = new kony.ui.Image2({
                "height": "85dp",
                "id": "Image0b92a18c8840148",
                "isVisible": true,
                "left": "38dp",
                "skin": "slImage",
                "src": "arrow1.png",
                "top": "76dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(Image0b92a18c8840148);
        };
        return [{
            "addWidgets": addWidgetsfrm2,
            "enabledForIdleTimeout": false,
            "id": "frm2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_b65113512f894e30a99bd811c70aa401,
            "skin": "CopyslForm0h597e84df95f47"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarConfig": {
                "renderTitleText": true,
                "prevFormTitle": false,
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back",
                "titleBarRightSideView": "button",
                "labelRightSideView": "Edit"
            },
            "titleBarSkin": "slTitleBar"
        }]
    }
});