// $(function() {
//   var path = window.location.pathname;
//   var section = window.location.hash.slice(1);
//   if (path === '/index.html' && section === 'work') {
//     $('.container').css('display', 'none');
//     $('#container-work' ).css('display', 'flex');
//   } else if (path === '/index.html' && section === 'contacts') {
//     $('.container').css('display', 'none');
//     $('#container-contacts' ).css('display', 'flex');
//   }
// });

$(':not(.menu-separator).menu-item ').click(function() {
  $('.menu-item').removeClass('menu-active');
  $(this).addClass('menu-active');
  var $container = $('#container-' + $(this).attr('id'));
  $('.container').css('display', 'none');
  $container.css('display', 'flex');
});
