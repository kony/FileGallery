define(function() {
    var controller = require("com/konymp/onlinepdfviewer2/useronlinepdfviewer2Controller");
    var actions = require("com/konymp/onlinepdfviewer2/onlinepdfviewer2ControllerActions");
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