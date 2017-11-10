/**
 * Created by wojciechpac on 07.11.2017.
 */
$(function () {
    var $start_counter = $("#event-start"),
        counts = [ 0 ];

    $(".draggable").draggable({
        grid: [10, 10],
        appendTo: '#droppable',
        containment: "window",
        cursor: 'move',
        revertDuration: 100,
        revert: 'invalid',
        helper: 'clone'
    });

    $("#droppable").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            ui.helper.clone().appendTo('#droppable');
            counts[0]++;
            updateCounterStatus($start_counter, counts[0]);
            $("#droppable .draggable").addClass("item");
            $(".item").removeClass("ui-draggable draggable");
            $('.item').draggable({
                containment: 'parent'
            });
        }
    });

    function updateCounterStatus($event_counter, new_count) {
        $("span.count", $event_counter).text(new_count);
    }
});


