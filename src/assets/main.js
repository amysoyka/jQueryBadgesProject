$.ajax({
    url: 'https://www.codeschool.com/users/amysoyka.json',
    dataType: 'jsonp',
    success: function(response) {
      foreach(response.courses.completed as completed){
        $('badges').innerHTML += '<div class="course"></div>'
      }
    }
  });
