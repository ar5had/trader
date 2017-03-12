export default function loadPageProps(title) {
  document.title = title;
  document.body.scrollTop = 0;
  document.querySelector('.menu').classList.remove('open');
  document.body.style.cursor = 'default';
}
