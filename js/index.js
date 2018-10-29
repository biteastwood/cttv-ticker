// BitEastwood Top 10 Crypto Flip Ticker
// Made for CTTV https://www.Rank1.tv/cryptotraderstv
// Top 10 list pulled from https://coinmarketcap.com
// code modified from https://codepen.io/NerdOrDie/pen/vNEvee

/// symbol functions
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=1&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol1 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=2&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol2 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=3&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol3 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=4&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol4 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=5&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol5 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=6&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol6 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=7&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol7 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=8&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol8 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=9&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol9 tbody");
    });
  });
});
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=10&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + "<svg><rect width='60px' height='60px' fill='goldenrod'/><image xlink:href='./SVG/"+f.symbol+".svg' width='60px' height='60px'></svg>" + "</td>" + "</tr>"
          $(tblRow).appendTo("#symbol10 tbody");
    });
  });
});



/// ticker functions
$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=1&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker1 tbody");
    });
  });
});


$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=2&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker2 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=3&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker3 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=4&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker4 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=5&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker5 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=6&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker6 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=7&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker7 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=8&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker8 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=9&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker9 tbody");
    });
  });
});

$(function() {
  var ticker = [];
  $.getJSON('https://api.coinmarketcap.com/v2/ticker/?start=10&limit=1&sort=rank&structure=array', function(data) {
      $.each(data.data, function(i, f) {
         var tblRow = "<tr>" + "<td>" + f.rank + ") </td>" +
          "<td>" + f.symbol + "</td>" + "<td> $" + f.quotes.USD.price + "</td>" + "</tr>"
          $(tblRow).appendTo("#ticker10 tbody");
    });
  });
});


var settings = {
    popup: {
      enableRank1: 1,
      enableRank2: 1,
      enableRank3: 1,
      enableRank4: 1,
      enableRank5: 1,
      enableRank6: 1,
      enableRank7: 1,
      enableRank8: 1,
      enableRank9: 1,
      enableRank10: 1,      
      
      //
      // Times to update
      //
      
      // Time each network animation takes in seconds
      aTime: 7,
      
      // The delay for the animation cycle to restart in seconds
      pauseTime: 1
    }
  };
  
  // Load hypers Popup
  $(".popup").each(function() {
    var supporterEnable = settings.popup[$(this).data('box')],
      boxName = $(this).data('box');
  
    if (supporterEnable == 1) {
      $('input[name=' + boxName + ']').prop('checked', true);
      $(this).addClass("animate-popup");
    } else if (supporterEnable === 0) {
      $('input[name=' + boxName + ']').prop('checked', false);
      $(this).addClass("no-popup");
    } else {
      return false;
    }
  });
  
  // Animate Popup
  
  var popups = $('.animate-popup');
  var i = 0;
  var pT = settings.popup.pauseTime * 1000;
  
  function animatePopup() {
    if (i >= popups.length) {
      i = 0;
    }
    popups.eq(i).addClass("show-popup")
      .delay(settings.popup.aTime * 1000)
      .queue(function() {
        $(this).removeClass("show-popup");
        $(this).dequeue();
        if (i == popups.length) {
          setTimeout(animatePopup, pT);
        } else {
          animatePopup();
        }
      });
    i++;
  }
  animatePopup();