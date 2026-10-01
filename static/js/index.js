const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const featuredVideos = document.querySelectorAll('.featured-video');

const featuredLoader = new IntersectionObserver(entries => {
  entries.forEach(({ target: video, isIntersecting }) => {
    if (!isIntersecting) return;
    video.autoplay = !reducedMotion.matches;
    video.src = video.dataset.src;
    delete video.dataset.src;
    featuredLoader.unobserve(video);
  });
}, { rootMargin: '300px 0px' });

featuredVideos.forEach(video => featuredLoader.observe(video));

reducedMotion.addEventListener('change', () => {
  featuredVideos.forEach(video => {
    video.autoplay = !reducedMotion.matches;
  });
  if (reducedMotion.matches) {
    document.querySelectorAll('#results video').forEach(video => video.pause());
  }
});

document.querySelectorAll('.clip-toggle').forEach(button => {
  const video = button.querySelector('video');
  const play = () => video.play().catch(() => {});
  const stop = () => {
    video.pause();
    video.currentTime = 0;
  };

  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && !reducedMotion.matches) play();
  });
  button.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') stop();
  });
  button.addEventListener('click', () => {
    if (video.paused) play();
    else stop();
  });
  video.addEventListener('play', () => button.setAttribute('aria-pressed', 'true'));
  video.addEventListener('pause', () => button.setAttribute('aria-pressed', 'false'));
});

document.querySelectorAll('#results details').forEach(gallery => {
  gallery.addEventListener('toggle', () => {
    if (gallery.open) return;
    gallery.querySelectorAll('video').forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
