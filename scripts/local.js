$(document).ready(function() {

  var btc;


  $.ajax({
    url : 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=INR',
    success : function(result) {
      btc = result.INR;
      $('#inr-ip').val(btc);
    },
    error: function(xhr, status, error) {
      var err = eval("(" + xhr.responseText + ")");
      $('#error-note').val(er.Message);
    },
  });




  $('#btc-ip').keyup(function() {
    var x = $('#btc-ip').val();
    // var val = Number(x);
    var rv = x*btc;
    $('#inr-ip').val(rv);
  });

  $('#inr-ip').keyup(function() {
    var x = $('#inr-ip').val();
    // var val = Number(x);
    var rv = x/btc;
    $('#btc-ip').val(rv);
  })



});
