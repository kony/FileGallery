//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "FileGallery",
    appName: "Gallery",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.1.66",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "FileGallery",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceResponse", "Error", "Crash"],
    url: "https://mobilefabric-demo.konycloud.com/FileGallery/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/FileGallery/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: applicationController.AS_AppEvents_b72cee78ea0842748f56e52da33b6e5c,
        appservice: applicationController.AS_AppEvents_de757c55a11441119168673966544f8d,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmAudioDetails");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;