/**
  jQuery.getVal v0.1.0
  Dave Taylor http://the-taylors.org

  @license The MIT License (MIT)
  @preserve Copyright (c) 2012 Dave Taylor http://the-taylors.org
*/
(function($){
  'use strict';

  $.getVal = {
    defaults: {
      radioType: 'group', // 'checked' or 'val'
      checkedType: 'val' // or 'checked'
    },
    handlers: {
      radio: function($el, settings){
        if (settings.radioType === 'val'){
          return $el.val();
        } else if (settings.radioType === 'checked'){
          if ($el[0].checked){
            return $el.val();
          } else {
            return;
          }
        } else {
          var $checked = $('[name="'+ $el[0].name +'"]:checked');
          if ($checked.length){
            return $checked.val();
          } else {
            return;
          }
        }
      },
      checkbox: function($el, settings){
        if (settings.checkedType === 'checked'){
          return $el[0].checked;
        } else {
          return $el.val();
        }
      }
    }
  };

  $.fn.getVal = function(options) {
    if (this.length){
      var settings = $.extend({}, $.getVal.defaults, options),
        $el = this.eq(0),
        el = $el[0],
        type = el.type || el.nodeName.toLowerCase()
      ;
      if ($.getVal.handlers[type]){
        return $.getVal.handlers[type]($el, settings);
      } else {
        return $el.val();
      }
    }
  };

}(window.jQuery));