/**
 * Created by wojciechpac on 07.11.2017.
 */
$(function () {

    console.log('poo');
    $(".draggable").draggable({
        grid: [20, 20],
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
        }
    });


});