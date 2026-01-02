// Rotating words animation
const words = ['inspira', 'transforma', 'conecta', 'impacta', 'destaca'];
let currentIndex = 0;
const rotatingWord = document.getElementById('rotatingWord');

function rotateWord() {
    rotatingWord.style.opacity = '0';
    rotatingWord.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingWord.textContent = words[currentIndex];
        rotatingWord.style.opacity = '1';
        rotatingWord.style.transform = 'translateY(0)';
    }, 300);
}

rotatingWord.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
setInterval(rotateWord, 3000);

// Smooth mouse follow effect for orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.glow-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});
