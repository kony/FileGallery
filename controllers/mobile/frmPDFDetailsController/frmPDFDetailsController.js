define({

    onNavigate: function(filename) {
     //   kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true,true,null);
        this.view.headerTitleLabel.text = filename;
        var url;
        if (filename === "Kony Fabric Installer Mac") {
            url = "http://docs.kony.com/8_x_PDFs/konyfabric/Kony_Fabric_Console_Installer_Mac.pdf";
        }
        if (filename === "Viz Enterprise Mac") {
            url = "http://docs.kony.com/8_x_PDFs/visualizer/viz_enterprise_install_mac.pdf";
        }
        if (filename === "Viz Starter Mac") {
            url = "http://docs.kony.com/8_x_PDFs/visualizer/viz_starter_install_mac.pdf";
        }
        this.view.onlinepdfviewer.url = url;
        this.view.forceLayout();
        //kony.application.dismissLoadingScreen();
    },
    onClickBack: function() {
        this.view.onlinepdfviewer.url = null;
        var navigat = new kony.mvc.Navigation("frmLandingPage");
        navigat.navigate();
    },
    onClickFloatingButton: function() {
        var nav = new kony.mvc.Navigation("frmKnowledgeFramework");
        nav.navigate();
    }

});