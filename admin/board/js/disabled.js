$(document).on('click', '.control', function(e){
    if($(this).val() == "보류") {
        $(this).val("해제");
        $(this).css('background-color', '#b9b9b9');
        // this.style.backgroundColor = "#b9b9b9";
    } else {
        $(this).val("보류");
        $(this).css('background-color', '');
    }
});