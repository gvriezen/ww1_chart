google.charts.load('current', {packages: ['corechart', 'line', 'timeline']});
google.charts.setOnLoadCallback(drawBasic);
// google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTimeline);

function drawBasic() {
  var options = {
    animation: {
          "startup": true,
          duration: 1000,
          easing: 'in',
        },

            title: 'World War One Immigration',
            titleTextStyle: {
              color: '#01579b',
              fontSize: '45',
              fontName: 'Garamond',
            },
            titlePosition: 'out',

        hAxis: {
          title: 'Time',
          format: 'yyyy',
          textStyle: {
            color: '#01579b',
            fontSize: 25,
            fontName: 'Garamond',
          },
        titleTextStyle: {
          color: '#990000',
            fontSize: 25,
            fontName: 'Garamond',
          
         },  
        },

        vAxis: {
          // minValue: 0,
          // maxValue: 100,
          title: 'Number of Immigrants',
          textStyle: {
            color: '#01579b',
            fontSize: 25,
            fontName: 'Garamond',
          },
         titleTextStyle: {
          color: '#990000',
            fontSize: 25,
            fontName: 'Garamond',
         },
       },

      legend: {
        textStyle: {
          color: '#990000',
            fontSize: 16,
            fontName: 'Garamond',
          },
      },

       chartArea:{left:250,top:200,width:'70%',height:'70%'},

        explorer: {
          axis: 'horizontal',
          actions: ['dragToZoom','rightClickToReset'],
          keepInBounds: true,
          maxZoomIn: 0.25,
        },
           backgroundColor: 'white'

  }; // end of options

  var data = new google.visualization.DataTable();
   data.addColumn('date', 'Year');
   data.addColumn('number', 'Total Immigration')
   data.addRows(
    [
          [new Date ('1880'), 348691 ], //

          [new Date ('1881'), 528545],  //

          [new Date ('1882'), 648186],  //

          [new Date ('1883'), 522587],  //

          [new Date ('1884'), 453686], //

          [new Date ('1885'), 353083], //

          [new Date ('1886'), 329529], //

          [new Date ('1887'), 482829],  //

          [new Date ('1888'), 538131],  //

          [new Date ('1889'), 434790],  //

          [new Date ('1890'), 445680], //

          [new Date ('1891'), 546085], //

          [new Date ('1892'), 570876], //fixed

          [new Date ('1893'), 429324], 

          [new Date ('1894'), 277052], 

          [new Date ('1895'), 250342], 

          [new Date ('1896'), 329067], 

          [new Date ('1897'), 216397],

          [new Date ('1898'), 217786],

          [new Date ('1899'), 297349], 

          [new Date ('1900'), 424700], 

          [new Date ('1901'), 469237],

          [new Date ('1902'),619068],

          [new Date ('1903'),814507],

          [new Date ('1904'),767933],

          [new Date ('1905'),974273],

          [new Date ('1906'),1018365],

          [new Date ('1907'),1199566],

          [new Date ('1908'),691901],

          [new Date ('1909'),654875],

          [new Date ('1910'),926291],

          [new Date ('1911'),764757],

          [new Date ('1912'),718875],

          [new Date ('1913'),1055855],

          [new Date ('1914'),1058391],

          [new Date ('1915'),197919],

          [new Date ('1916'),145699],

          [new Date ('1917'),133083],

          [new Date ('1918'),31063],

          [new Date ('1919'),24627],

          [new Date ('1920'),246295], //
        ]

    );

        var formatter = new google.visualization.DateFormat({pattern: 'yyyy'});
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);




}; // end of draw basic

