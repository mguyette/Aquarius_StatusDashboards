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
    
    //function Getvalue(value) {
    //    if (value && value != null && value == "DOWN")
    //        return "<b style = 'color:red'>" + value + "</b>";
    //    if (value && value != null && value == "CHECK")
    //        return "<b style = 'color:orange'>" + value + "</b>";
    //    else
    //        return"";
    //}
    
    $("###WIDGETIDENTIFIER## .widget-box .grid").kendoGrid({
        columns: [ 
            
            { field: "PARAM",
              title: "Parameter",
              width: "40px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: left; font-size: 18px; height: 18px"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }
            },
            { field: "LAST_SAMPLED",
              title: "Last Sampled",
              width: "40px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: center; font-size: 18px; height: 18px"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: Blue; white-space: normal"
                }},
            
            { field: "HOURS_OVERDUE",
              title: "Hours Overdue",
              width: "20px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: center; font-size: 18px; height: 18px; font-weight: bold"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }},
            { field: "NANS",
              title: "NANs or Suppressed",
              width: "22px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: center; font-size: 18px; height: 18px; font-weight: bold"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }},
            { field: "REPEATING_VALUES",
              title: "Repeating Values",
              width: "20px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: center; font-size: 18px; height: 18px; font-weight: bold"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }},
            { field: "STATUS",
              title: "Status",
              width: "18px",
              //template: '#=Getvalue(STATUS)#',
                attributes: {
                    "class": "table-cell",
                    style:"text-align: center; font-size: 18px; height: 18px; font-weight: bold"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }},
            { field: "COMMENTS",
              title: "Comments",
              width: "100px",
                attributes: {
                    "class": "table-cell",
                    style:"text-align: left; font-size: 18px; height: 18px; font-weight: bold"
            },
                headerAttributes: {
                    style: "text-align: center; font-size: 20px; color: blue; white-space: normal"
                }}
                
         ],
        
        dataSource: {
            type: "jsonp",
            transport: {
                read: {url:aqPortal.BaseSiteURL() + "/Data/GetTable", data:data##WIDGETIDENTIFIER## }
            },
            pageSize: 100,
            page:1,
            error:error##WIDGETIDENTIFIER##,
            serverPaging:true,serverSorting:true,serverFiltering:true,serverGrouping:true,serverAggregates:true,
            filter:[],schema:{data:"Data",total:"Total",errors:"Errors",model:{}},
        },
        scrollable:{virtual:false},
        resizable: true,
        groupable: false,
        sortable: false,
        pageable: false,
        dataBinding: function(e) { bound##WIDGETIDENTIFIER##(e); }
    });
    grid.autoFitColumn(grid.columns[0].columns[1].columns[2]);
}
else
{
    $("###WIDGETIDENTIFIER## .widget-box .grid").hide();
    $("###WIDGETIDENTIFIER## .widget-box .errorJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .emptyJumbo").hide();
    $("###WIDGETIDENTIFIER## .widget-box .selectJumbo").show();
}

$("###WIDGETIDENTIFIER## .widget-box .grid .k-virtual-scrollable-wrap table[role='grid']").addClass("table table-hover table-condensed");
$("###WIDGETIDENTIFIER## .widget-box .grid .k-grid-header").show("font-size: 35px");