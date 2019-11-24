var data##WIDGETIDENTIFIER## = {
    id: "##GridId##"
};

var bound##WIDGETIDENTIFIER## = function(e){
    $("###WIDGETIDENTIFIER## .widget-box .gridSpin").remove();
    if (e.items.length == 0)
    {
        $("###WIDGETIDENTIFIER## .widget-box .grid").hide();
        $("###WIDGETIDENTIFIER## .widget-box .errorJumbo").hide();
        $("###WIDGETIDENTIFIER## .widget-box .selectJumbo").hide();
        $("###WIDGETIDENTIFIER## .widget-box .emptyJumbo").show();
    }
};

var error##WIDGETIDENTIFIER## = function()
{
    $("###WIDGETIDENTIFIER## .widget-box .grid").hide();
    $("###WIDGETIDENTIFIER## .widget-box .selectJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .emptyJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .errorJumbo").show();
}

if ("##GridId##" != "" && "##GridId##" != "null")
{
    $("###WIDGETIDENTIFIER## .widget-box .grid").html('<div class="text-center gridSpin"><span class="fa fa-spin fa-spinner" style="font-size: 30px"></span></div>');
    
    $("###WIDGETIDENTIFIER## .widget-box .grid").kendoGrid({
        dataSource: {
            type: "jsonp",
            transport: {
                read: {url:aqPortal.BaseSiteURL() + "/Data/GetTable", data:data##WIDGETIDENTIFIER## }
            },
            pageSize: 100,
            page:1,
            error:error##WIDGETIDENTIFIER##,
            serverPaging:true,serverSorting:true,serverFiltering:true,serverGrouping:true,serverAggregates:true,
            filter:[],schema:{data:"Data",total:"Total",errors:"Errors",model:{}}
        },
        scrollable:{virtual:true},
        groupable: false,
        sortable: true,
        pageable: false,
        dataBinding: function(e) { bound##WIDGETIDENTIFIER##(e); }
    });
}
else
{
    $("###WIDGETIDENTIFIER## .widget-box .grid").hide();
    $("###WIDGETIDENTIFIER## .widget-box .errorJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .emptyJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .selectJumbo").show();
}

$("###WIDGETIDENTIFIER## .widget-box .grid .k-virtual-scrollable-wrap table[role='grid']").addClass("table table-hover table-condensed");
$("###WIDGETIDENTIFIER## .widget-box .grid .k-grid-header").hide();