function drawChart() {

    var options = {
        animation: {
          "startup": true,
          duration: 1000,
          easing: 'in',
        },

            title: 'World War One Immigration',
            titleTextStyle: {
              color: '#01579b',
              fontSize: '45',
              fontName: 'Garamond',
            },
            titlePosition: 'out',

        hAxis: {
          title: 'Time',
          format: 'yyyy',
          textStyle: {
            color: '#01579b',
            fontSize: 25,
            fontName: 'Garamond',
          },
        titleTextStyle: {
          color: '#990000',
            fontSize: 25,
            fontName: 'Garamond',
          
         },  
        },

        vAxis: {
          // minValue: 0,
          // maxValue: 100,
          title: 'Number of Immigrants',
          textStyle: {
            color: '#01579b',
            fontSize: 25,
            fontName: 'Garamond',
          },
         titleTextStyle: {
          color: '#990000',
            fontSize: 25,
            fontName: 'Garamond',
         },
       },

       chartArea:{left:250,top:200,width:'70%',height:'70%'},

        explorer: {
          axis: 'horizontal',
          actions: ['dragToZoom','rightClickToReset'],
          keepInBounds: true,
          maxZoomIn: 0.25,
        },
           backgroundColor: 'white'
        }; // end of options

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Year');
      data.addColumn('number', 'Great Britain')
      data.addColumn('number', 'Ireland')
      data.addColumn('number', 'Germany')
      data.addColumn('number', 'Poland')
      data.addColumn('number', 'Greece')
      data.addColumn('number', 'Italy')
      data.addColumn('number', 'Portugual')
      data.addColumn('number', 'Spain')
      data.addColumn('number', 'China')
      data.addColumn('number', 'India')
      data.addColumn('number', 'Japan')
      data.addColumn('number', 'Turkey')
      data.addColumn('number', 'Canada')
      data.addColumn('number', 'Mexico')
      data.addColumn('number', 'Scandinavia')
      data.addColumn('number', 'Africa')
      data.addColumn('number', 'Australia')
      data.addColumn('number', 'Former Soviet Union')
      data.addColumn('number', 'Carribean (Other)')
      data.addColumn('number', 'Central America Other')
      data.addColumn('number', 'Africa (Other)')
      data.addColumn('number', 'Oceania (Other)')

      data.addRows(
        [
          [new Date ('1880'), 73273, 71603, 84638, 2177, 23, 12354, 808, 389, 5802, 21, 4, 4, 99774, 492, 65657, 1351, 953, 5014, 1351, 17, 18, 1], //

          [new Date ('1881'), 81376, 72342, 210485, 5614, 19, 15401, 1215, 484, 11890, 33, 11, 5, 125450, 325, 81582, 1680, 1188, 5041, 1680, 12, 33, 3],  //

          [new Date ('1882'), 102991,76432, 250630, 4672, 126, 32159, 1436, 378, 39579, 10, 5, null, 98366, 366, 105326, 1291, 878, 16918, 1291, 15, 60, 11],  //

          [new Date ('1883'), 76606, 81486, 194786, 2011, 73, 31792, 1573, 262, 8031, 9, 27, null, 70274, 469, 71994, 903, 554, 9909, 903, 6, 67, 193],  //

          [new Date ('1884'), 65950, 63344, 179676, 4536, 37, 16510, 1927, 300, 279, 12, 20, null, 60626, 430, 52728, 2208, 502, 12689, 2208, 10, 59, 398], //

          [new Date ('1885'), 57713, 51795, 124443,3085,172,13642,2024,350,22,34,49,null,38336,323,40704,2477,449,17158,2477,23,112,230], //

          [new Date ('1886'), 62929, 49619,84403,3939,104,21315,1194,344,40,17,194,15,null,null,46735,2734,522,17800,2734,29,122,614], //

          [new Date ('1887'), 93378, 68370,106865,6128,313,47622,1360,436,10,32,229,208,null,null,67629,4876,528,30766,4876,19,40,754],  //

          [new Date ('1888'), 108692, 73513,109717,5826,782,51558,1625,526,26,20,404,273,null,null,81924,4880,697,33487,4880,67,65,1690],  //

          [new Date ('1889'), 87992, 65557,99538,4922,158,25307,2024,526,118,59,640,593,28,null,57504,4923,1000,33916,4923,81,187,1196],  //

          [new Date ('1890'), 69730, 53024,92427,11073,524,52003,2600,813,1716,43,691,1126,183,null,50368,3070,699,35598,3070,142,112,468], //

          [new Date ('1891'), 66605, 55706,113554,27497,1105,76055,2999,905,2836,42,1136,2488,234,null,60107,3906,777,47426,3906,278,103,524], //

          [new Date ('1892'), 42215, 51383,119168,40536,660,61631,3400,4078,null,null,null,null,null,null,66295,null,267,81511,null,null,null,null], //fixed

          [new Date ('1893'), 35189, 43578,78756,16374,1072,72145,4816,206,472,,1380,null,null,null,58945,2593,248,42310,2593,null,null,null], 

          [new Date ('1894'), 22520, 30231,53989,1941,1356,42977,2190,920,1170,null,1931,,194,109,32400,3177,244,39278,3177,null,24,null], 

          [new Date ('1895'), 28833, 46304,32173,790,597,35427,1452,501,539,,1150,2767,244,116,26852,3096,155,35907,3096,16,36,null], 

          [new Date ('1896'), 24565, 40262,31885,691,2175,68060,2766,351,1441,,1110,4139,278,150,33199,6828,87,51445,6828,12,21,25], 

          [new Date ('1897'), 12752, 28421,22533,4165,571,59431,1874,448,3363,,1526,4732,291,91,21089,4101,139,25816,4101,5,37,60],

          [new Date ('1898'), 12894, 25128,17111,4726,2339,58613,1717,577,2071,,2230,4275,352,107,19282,2124,153,29828,2124,5,48,48],

          [new Date ('1899'), 13456, 31673,17476,null,2333,77419,2054,385,1660,17,2844,4436,1322,161,22192,2585,456,60982,2585,159,51,354], 

          [new Date ('1900'), 12509, 35730,18507,null,3771,100135,4234,355,1247,9,12635,3962,396,237,31151,4656,214,90787,4656,42,30,214], 

          [new Date ('1901'), 14985, 30561,21651,null,5910,135996,4165,592,2459,22,5269,5782,540,347,39234,3176,325,85257,3176,130,173,173],

          [new Date ('1902'),16898,29138,28304,null,8104,178375,5307,975,1649,93,14270,6223,636,709,54038,4711,384,107347,4711,254,37,182],

          [new Date ('1903'),33637,35310,40086,null,14090,230622,9317,2080,2209,94,19968,7118,1058,528,77647,8170,1150,136093,8170,597,176,199],

          [new Date ('1904'),51448,36142,46380,null,11343,193296,6715,3996,4309,261,14264,5235,2837,1009,60096,10193,1461,145141,10193,605,686,94],

          [new Date ('1905'),84189,52945,40574,null,10515,221479,5028,2600,2166,190,10331,6157,2168,2637,60625,16641,2091,184897,16641,1072,757,75],

          [new Date ('1906'),67198,34995,37564,null,19489,273120,8517,1921,1544,216,13835,6354,5063,1997,52781,13656,1682,215665,13656,1140,712,51],

          [new Date ('1907'),79037,34530,37807,null,36580,285731,9608,5784,961,898,30226,8053,19918,1406,49965,16689,1947,258943,16689,970,1486,42],

          [new Date ('1908'),62824,30556,32309,null,21489,128503,7307,3899,1397,1040,15803,9753,38510,6067,30175,11888,1098,156711,11888,1217,1411,81],

          [new Date ('1909'),46793,25033,25540,null,14111,183218,4956,2616,1943,203,3111,7506,51941,16251,32496,11180,839,120460,11180,930,858,53],

          [new Date ('1910'),68941,29855,31283,null,25888,215537,8229,3472,1968,1696,2720,15212,56555,18691,48267,11244,998,186792,11244,893,1072,99],

          [new Date ('1911'),73384,29112,32061,null,26226,182882,8374,5074,1460,524,4520,10229,56830,19889,42285,13403,984,158721,13403,1193,956,59],

          [new Date ('1912'),57148,25879,27788,null,21449,157134,10230,6327,1765,175,6114,12788,55990,23238,27554,12467,794,162395,12467,1242,1009,104],

          [new Date ('1913'),60328,27876,34329,null,22817,265542,14171,6167,2105,179,8281,23955,73802,11926,32267,12458,1229,291040,12458,1473,1409,111],

          [new Date ('1914'),48729,24688,35734,null,35832,283738,10898,7591,2502,221,8929,21716,86139,14614,29391,14451,1336,255660,14451,1622,1539,110],

          [new Date ('1915'),27237,14185,7799,null,12592,49688,4907,2762,2660,161,8613,3543,82215,12340,17883,11598,1282,26187,11598,1252,934,117],

          [new Date ('1916'),16063,8639,2877,null,27034,33665,12259,5769,2460,112,8680,1670,101551,18425,14761,12027,1484,7842,12027,1135,894,90],

          [new Date ('1917'),10735,5406,1857,null,23974,34596,9975,10232,2237,109,8991,393,105399,17869,13771,15507,1014,12716,15507,2073,566,128],

          [new Date ('1918'),2516,331,447,null,1910,5250,2224,4295,1795,130,10213,43,32452,18524,6506,8879,925,4242,8879,2220,299,165],

          [new Date ('1919'),6797,474,52,null,386,1884,1222,1573,1964,171,10064,19,57782,29818,5590,8826,1234,1403,8826,2589,189,76],

          [new Date ('1920'),38471,9591,1001,4813,11981,95145,15472,18821,2330,300,9432,5033,90025,52361,13444,13808,2066,1751,13808,2360,648,119], //
        ]

      );      

      var formatter = new google.visualization.DateFormat({pattern: 'yyyy'});
      var addButton = document.getElementById('b1');
      var removeButton = document.getElementById('b2');
      var zoomButton = document.getElementById('b3');
      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));

      // function drawChart () {
      //   //disable while chart is drawing 
      //   button.disabled = true;
      //   google.visualization.events.addListener(chart, 'ready',
      //   function () {
      //     button.disabled = false;
      //   });
      //     chart.draw(data, options);

      // }


        // $.(window).smartresize(function() {
        chart.draw(data, options);
      // }
    }; // close of draw chart





