define({
    AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c: function AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c(eventobject) {
        var self = this;
        kony.application.setApplicationProperties({ 
            statusBarColor: "000000" 
        }); 
    },
    AS_AppEvents_de757c55a11441119168673966544f8d: function AS_AppEvents_de757c55a11441119168673966544f8d(eventobject) {
        var self = this;
        if (kony.store.getItem("oneTimeInitFlag") === undefined || kony.store.getItem("oneTimeInitFlag") === null || kony.store.getItem("oneTimeInitFlag") === "false") {
            return "frmSplash";
        } else {
            return "frmLandingPage";
        }
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework", "KnowledgeFramework", "KnowledgeFrameworkController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework",
            "name": "com.konycmpt.KnowledgeFramework"
        });
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework1", "KnowledgeFramework1", "KnowledgeFramework1Controller");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework1",
            "name": "com.konycmpt.KnowledgeFramework1"
        });
        kony.mvc.registry.add("com.konycmpt.SplashScreen", "SplashScreen", "SplashScreenController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "SplashScreen",
            "name": "com.konycmpt.SplashScreen"
        });
        kony.mvc.registry.add("com.konymp.onlinepdfviewer", "onlinepdfviewer", "onlinepdfviewerController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "onlinepdfviewer",
            "name": "com.konymp.onlinepdfviewer"
        });
        kony.mvc.registry.add("com.konymp.onlinepdfviewer2", "onlinepdfviewer2", "onlinepdfviewer2Controller");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "onlinepdfviewer2",
            "name": "com.konymp.onlinepdfviewer2"
        });
        kony.mvc.registry.add("com.konymp.slidingmenu", "slidingmenu", "slidingmenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "slidingmenu",
            "name": "com.konymp.slidingmenu"
        });
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("flxFullSplashScreen11", "flxFullSplashScreen11", "flxFullSplashScreen11Controller");
        kony.mvc.registry.add("flxRow", "flxRow", "flxRowController");
        kony.mvc.registry.add("flxCollection", "flxCollection", "flxCollectionController");
        kony.mvc.registry.add("flxHeader", "flxHeader", "flxHeaderController");
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("flxSegmentRow", "flxSegmentRow", "flxSegmentRowController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("frm2", "frm2", "frm2Controller");
        kony.mvc.registry.add("frmAPIIndexed", "frmAPIIndexed", "frmAPIIndexedController");
        kony.mvc.registry.add("frmAudioDetails", "frmAudioDetails", "frmAudioDetailsController");
        kony.mvc.registry.add("frmImageDetails", "frmImageDetails", "frmImageDetailsController");
        kony.mvc.registry.add("frmKnowledgeFramework", "frmKnowledgeFramework", "frmKnowledgeFrameworkController");
        kony.mvc.registry.add("frmLandingPage", "frmLandingPage", "frmLandingPageController");
        kony.mvc.registry.add("frmPDFDetails", "frmPDFDetails", "frmPDFDetailsController");
        kony.mvc.registry.add("frmSplash", "frmSplash", "frmSplashController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {
        return applicationController.AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c();
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("frmAudioDetails").navigate();
    }
});