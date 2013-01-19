//  CCP 11/18/2010
//
//  this plugin is intended to help in the case requiring disabled, checked checkboxes
//  
//      ex1:    <input type="checkbox" name="cbox1" id="cbox1" checked="checked" disabled="disabled" />
//
//  the nessecity for this is that a disabled form input will not post any values (because it's disabled)
//
//  To combat this, we can use a hidden element of the same name to post the value for the disable checkbox
//
//      ex2:    <input type="checkbox" name="cbox1" id="cbox1" checked="checked" disabled="disabled" />
//              <input type="hidden" name="cbox1" value="on" />
//
//  So, that's exactly what this plugin does. For any checkbox element, we can mark it as checked, disable it, and still post the checked value as though it is not disabled.
//
//  usage is very strait forward, and the function is chainable.
//
//  $('#inputToCheck').forceCheck();
//
//  the opposite function is $.forceUnCheck, which removes the new hidden element and unchecks and enables the checkbox
//
//  $('#inputToCheck').forceUnCheck();
//


$.fn.forceCheck = function(options) {
    return this.each(function() {
        var $this = $(this);
        if ($this.is("input")) {
            if ($this.attr("type") == "checkbox") {
                $this.prop({
                  disabled: true,
                  checked:true
                });
                $this.after('<input type="hidden" checked="checked" name="' + $this.attr("name") + '" value="' + $this.attr("value") + '" class="forcecheck" />');
            }
        }
    });
};

$.fn.forceUnCheck = function(options) {
    return this.each(function() {
        var $this = $(this);
        if ($this.is("input")) {
            if ($this.attr("type") == "checkbox") {
                $this.prop({
                  disabled: false,
                  checked:false
                });
                $this.next().remove('[name=' + $this.attr("name") + ']');
            }
        }
    });
};