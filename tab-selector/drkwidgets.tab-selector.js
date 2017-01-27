$.fn.extend({
    tabbedpanel: function(){ return this.each(function(){
        var $panel  = $(this);
        var $tabs   = $("ul.tab-index li", $panel);
        var selectTab = function(ev){
            //set active
            var selectedIndex = $(this).index();
            $("ul.tab-index li:eq(" + selectedIndex + "), .tab-panels>div:eq(" + selectedIndex + ")", $panel).addClass("active");
            $("ul.tab-index li:not(:eq(" + selectedIndex + ")), .tab-panels>div:not(:eq(" + selectedIndex + "))", $panel).removeClass("active");

            //TODO: trigger callback fn
            
        };
        $tabs.click(selectTab);
        //select first item
        $tabs[0].click();
    })}

});