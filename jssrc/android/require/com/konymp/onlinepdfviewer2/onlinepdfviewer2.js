define(function() {
    return function(controller) {
        var onlinepdfviewer2 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "onlinepdfviewer2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyslFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        onlinepdfviewer2.setDefaultUnit(kony.flex.DP);
        var nativePDF = new kony.ui.NativeContainer({
            "height": "100%",
            "id": "nativePDF",
            "isVisible": true,
            "left": "0%",
            "onCreated": controller.AS_NativeContainer_f1e1e267109e41d0b786df0519a4e84b,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        onlinepdfviewer2.add(nativePDF);
        return onlinepdfviewer2;
    }
})