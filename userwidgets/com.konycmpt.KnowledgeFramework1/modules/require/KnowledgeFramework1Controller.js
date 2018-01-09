define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._flag=0;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    screenHeight : kony.os.deviceInfo().screenHeight,
    halfScreen : (kony.os.deviceInfo().screenHeight)/2,
    onTouchStart : function(obj,x,y)
    {
      this.view.left = 0 +"dp";
      this.view.flxDeveloperCode.forceLayout(); 
    },
    onTouchMoves : function(eventobject,x,y)
    {
      var controllerScope = this;
      if(this._flag === 1)
      {

        if(y <= 0)
        {
          y = 0;
          if(this.view.sgmtAPI.isVisible === true)
          {
            this.view.AngleDoubleUp.setVisibility(false); 
            this.view.AngleDoubleDown.setVisibility(true);
          }
        }         

        if(y >= 20 && this.view.sgmtAPI.isVisible === true)
        {
          this.view.AngleDoubleUp.setVisibility(true);
          this.view.AngleDoubleDown.setVisibility(false);
        }
        this.view.top = ((y/parseFloat(this.screenHeight)) * 100) + "%";

        this.height = 100 - parseFloat(controllerScope.view.top) - parseFloat(controllerScope.view.flxHeadingBar.height);
        controllerScope.view.flxSegData.height = Math.abs(this.height) + "%";
        this.view.forceLayout();
      }

    },
    touchS : function(obj,x,y){
      this._flag = 1;
    },
    touchE : function(){
      var controllerScope = this;
      this._flag = 0;
      if(this.view.top >= "70%")
      {
        this.closeWhenDone();
      }
      if(this.view.top < "20%")
      {
       
        this.view.animate(
          kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
          {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.5},
          {animationEnd: function() {
            var top = 100 - parseFloat(controllerScope.view.top) - parseFloat(controllerScope.view.flxHeadingBar.height);
            controllerScope.view.flxSegData.height = top + "%";
            if(controllerScope.view.LongArrowLeft.isVisible === false)
              {
                controllerScope.view.AngleDoubleDown.setVisibility(true);
          	    controllerScope.view.AngleDoubleUp.setVisibility(false);
              }            
          } });
      }
      controllerScope.view.flxSegData.forceLayout();


    },
    onClickKnowledgeFramework : function()
    {   
      //this.openUptoHalf();
      this.openKnowledgeFramework();
    },
    openKnowledgeFramework : function(){
       var controllerScope = this;
       controllerScope.view.animate(
        kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.5},
        {animationEnd: function() {         
        } 
        });
    },
    openUptoHalf : function()
    {
      var controllerScope = this;
      controllerScope.view.animate(
        kony.ui.createAnimation({100:{top:"50%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.5},
        {animationEnd: function() {

          var top = 100 - parseFloat(controllerScope.view.top) - parseFloat(controllerScope.view.flxHeadingBar.height);
          controllerScope.view.flxSegData.height = top + "%";
          controllerScope.view.RoundFloatingButtonWithShadow.setVisibility(false);
        } 
        });
      if(this.view.sgmtAPI.isVisible === true)
      {
        this.view.AngleDoubleUp.setVisibility(true);
        this.view.AngleDoubleDown.setVisibility(false);
        this.view.LongArrowLeft.setVisibility(false);
      }
    },

    onClickDrag : function()
    {
      var controllerScope = this;
      if(this.view.top <= "50%" && this.view.top > "0%")
      {
        controllerScope.view.animate(
          kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
          {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.5},
          {animationEnd: function() {

          } 
          });
        this.view.AngleDoubleUp.setVisibility(false);
        this.view.AngleDoubleDown.setVisibility(true);

        var top = 100 - parseFloat(controllerScope.view.flxHeadingBar.height);
        controllerScope.view.flxSegData.height = Math.abs(top) + "%";
      }
      else 
      {
        controllerScope.openUptoHalf();
      }
    },
    closeWhenDone : function()
    {

      var controllerScope = this;
      controllerScope.view.animate(
        kony.ui.createAnimation({100:{left:"100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.4},
        {animationEnd: function() {
          
          controllerScope.view.sgmtAPI.setVisibility(true);
          controllerScope.view.flxFullScreen.setVisibility(false);
          controllerScope.view.lblHeading.text = "Behind The Scene";
          controllerScope.detailsInitConf();
        } 
        });

    },
    setData : function(data)
    {
      this.view.sgmtAPI.widgetDataMap = {
        lblAPIName : "APIName"

      };
      this.view.sgmtAPI.setData(data);
    },
    onRowClick : function()
    {
      var data = this.view.sgmtAPI.selectedRowItems[0];
      this.populateData(data);
      this.view.sgmtAPI.setVisibility(false);
      this.view.flxFullScreen.setVisibility(true);
      this.view.rchTextDesc.setVisibility(true);
      this.view.AngleDoubleUp.setVisibility(false);
      this.view.AngleDoubleDown.setVisibility(false);
      this.view.LongArrowLeft.setVisibility(true);      
    },
    populateData : function(data)
    {
      if(data.APIName)
      {
        this.view.lblHeading.text = data.APIName;
      }
      if(data.Description)
      {
        this.view.rchTextDesc.text = data.Description;
        this.view.rchTextDesc.setVisibility(true);
      }
      else
      {
        this.view.rchTextDesc.text = "No Description Available.";
      }

      if(data.CodeSnippet)
      {
        this.view.lblCodeSnippet.text = data.CodeSnippet;
      }
      else
      {
        this.view.lblCodeSnippet.text = "No Code Snippet Available.";
      }

      if(data.DocLink)
      {
        this.view.rchtextDoc.text = data.DocLink;
      }
      else
      {
        this.view.rchtextDoc.text = "No Doc Link Available.";
      }

    },
    onClickDisplay:function(eventobject)
    {
      var currentWidget = eventobject["id"];
      var requiredWidget = currentWidget.substring(3);
      var arrowId = "arrow" + requiredWidget;
      var animConfig = {"duration":0.5,"iterationCount":1,"delay":0,"fillMode":kony.anim.FILL_MODE_FORWARDS };
      //scale
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(1.0,0.0); 
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(1,1);
      var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0},"transform":transformProp1},
                               100 : {"anchorPoint":{"x":0.5,"y":0},"transform":transformProp2}
                              } ;
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      //  var finalAnimation = {definition: animDefinition, config: animConfig};
      this.view[requiredWidget].setVisibility(true);
      this.view[requiredWidget].animate(animDefinition,animConfig,{});
      this.view[arrowId].text = "\uf107";

    },
    onClickDisappear:function(eventobject)
    {
      var currentWidget = eventobject["id"];
      var requiredWidget = currentWidget.substring(3);
      var arrowId = "arrow" + requiredWidget;
      var animConfig = {"duration":0.5,"iterationCount":1,"delay":0,"fillMode":kony.anim.FILL_MODE_FORWARDS };
      //scale
      var transformProp1 = kony.ui.makeAffineTransform();
      transformProp1.scale(1,1); 
      var transformProp2 = kony.ui.makeAffineTransform();
      transformProp2.scale(1,0);
      var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0},"transform":transformProp1},
                               100 : {"anchorPoint":{"x":0.5,"y":0},"transform":transformProp2}
                              } ;
      var animDefinition = kony.ui.createAnimation(animDefinitionOne);
      //  var finalAnimation = {definition: animDefinition, config: animConfig};
      this.view[requiredWidget].animate(animDefinition,animConfig,{});
      this.view[requiredWidget].setVisibility(false);
      this.view[arrowId].text = "\uf105";

    },
    onClickBack : function()
    {

      this.detailsInitConf();

//       if(this.view.top === 0)
//         this.view.AngleDoubleDown.setVisibility(true);
//       else
//         this.view.AngleDoubleUp.setVisibility(true);
//       this.view.forceLayout();
//       this.view.sgmtAPI.setVisibility(true);
//       this.view.lblHeading.text = "Behind The Scene";
      if(this.view.sgmtAPI.isVisible === true)
		{
          this.closeWhenDone();
        }
      else
        {
          this.view.sgmtAPI.setVisibility(true);
	      this.view.lblHeading.text = "Behind The Scene";
        }
    },
    openEmail : function()
    {
      try
      {
        var to=[""];
        var sub = "Code Snippet - " + this.view.lblHeading.text;
        var msgbody = this.view.lblCodeSnippet.text;
        kony.phone.openEmail(to,[""],[""],sub,msgbody,true,[]);		
      }
      catch(err)
      {
        alert("error in opening Email:: "+err);
      }
    },
    detailsInitConf : function()
    {
      this.view.LongArrowLeft.setVisibility(true);
      this.view.rchTextDesc.setVisibility(false);
      this.view.lblCodeSnippet.setVisibility(false);
      this.view.rchtextDoc.setVisibility(false);
      this.view.flxFullScreen.setVisibility(false);

      //Arrow Positions
      this.view.arrowrchTextDesc.text = "\uf107";
      this.view.arrowlblCodeSnippet.text = "\uf105";
      this.view.arrowrchtextDoc.text = "\uf105";
    }


  };
});