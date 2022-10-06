//import BigEval from "BigEval.js";

$(document).ready(function() {
  
  
  //-----------START SETTING HOLDER VALUES--------------
  
        
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

          
          var characterXPTotalPreviousVal;
          var characterXPHold = 'XP Total';
          $("#xpTotal").focus(function() {
            characterXPTotalPreviousVal = this.value;
            if (characterXPHold == this.value)
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterXPSpentPreviousVal;
              // if empty then updating with initial value
          }).val(characterXPHold);
          //----^-- setting initial value

          var characterXPSpentPreviousVal;
          var characterXPSpentHold = 'XP Spent';
          $("#xpSpent").focus(function() {
            characterXPSpentPreviousVal = this.value;
            if (characterXPSpentHold == this.value)
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterXPSpentPreviousVal;
              // if empty then updating with initial value
          }).val(characterXPSpentHold);
          //----^-- setting initial value


          var characterArchHold = 'Archetype(s)';
          $("#archName").focus(function() {
            if (characterArchHold == this.value)
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterArchHold;
              // if empty then updating with initial value
          }).val(characterArchHold);
          //----^-- setting initial value

          var characterDestinyHold = 'Destiny';
          $("#destinyName").focus(function() {
            if (characterDestinyHold == this.value)
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterDestinyHold;
              // if empty then updating with initial value
          }).val(characterDestinyHold);
          //----^-- setting initial value
          
          var characterHPTotalPreviousVal;
          var characterHPTotalHold = 'HP Total';
          $("#HPTotal").focus(function() {
            characterHPTotalPreviousVal = this.value;
            if (characterHPTotalHold == this.value){
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
            }
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterHPTotalPreviousVal;
              // if empty then updating with initial value
          }).val(characterHPTotalHold);
          //----^-- setting initial value

          var characterHPCurrentPreviousVal;
          var characterHPCurrentHold = 'HP Current';
          $("#HPCurrent").focus(function() {
            characterHPCurrentPreviousVal = this.value;
            if (characterHPCurrentHold == this.value){
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
            }
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterHPCurrentPreviousVal;
              // if empty then updating with initial value
          }).val(characterHPCurrentHold);
          //----^-- setting initial value

          var characterMPTotalPreviousVal;
          var characterMPTotalHold = 'MP Total';
          $("#MPTotal").focus(function() {
            characterMPTotalPreviousVal = this.value;
            if (characterMPTotalHold == this.value){
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
            }
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterMPTotalPreviousVal;
              // if empty then updating with initial value
          }).val(characterMPTotalHold);
          //----^-- setting initial value

          var characterMPCurrentPreviousVal;
          var characterMPCurrentHold = 'HP Current';
          $("#MPCurrent").focus(function() {
            characterMPCurrentPreviousVal = this.value;
            if (characterMPCurrentHold == this.value){
              // ------^-- empty the field only if the field value is initial  
              this.value = '';
              // emptying field value
            }
          }).blur(function() {
            if (this.value.trim() == '')
              // -----^-- condition field value is empty
              this.value = characterMPCurrentPreviousVal;
              // if empty then updating with initial value
          }).val(characterMPCurrentHold);
          //----^-- setting initial value

      //-----------END SETTING HOLDER VALUES--------------


     // -----------START INPUT MATH--------------
     
      var HPTotalInput = document.getElementById("HPTotal");
      HPTotalInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

      var HPCurrentInput = document.getElementById("HPCurrent");
      HPCurrentInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

      var MPTotalInput = document.getElementById("MPTotal");
      HPTotalInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

      var MPCurrentInput = document.getElementById("MPCurrent");
      MPCurrentInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

      var XPTotalInput = document.getElementById("xpTotal");
      XPTotalInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

      var XPSpentInput = document.getElementById("xpSpent");
      XPSpentInput.addEventListener("keypress", function(event) {
        if(event.key == "Enter"){
          console.log("Enter Pressed");
          var MathObj = new BigEval();
          this.value = MathObj.exec(this.value);
        }
      });

  });