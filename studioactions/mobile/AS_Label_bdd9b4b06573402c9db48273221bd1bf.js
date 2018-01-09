function AS_Label_bdd9b4b06573402c9db48273221bd1bf(eventobject, x, y) {
    if (this.view.lblCodeSnippet.isVisible == false) {
        this.view.lblCodeSnippet.setVisibility(true);
        this.onClickDisplay(eventobject);
    } else {
        this.onClickDisappear(eventobject);
        this.view.lblCodeSnippet.setVisibility(false);
    }
}