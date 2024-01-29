document.querySelectorAll('nav .summary').forEach(function (summary) {
  summary.addEventListener('click', function () {
    var dataAtt = this.getAttribute('data-nav');
    var matchTarg = document.querySelector('.summary-target[data-summary="' + dataAtt + '"]');

    if (matchTarg.classList.contains('show')) {
      matchTarg.classList.remove('show');
    } else {
      document.querySelectorAll('.summary-target').forEach(function (element) {
        element.classList.remove('show');
      });
      matchTarg.classList.add('show');
    }
  });
});


/*$('nav .summary').each(function(){
  $(this).click(function(){
    var $dataAtt = $(this).attr('data-nav');
    var $matchTarg = $('.summary-target[data-summary="'+$dataAtt+'"]');

    if( $matchTarg.hasClass('show') ){
      $matchTarg.removeClass('show');
    } else {
      $('.summary-target').removeClass('show');
      $matchTarg.addClass('show');
    }
  });
});*/