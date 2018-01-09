define(function() {
    var controller = require("com/konycmpt/KnowledgeFramework1/userKnowledgeFramework1Controller");
    var actions = require("com/konycmpt/KnowledgeFramework1/KnowledgeFramework1ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "left1", function(val) {
            this.view.RoundFloatingButtonWithShadow.left = val;
        });
        defineGetter(this, "left1", function() {
            return this.view.RoundFloatingButtonWithShadow.left;
        });
        defineSetter(this, "top1", function(val) {
            this.view.RoundFloatingButtonWithShadow.top = val;
        });
        defineGetter(this, "top1", function() {
            return this.view.RoundFloatingButtonWithShadow.top;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});