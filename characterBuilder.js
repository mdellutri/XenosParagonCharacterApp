$(document).ready(function() {
    var characterNameHold = 'Character Name';
    $("#charName").focus(function() {
      if (characterNameHold == this.value)
        // ------^-- empty the field only if the field value is initial  
        this.value = '';
        // emptying field value
    }).blur(function() {
      if (this.value.trim() == '')
        // -----^-- condition field value is empty
        this.value = characterNameHold;
        // if empty then updating with initial value
    }).val(characterNameHold);
    //----^-- setting initial value


    var characterClassHold = 'Class';
    $("#className").focus(function() {
      if (characterClassHold == this.value)
        // ------^-- empty the field only if the field value is initial  
        this.value = '';
        // emptying field value
    }).blur(function() {
      if (this.value.trim() == '')
        // -----^-- condition field value is empty
        this.value = characterClassHold;
        // if empty then updating with initial value
    }).val(characterClassHold);
    //----^-- setting initial value
  });