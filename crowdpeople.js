var numclicks = 0;
    	var keydowns = 0;
      var addedelements = [];
    	$(document).ready(function() {
    		$("#theimage").click(function(e) {
          numclicks++;
          $("#numberofpeople").text(numclicks);
          $("#numberofpeoplefield").val(numclicks);
          var newdomelement = $("<div class='marker'></div>");
          newdomelement.css("left", (e.pageX-3) + "px");
          newdomelement.css("top", (e.pageY-3) + "px");
          var currhistory = $("#history").val();
          currhistory += "|" + e.pageX + "," + e.pageY + "|";
          $("#history").val(currhistory);
          newdomelement.click(removeElementEvent);
          $("body").append(newdomelement);
          // add to history
          addedelements.push(newdomelement);
    		})
    		$(document).keydown(function(e) {
    			keydowns++;
    			$("#numkeydowns").val(keydowns);
          console.log(e);
          if(e.key=="z" && e.ctrlKey) {
            var elem2remove = addedelements.pop();
            removeElement(elem2remove);
          }
    		})
    	})
      function removeElement(elem) {
        $(elem).remove();
        numclicks--;
        $("#numberofpeople").text(numclicks);
        $("#numberofpeoplefield").val(numclicks);
      }
      function removeElementEvent(e) {
        removeElement(this);
      }