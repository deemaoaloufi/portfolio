/* ========================================
   DIMAH ALOUFI - PORTFOLIO SCRIPTS
   ======================================== */

// -------------------- 
// Typing Animation
// -------------------- 
const name = "Dimah Omar Aloufi";
const typedName = document.getElementById('typed-name');
let i = 0;

function typeName() {
    if (i < name.length) {
        typedName.textContent += name.charAt(i);
        i++;
        setTimeout(typeName, 100);
    }
}

setTimeout(typeName, 800);

// -------------------- 
// Creative Bracket Cursor
// -------------------- 
const cursor = document.querySelector('.cursor');
const brackets = document.querySelector('.cursor-brackets');
const tl = document.querySelector('.cursor-bracket.tl');
const tr = document.querySelector('.cursor-bracket.tr');
const bl = document.querySelector('.cursor-bracket.bl');
const br = document.querySelector('.cursor-bracket.br');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

const codeSnippets = ['<>', '/>', '{}', '()', '[]', '=>', '++', '&&', '||', '!='];
let currentSnippet = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    cursor.style.left = cursorX + 15 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    cursor.textContent = codeSnippets[currentSnippet];
    
    const size = 30;
    tl.style.left = (cursorX - size/2) + 'px';
    tl.style.top = (cursorY - size/2) + 'px';
    tr.style.left = (cursorX + size/2 - 8) + 'px';
    tr.style.top = (cursorY - size/2) + 'px';
    bl.style.left = (cursorX - size/2) + 'px';
    bl.style.top = (cursorY + size/2 - 8) + 'px';
    br.style.left = (cursorX + size/2 - 8) + 'px';
    br.style.top = (cursorY + size/2 - 8) + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Change code snippet on click
document.addEventListener('click', () => {
    currentSnippet = (currentSnippet + 1) % codeSnippets.length;
});

// -------------------- 
// Hover Effects
// -------------------- 
document.querySelectorAll('a, button, .project-item, .cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        brackets.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        brackets.classList.remove('hover');
    });
});

// -------------------- 
// Reveal on Scroll
// -------------------- 
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// -------------------- 
// Smooth Scroll
// -------------------- 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
