const home = document.querySelector('#home');
const feature = document.querySelector('#features');
const about = document.querySelector('#about');
const team = document.querySelector('#team');
const contact = document.querySelector('#contact');


home.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
feature.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 50, left: 0, behavior: 'smooth' });
});
about.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 200, left: 0, behavior: 'smooth' });
});
team.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 1900, left: 0, behavior: 'smooth' });
});
contact.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 2000, left: 0, behavior: 'smooth' });
});