
const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hidden'),350));
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const toggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');toggle.setAttribute('aria-expanded',open);document.body.classList.toggle('menu-open',open)});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox');
const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.full;lightbox.showModal()}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
document.getElementById('year').textContent=new Date().getFullYear();
