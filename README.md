#jquery.forceCheck.js




##Use Cases

*************

This plugin is intended to help in the case requiring disabled, checked checkboxes.

Case 1:
      
      <input type="checkbox" name="cbox1" id="cbox1" checked="checked" disabled="disabled" />

The nessecity for this is that a disabled form input will not post any values (because it's disabled).

To combat this, we can use a hidden element of the same name to post the value for the disable checkbox.

Case 2:

      <input type="checkbox" name="cbox1" id="cbox1" checked="checked" disabled="disabled" />
      <input type="hidden" name="cbox1" value="on" />

So, that's exactly what this plugin does. For any checkbox element, we can mark it as checked, disable it, 
and still post the checked value as though it is not disabled.


##Usage

****************

Usage is very strait forward, and the function is chainable.

      $('#inputToCheck').forceCheck();

The opposite function is $.forceUnCheck, which removes the new hidden element and unchecks and enables the checkbox.

      $('#inputToCheck').forceUnCheck();

Check it out!