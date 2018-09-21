$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('#noteModal').modal({});
    $('.noteButton').on('click', function (noteRet) {
        noteRet.stopImmediatePropagation();
        var currentButton = $(this).attr('id');
        popNote(currentButton);
        $('#noteModal').modal('open');
        $('#noteButton').on('click', function (noteRet) {
            noteRet.preventDefault();
            var noteText = $('#noteText');
            $.post("/note/" + currentButton, $('#noteForm').serialize())
            .done(function (data) {
                popNote(currentButton);
             })
            .fail(function (error) {
                console.log("Cannot", error);
            });
            noteText.val('');
            return false;
        });
    });

    function popNote(id) {
        $('.messages').empty();
        $.get("/note/" + id, function (data) {
            for (var i = 0; i < data.length; i++) {
                var note = $(
                    '<li class="note collection-item">'
                    + '<p>'
                    + (i + 1) + '. ' + data[i].noteText + '</p>'
                    + '<button class="uniqueNoteButton btn-floating btn-large waves-effect waves-light blue btn" data-currentButtonId="' + data[i]._id + '"><i class="material-icons right">delete</i> Delete #' + (i + 1) + '</button>'
                    + '</li>'
                );
                $('.messages').append(note);
            }
        })
        .then(function () {
            $(".uniqueNoteButton").on("click", function () {
                var currentButtonId = $(this).data(currentButtonId);
                $.post("/deleteNote/" + currentButtonId.currentbuttonid, $('#noteForm').serialize())
                .done(function (data) {
                    $('#noteModal').modal('close');
                })
                .fail(function () {
                    console.log("Error: Cannot get notes");
                });
            });
        })
    }
})