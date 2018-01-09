/*
	@Function basicConfig()
    @Description This function will return the basic configuration
    required for collection view 
*/
function basicConfig() {
    return {
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": null,
        "left": "5%",
        "top": "0dp",
        "width": "90%",
        "height": "100%",
        "id": "myCollectionView",  
        "isVisible": true,
        "minLineSpace": 0,
        "minItemSpace": 0,
        "retainSelection": true,
        "skin": "sknFullFlex",
        "itemTemplate": "flxCollection",
        "scrollingEvents": {},
        "sectionHeaderTemplate": "flxHeader",
        "sectionFooterTemplate": null,
        "selectionBehavior": kony.collectionview.SINGLE_SELECT,
        "showScrollbars": false,
        "layout": kony.collectionview.LAYOUT_HORIZONTAL,
        "contentSize": [1000, 1000],
        "widgetDataMap": {
            "lblHeader":"lblHeader",
            "lblAPIname": "lblAPIname",
            "imgArrow": "imgArrow",
            "imgMain" : "imgMain",
            "FileImage" : "FileImage",
            "thumbnail" : "thumbnail",
            "flxCollection" : "flxCollection"
            
        },
        "zIndex": 1,
      "onItemSelect" : function(){alert("dd");}
    };
}

/*
	@Function layoutConfig()
    @Description This function will return the layout configuration
    required for collection view 
*/
function layoutConfig() {
    return {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    };
}

/*
	@Function platformConfig()
    @Description This function will return the platform configuration
    required for collection view 
*/
function platformConfig() {
    return {
        "bounces": true,
        "enableDictionary": false,
    };
}

