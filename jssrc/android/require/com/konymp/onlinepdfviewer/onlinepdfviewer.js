define(function() {
    return function(controller) {
        var onlinepdfviewer = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "onlinepdfviewer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyCopyslFbox0e3db619549424b",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        onlinepdfviewer.setDefaultUnit(kony.flex.DP);
        var nativePDF = new kony.ui.NativeContainer({
            "height": "100%",
            "id": "nativePDF",
            "isVisible": true,
            "left": "0%",
            "onCreated": controller.AS_NativeContainer_g05d70ecdd1f4bfbb89c0271a6ef58b2,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        onlinepdfviewer.add(nativePDF);
        return onlinepdfviewer;
    }
})