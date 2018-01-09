define({
    //Type your controller code here 
    setData: function() {
        var data = [{
            "image": "intro_1.png",
            "desc": "Explore unstructured content using Kony Gallery App",
            "appTitle": "File Gallery"
        }, {
            "image": "intro_2.png",
            "desc": "Browse Knowledge Framework to learn and share Behind the Scene implementations",
            "appTitle": "File Gallery"
        }];
        this.view.SplashScreen.setSplashScreenData(data);
    }
});