/***
 * Creator: WolFi
 */

//var last_clicked = "";
var TabbedContent = {
    whole_container : '.tab_wrap',
    tab_content_wrap : '.tabs_content',
    tab_content : '.tab_content',
    tab_content_format : '<div class="{0}">{1}</div>',
    tabs_wrap : '.tabs',
    tab_id : '.tab',
    tab_format : '<div class="{0}">{1}</div>',
    active_tab : '.active_tab',
    //startup_tab : '.world',

    /**
     * Initializes the tabs.
     * This function is an alias to setUpTabs()
     */
    init : function() {  
            TabbedContent.setUpTabs();
            //$(TabbedContent.startup_tab).click();
    },
    
    /**
     * Sets up all the tabs
     */
    setUpTabs : function(){
        $(TabbedContent.tab_id).click(function(){
            var background = $(this).parent().find(TabbedContent.active_tab);

            $(background).stop().animate({
                    left: $(this).position()['left']
            }, {
                    duration: 300
            });
            var myClass = $(this).attr("class");
            var tmp = myClass.split(" ");
            for (item  in tmp){
                if (tmp[item] == TabbedContent.tab_id.substr(1)) tmp.splice(item, 1);
            }
            //alert(tmp[0]);
            TabbedContent.changeTo(tmp.toString());
            //window.last_clicked = tmp.toString();
            //alert(tmp.toString());
            //TabbedContent.slideContent($(this), tmp);
            //last_clicked = tmp.toString();
        });
    },
    
    /**
     * Shows the specified tab
     * 
     * @param {type} label
     */
    show : function(label){
        //var element=label;
        //if (label == "") element = window.last_clicked;
        $(TabbedContent.whole_container).children(TabbedContent.tab_content_wrap).children('.' + label).show(1000);
        //sleep(1000);
    },
    
    /**
     * Hides all the tabs
     */
    hideAll : function(){
        $(TabbedContent.whole_container).children(TabbedContent.tab_content_wrap).children().hide(1000);
    },
    
    /**
     * Set focus on the given tab
     * 
     * @param {type} label
     */
    changeTo : function(label){
        //window.last_clicked  = label;
        
        $(TabbedContent.whole_container).children(TabbedContent.tab_content_wrap).children().hide(1000, function(){TabbedContent.show(label);});
        //setTimeout(function(){TabbedContent.show(label);}, 1005);
        //window.last_clicked = label;
    },
    
    /**
     * Creates a new tab with the given identifier and data
     * 
     * @param {type} tab_identifier     The unique identifier for the tab
     * @param {type} tab_title          The title shown in the tab
     * @param {type} tab_content        The content that will shown when the tab is active
     * @param {type} changeToNewTab     (optional) A boolean, telling if this tab has to get the focus right after being created
     * @param {type} callback           (optional) Function to execute after setting up the tab
     */
    addTab : function(tab_identifier, tab_title, tab_content, changeToNewTab, callback){
        var tabs = $(TabbedContent.whole_container).children(TabbedContent.tabs_wrap);
        var content = $(TabbedContent.whole_container).children(TabbedContent.tab_content_wrap);
        
        var newTab = TabbedContent.tab_format.format(TabbedContent.tab_id.substr(1) + ' ' + tab_identifier, tab_title);
        var tabData = TabbedContent.tab_content_format.format(TabbedContent.tab_content.substr(1) + ' ' + tab_identifier, tab_content);
        
        tabs.html(tabs.html() + "\n" + newTab);
        content.html(content.html() + "\n" + tabData);
        
        TabbedContent.setUpTabs();
        TabbedContent.changeTo(window.last_clicked);
        
        if(changeToNewTab != undefined && changeToNewTab) $(TabbedContent.whole_container).children(TabbedContent.tabs_wrap).children('.' + tab_identifier).click();
        if(callback != undefined) callback();
    },
            
    /**
     * Delete a given tab from the page
     * 
     * @param {type} tab_identifier
     */
    deleteTab : function(tab_identifier){
        var tabs = $(TabbedContent.whole_container).children(TabbedContent.tabs_wrap);
        var content = $(TabbedContent.whole_container).children(TabbedContent.tab_content_wrap);
        
        tabs.children(tab_identifier).remove();
        content.children(tab_identifier).remove();
    }
}

$(document).ready(function() {
	TabbedContent.init();
});
