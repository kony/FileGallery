define(function() {
    var controller = require("com/konycmpt/KnowledgeFramework/userKnowledgeFrameworkController");
    var actions = require("com/konycmpt/KnowledgeFramework/KnowledgeFrameworkControllerActions");
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