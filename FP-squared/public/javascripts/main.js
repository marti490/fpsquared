$( document ).ready(function() {
    $('#teamForm').validate({
        rules: {
            teamName: {
                required: true
            }
        }
    });

    function changeStatus(id) {
        console.log(id);
    }
});

// Event listeners
$('#createTeam').click(function(e) {
        $('#teamForm').submit();
});

$('#joinTeam').click(function(e) {
        $('#joinForm').submit();
});

$('#createSprint').click(function(e) {
        $('#sprintForm').submit();
});

$('#closeSprint').click(function(e) {
        $('#closeSprintForm').submit();
});

$('#createStory').click(function(e) {
        $('#storyForm').submit();
});

$('#createTask').click(function(e) {
        $('#taskForm').submit();
});

$('#createComment').click(function(e) {
        $('#commentForm').submit();
});

$('#createChecklistItem').click(function(e) {
        $('#checkListForm').submit();
});

$('#menuBar').click(function(e) {
        $('.demo.sidebar')
          .sidebar('toggle');
});


$('#show-sidebar').click(function(e) {
      $('#show-sidebar').hide();
      $('.menu.sidebar').sidebar('toggle');
});

$('#hide-sidebar').click(function(e) {
      $('#show-sidebar').show();
      $('.menu.sidebar').sidebar('toggle');
});

/* Dragging tasks */

$(".task").draggable({
        revert: true,
        zIndex: 10,
        snap: ".taskStatus",
        snapMode: "inner",
        snapTolerance: 70,
        start: function (event, ui) {
            lastPlace = $(this).parent();
        }
});

$("#taskStatus_Created").droppable({
        drop: function (event, ui) {
            event.preventDefault();
            var dropped = ui.draggable;

            var taskID = dropped[0].id.split('_')[1];

            $.ajax(jsRoutes.controllers.Application.saveTaskStatus(taskID, "Created"))
              .done( /*...*/ )
              .fail( /*...*/ );

            $(dropped).detach().appendTo($("#taskStatus_Created"));
        }
});

$("#taskStatus_Started").droppable({
        drop: function (event, ui) {
            event.preventDefault();
            var dropped = ui.draggable;

                        var taskID = dropped[0].id.split('_')[1];

                        $.ajax(jsRoutes.controllers.Application.saveTaskStatus(taskID, "Started"))
                          .done( /*...*/ )
                          .fail( /*...*/ );

            $(dropped).detach().appendTo($("#taskStatus_Started"));
        }
});

$("#taskStatus_Review").droppable({
        drop: function (event, ui) {
            event.preventDefault();
            var dropped = ui.draggable;

                        var taskID = dropped[0].id.split('_')[1];

                        $.ajax(jsRoutes.controllers.Application.saveTaskStatus(taskID, "Review"))
                          .done( /*...*/ )
                          .fail( /*...*/ );

            $(dropped).detach().appendTo($("#taskStatus_Review"));
        }
});

$("#taskStatus_Complete").droppable({
        drop: function (event, ui) {
            event.preventDefault();
            var dropped = ui.draggable;

                        var taskID = dropped[0].id.split('_')[1];

                        $.ajax(jsRoutes.controllers.Application.saveTaskStatus(taskID, "Complete"))
                          .done( /*...*/ )
                          .fail( /*...*/ );

            $(dropped).detach().appendTo($("#taskStatus_Complete"));
        }
});

function saveChecklistItemChecked(item, itemId) {

    $.ajax(jsRoutes.controllers.Application.saveChecklistItemChecked(itemId, item.checked))
                              .done( /*...*/ )
                              .fail( /*...*/ );
}