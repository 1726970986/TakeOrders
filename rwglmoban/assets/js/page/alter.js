$('.fd').on('click', '.editproject', function () {
    var pcp = $(this).parent().parent().parent().parent().parent()
    $('.btn-danger').on('click', function () {
        $('.btn-close').trigger('click')
        pcp.remove()
    })
})