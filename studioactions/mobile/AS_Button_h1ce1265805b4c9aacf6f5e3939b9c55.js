function AS_Button_h1ce1265805b4c9aacf6f5e3939b9c55(eventobject) {
    if (this.index < this.screenData.length) {
        if (this.index == 1) this.view.flxInterstitial.setVisibility(false);
        alert(this.screenData.length);
        this.index++;
        this.setPointer(this.screenData[this.index]);
    }
}