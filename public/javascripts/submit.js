
  
    var textarea = document.getElementById('myText');
    $(document).ready(function(){
      $("form").submit(function(){
          var word = 'vegan';
          var textValue=textarea.value;
          if (textValue.indexOf(word) != -1){
            alert('Sorry, we do not accept vegan orders.');
          }else{ 
            var ele = document.getElementsByName('flav_selection');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("thanks").innerHTML
                        += "<br/>" + ele[i].value + ": " + document.getElementById("Quantity").value + " ordered</br>";
            }
            document.getElementById("thanks").innerHTML += "Notes: " + document.getElementById("myText").value;
          $("form").remove();
          }
 
    })
      });
   ;
//citation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
