// BitEastwood Top 10 Crypto Flip Ticker
// Made for CTTV https://www.Rank1.tv/cryptotraderstv
// Top 10 list pulled from https://coinmarketcap.com
// code modified from https://codepen.io/NerdOrDie/pen/vNEvee

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
    hypers: {
      rank1: 1,
      rank2: 2,
      rank3: 3,
      rank4: 4,
      rank5: 5,
      rank6: 6,
      rank7: 7,
      rank8: 8,
      rank9: 9,
      rank10: 10,
    },
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
      enableRank11: 0,
      enableRank12: 0,
      enableRank13: 0,
      enableRank14: 0,
      enableRank15: 0,
      enableRank16: 0,
      enableRank17: 0,
      enableRank18: 0,
      enableRank19: 0,
      enableRank20: 0,
      
      
      //
      // Times to update
      //
      
      // Time each network animation takes in seconds
      aTime: 4,
      
      // The delay for the animation cycle to restart in seconds
      pauseTime: 5
    }
  };
  
  // Load hypers ranks
  $( ".popup .right span" ).each(function() {
      var hypersName = settings.hypers[$(this).data('name')];
      $(this).append( hypersName );
  });
  
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