function drawTimeline () {
  var chart = new google.visualization.Timeline(document.getElementById('timeline'));
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Category'})
  dataTable.addColumn({ type: 'string', id: 'Legislation'});
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
      [ 'Legislation','Chinese Exclusion Act', new Date(1882,0 ,0 ), new Date(1883, 0, 0) ],
      [ 'Legislation','Alien Contract Labor Laws', new Date(1885,0 ,0 ),  new Date(1886,0 ,0) ],
      [ 'Legislation','Alien Contract Labor Laws (Again)', new Date(1887,0 ,0 ),  new Date(1888,0 ,0) ],
      [ 'Legislation','Immigration Act of 1891', new Date(1891,0 ,0 ),  new Date(1892,0 ,0) ],
      [ 'Event','Ellis Island Opens', new Date(1892,0 ,0 ),  new Date(1893,0 ,0) ],
      [ 'Legislation','Migration Procedures Formalized', new Date(1893,0 ,0 ),  new Date(1894,0 ,0) ],
      // [ 'Movement','Immigration Wave',  new Date(1900,0 ,0),  new Date(1920,0,0) ],
      [ 'Legislation','1903 Immigration Act',  new Date(1903,0 ,0),  new Date(1904,0,0) ],
      [ 'Legislation','Naturalization Act of 1906',  new Date(1906,0 ,0),  new Date(1907,0,0) ],
      [ 'Legislation','Immigration Act of 1917',  new Date(1917,0 ,0),  new Date(1918,0,0) ],
      [ 'Event','U.S. Enters World War One',  new Date(1917, 4 ,0),  new Date(1917,4,0) ],
      [ 'Event','1918 Presidential Proclamation',  new Date(1918,0 ,0),  new Date(1919,0,0) ],





      ]);

  var options = {
    colors: [ '#01579b', '#990000'],

  timeline: {
      groupByRowLabel: true,
      colorByRowLabel: true,
      // singleColor: '#a53336',

      rowLabelStyle: {
        fontName: 'Garamond',
        fontSize: 14,
        color: 'black',
      },
      barLabelStyle: {
        fontSize: 14,
        fontName: 'Helvetica',
        color: 'white',
      },
    },
      // backgroundColor: '#01579b',
      backgroundColor: 'white',

  };
   chart.draw(dataTable, options);
  }

  // click handlers
  $('#b0').click(function(e){
    drawChart();
    return false;
  });

  $('#total').click(function(e){
    drawBasic();
    return false;
  });


// var barchart = new google.visualization.BarChart(document.getElementById('chart_div'));
//         chart.draw(data, options);

//change view window  w/ vaxis viewWindow.min
// adding and removing columns and rows w/ animations

//or add/remove dates, columns, zooms WHEN clicking on certain timeline object
//populate panel based on country click?
// format date on popups!






//timeline plans
// legislation
//war context
//major events?
//timeline styling

//1885 alien contract labor laws; more in 1887
// immigration act of 1891 - est federal immigration service ist of excludable classes - "polygamists, persons convicted of crimes of moral turpitude, and those suffering loathsome or contagious diseases" (USCIS). 
//1892 - ellis island opened
// 1893 mmigration procedures formalized during the first decade in attempts to enforce national immigration policy
// - collection of manifests
// - reviewing of exclusion cases
// 1900 - Between 1900 - 1920, more than 14.5 million immigrants admitted to the US
// 1903 immigration act
// naturalization act of 1906 - put in place to prevent naturalization fraud
//immigration act of 1917 - april 1917 US enters war
//1918 Presidential Proclamation - affected immigration from Canada and Mexico



