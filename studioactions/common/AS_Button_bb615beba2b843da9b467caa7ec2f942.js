function AS_Button_bb615beba2b843da9b467caa7ec2f942(eventobject) {
    var self = this;
    if (this.index < this.screenData.length) {
        if (this.index == 1) this.view.flxInterstitial.setVisibility(false);
        alert(this.screenData.length);
        this.index++;
        this.setPointer(this.screenData[this.index]);
    }
}