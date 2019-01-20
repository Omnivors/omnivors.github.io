$(function() {
  var path = window.location.pathname;
  var section = window.location.hash.slice(1);
  if (path === '/' && section === 'work') {
    $('.container').css('display', 'none');
    $('#container-work' ).css('display', 'flex');
    $('.menu-item').removeClass('menu-active');
    $('#work').addClass('menu-active');
  } else if (path === '/index.html' && section === 'contacts') {
    $('.container').css('display', 'none');
    $('#container-contacts' ).css('display', 'flex');
    $('.menu-item').removeClass('menu-active');
    $('#contacts').addClass('menu-active');
  } else {
    $('.menu-item').removeClass('menu-active');
    $('#about').addClass('menu-active');
  }
  // $(window).scrollTop(0);
});

$(':not(.menu-separator).menu-item ').click(function() {
  $('.menu-item').removeClass('menu-active');
  $(this).addClass('menu-active');
  var $container = $('#container-' + $(this).attr('id'));
  $('.container').css('display', 'none');
  $container.css('display', 'flex');
});

$('#logo').click(function() {
  window.location = '/';
});
