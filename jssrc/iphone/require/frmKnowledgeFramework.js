define("frmKnowledgeFramework", function() {
    return function(controller) {
        function addWidgetsfrmKnowledgeFramework() {
            this.setDefaultUnit(kony.flex.DP);
            var KnowledgeFramework = new com.konycmpt.KnowledgeFramework({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFramework",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox3",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            this.add(KnowledgeFramework);
        };
        return [{
            "addWidgets": addWidgetsfrmKnowledgeFramework,
            "enabledForIdleTimeout": false,
            "id": "frmKnowledgeFramework",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0f55439e69de643"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "inTransitionConfig": {
                "transitionDirection": "fromRight",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionPush"
            },
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "transitionPush"
            },
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});