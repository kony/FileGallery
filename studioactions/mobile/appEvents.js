define({
    AS_AppEvents_de757c55a11441119168673966544f8d: function AS_AppEvents_de757c55a11441119168673966544f8d(eventobject) {
        var self = this;
        if (kony.store.getItem("oneTimeInitFlag") === undefined || kony.store.getItem("oneTimeInitFlag") === null || kony.store.getItem("oneTimeInitFlag") === "false") {
            return "frmSplash";
        } else {
            return "frmLandingPage";
        }
    },
    AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c: function AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c(eventobject) {
        var self = this;
        kony.application.setApplicationProperties({ statusBarColor: "000000" 
        }); 
    }
});