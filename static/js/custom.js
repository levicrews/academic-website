// https://stackoverflow.com/questions/77893096/css-fix-positioning-of-anchors-next-to-details-summary/77895709?noredirect=1#comment137330103_77895709

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