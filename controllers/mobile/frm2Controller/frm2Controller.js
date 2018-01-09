define({ 

 
 setImage : function()
  {
    if(flag===true)
      setAudio();
    else
      startAudio();
  },
   index:0,
    data:[{"video":"three.mp4","Description":"This video is used for splash screen."},{"video":"two.mp4","Description":"null"},{"video":"one.mp4","Description":null}],
   setDataToSplash : function()
  	{
     // showBattery();
  	  this.view.SplashScreen.setSplashScreenData(this.data,0);
  	}
    
  
 });