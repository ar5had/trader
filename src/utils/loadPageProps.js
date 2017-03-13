export default function loadPageProps(title) {
  document.title = title;
  document.querySelector('.menu').classList.remove('open');
  document.body.style.cursor = 'default';
  document.body.scrollTop = 0;
  console.log(document.body.scrollTop);
}
