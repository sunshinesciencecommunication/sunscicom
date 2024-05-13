<script>
  window.addEventListener('scroll', function() {
    var title = document.querySelector('.second_section_title');
    var textContainer = document.querySelector('#second_section_text');

    if (window.scrollY >= textContainer.offsetTop) {
      title.style.visibility = 'visible';
    } else {
      title.style.visibility = 'hidden';
    }
  });
</script>
