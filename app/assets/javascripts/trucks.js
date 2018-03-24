// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
    $('input:file').change(function() {
        let form = $('form')
        let url = form.data('url')
        let fileInput = $(this)

        $.each(this.files, function(index, file) {
            let formData = new FormData()
            $.each(form.data('fields'), function(key, value) {
                formData.append(key, value)
            })
            formData.append('file', file)

            $.ajax({
                method: 'post',
                url: url,

                data: formData,
                dataType: 'XML',

                cache: false,
                contentType: false,
                processData: false
            }).done(function(e, data) {
                console.log(fileInput.attr('name'))
                let key = $(e).find("Key").text()
                let url   = '//' + form.data('host') + '/' + key;
                let input = $("<input />", { type:'hidden', name: fileInput.attr('name'), value: url })
                form.append(input);
            })
        })
    })
})

$(function(){
    $("#s3-uploader").S3Uploader()
})