var taskArray = [];

$(function(){
  $("#taskInput").focus(function(){
    if( $("#errorMsg").is(":visible") )
      $("#errorMsg").hide();
  });
  
  $("#taskForm").submit(function(e){
    e.preventDefault();
    //get value from input
    var taskContent = $("#taskInput").val();
    taskArray.push(taskContent);
    var dataIdSetter = taskArray.length - 1;
    //error check
    if( taskContent !== ""){//process info
      //create elements with task unique flag
      var taskContainer = $("<div>",{"class":"taskRow","data-id":dataIdSetter});
      var taskChk = $("<input>",{"type":"checkbox","class":"chkBox","data-id":dataIdSetter});
      var taskSpan = $("<span>",{"class":"contentSpan","data-id":dataIdSetter}).html(taskContent);
      //put elements inside container
      taskContainer.append(taskChk,taskSpan);
      //append to div#taskCont as new task
      $("#taskCont").append(taskContainer);
    }else{//it's empty let the user know
      $("#errorMsg").show();
    }
    
    $('.chkBox').click(function() {
      var dataId = $(this).attr('data-id');
      var span = $("span[data-id='"+dataId+"']");
      if ($(this).is(':checked')) {//checking it off
        console.log("check it");
        //strikethrough the span content
        $(span).addClass("completed");
      }else{//unchecking it
        console.log("uncheck it");
        //remove strikethrough on span content
        $(span).removeClass("completed");
      }
    });
  });
});