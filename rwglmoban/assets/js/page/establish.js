$('.establish').on('click', function () {
    var data = {
        projectName: $('.project-name').val(),
        projectCatalogue: $('.project-catalogue option:selected').text()
    }
    var htmlstr = template('tpl-user', data)
    $('.test').append(htmlstr)
})