define(function() {
    var controller = require("com/konymp/onlinepdfviewer/useronlinepdfviewerController");
    var actions = require("com/konymp/onlinepdfviewer/onlinepdfviewerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});