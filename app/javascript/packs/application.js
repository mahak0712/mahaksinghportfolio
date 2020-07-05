// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap'

import $ from 'jquery';

import 'cocoon-js';




global.$ = $
global.jQuery = $
require('jquery-ui')



// jquery-ui theme
// require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.css/ );
// require.context('file-loader?name=[path][name].[ext]&context=node_modules/jquery-ui-dist!jquery-ui-dist', true,    /jquery-ui\.theme\.css/ );
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//= require gritter


// require("jquery")
// require("jquery-ui")
//  $(function(){
//    $('.sortable').sortable();

//  });






document.addEventListener("turbolinks:load", function () {
  let ready = undefined;
  let set_positions = undefined;
 
  set_positions = function () {
    $('.li').each(function (i) {
      $(this).attr('data-pos', i + 1);
    });
  }
 
  ready = function () {
    set_positions();
    $('.sortable').sortable();
    $('.sortable').sortable().bind('sortupdate', function (e, ui) {
      let updated_order;
      updated_order = [];
      set_positions();
      $('.card2').each(function (i) {
        updated_order.push({
          id: $(this).data('id'),
          position: i + 1
        });
      });
      return $.ajax({
        type: 'PUT',
        url: '/portfolios/sort',
        data: {
          order: updated_order
        }
      });
    });
    return;
  }
 
  $(document).ready(ready);
});
 

 
document.addEventListener("turbolinks:load", function () {
 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

});




document.addEventListener("turbolinks:load", function () {
 var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-expand-lg").css({'background-color': 'white','color':'black'});
       } else {
          $('.navbar-expand-lg').css('background-color', 'white');
       }
   });
    }
    $(document).ready(ready);
});





