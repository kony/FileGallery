define(function() {
    var konyLoggerModule = require('com/konymp/onlinepdfviewer/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("PDF Viewer Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._url = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "url", function(val) {
                this._url = val;
            });
            defineGetter(this, "url", function() {
                return this._url;
            });
        },
        /**
         * @function fetchAndDisplayPDFAndroid
         * @description This function is used to render pdf in android
         * @private
         * @param eventObj
         */
        fetchAndDisplayPDFAndroid: function(eventObj) {
            try {
                //#ifdef android
                var KonyMain = java.import('com.konylabs.android.KonyMain');
                var Webview = java.import("android.webkit.WebView");
                var ViewGroup = java.import("android.view.ViewGroup");
                var wvClient = java.import("android.webkit.WebViewClient");
                var context = KonyMain.getActivityContext();
                var webViewObject = new Webview(context);
                var LayoutParams = ViewGroup.LayoutParams;
                webViewObject.getSettings().setAllowFileAccessFromFileURLs(true);
                webViewObject.getSettings().setJavaScriptEnabled(true);
                var konyDeviceInfoObject = kony.os.deviceInfo();
                var layoutParamsObject = new LayoutParams(konyDeviceInfoObject.deviceWidth, konyDeviceInfoObject.deviceHeight);
                webViewObject.setLayoutParams(layoutParamsObject);
                webViewObject.setWebViewClient(new wvClient());
                var url = "https://docs.google.com/gview?embedded=true&url=" + this.url;
                webViewObject.loadUrl(url);
                eventObj.addView(webViewObject);
                this.view.forceLayout();
                //#endif
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function fetchAndDisplayPDFiOS
         * @description This function is used to render pdf in iOS
         * @private
         * @param uiviewObj
         */
        fetchAndDisplayPDFiOS: function(uiviewObj) {
            try {
                var UIWebView = objc.import("UIWebView");
                var NSURLObj = objc.import("NSURL");
                var NSURLRequestObj = objc.import("NSURLRequest");
                var urlRequestObj = NSURLRequestObj.alloc().jsinit();
                var urlObj = NSURLObj.alloc().jsinit();
                var webViewObject = UIWebView.alloc().jsinit();
                var width = uiviewObj.bounds.width;
                var height = uiviewObj.bounds.height;
                var frameVal = {
                    "x": 0,
                    "y": 0,
                    "width": width,
                    "height": height
                };
                webViewObject.frame = frameVal;
                var url = this.url;
                urlObj = NSURLObj.URLWithString(url);
                urlRequestObj = NSURLRequestObj.requestWithURL(urlObj);
                webViewObject.loadRequest(urlRequestObj);
                uiviewObj.addSubview(webViewObject);
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function setURL
         * @description Function used to change URL of the pdf dynamically
         * @public
         * @param url
         */
        setURL: function(url) {
            if (this.view.nativePDF) {
                this.view.remove(this.view.nativePDF);
            }
            this.url = url;
            var nativePDF = new kony.ui.NativeContainer({
                "height": "100%",
                "id": "nativePDF",
                "isVisible": true,
                "left": "0%",
                "onCreated": this.fetchAndDisplayPDFAndroid.bind(this),
                "onLayoutSubviews": this.fetchAndDisplayPDFiOS.bind(this),
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            this.view.add(nativePDF);
        }
    };
});