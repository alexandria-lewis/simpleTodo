//global for selecting correct elements by index
var taskArray = [];

$(function(){
  $("#taskInput").focus(function(){//when input is clicked/in focus
    //check if error message container is visible
    if( $("#errorMsg").is(":visible") )
      $("#errorMsg").hide();//if it is, hide it
  });
  
  $("#taskForm").submit(function(e){//submit is either enter key or pressing the button type submit
    e.preventDefault();
    //get value from input
    var taskContent = $("#taskInput").val();
    //push string into an array to keep track of order with the index
    taskArray.push(taskContent);
    //since pushing adds it to the end we get the index by subtracting from the returned length
    var dataIdSetter = taskArray.length - 1;
    //error check
    if( taskContent !== ""){//process info
      //create elements with task unique flag(index from the array above)
      var taskContainer = $("<div>",{"class":"taskRow","data-id":dataIdSetter});
      var taskChk = $("<input>",{"type":"checkbox","class":"chkBox","data-id":dataIdSetter});
      //use html()to insert content string into that span element
      var taskSpan = $("<span>",{"class":"contentSpan","data-id":dataIdSetter}).html(taskContent);
      //put elements inside div container
      taskContainer.append(taskChk,taskSpan);
      //append to div#taskCont as new task
      $("#taskCont").append(taskContainer);
      
      //need to create this event in here after elements have been created and added to the page.
      $('.chkBox').click(function() {//when clicking the checkbox input
        //get the id value from the data attribute
        var dataId = $(this).attr('data-id');
        //get the correct span using the data attribute value
        var span = $("span[data-id='"+dataId+"']");
        
        if ($(this).is(':checked')) {//checking it off
          console.log("checked it");
          //strikethrough the span content
          $(span).addClass("completed");
        }else{//unchecking it
          console.log("unchecked it");
          //remove strikethrough on span content
          $(span).removeClass("completed");
        }
      });//end of chkBox.click
      
    }else{//it's empty let the user know
      $("#errorMsg").show();//show the error container
    }
  });//end of taskForm.submit
});//end of document ready