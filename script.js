const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; // adjust intensity
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    background.style.transform = `translate(${x}px, ${y}px)`;
});

// Optional: animate gradient slowly
let gradientPosition = 0;
function animateGradient() {
    gradientPosition += 0.1;
    background.style.backgroundPosition = `${gradientPosition}% ${gradientPosition}%`;
    requestAnimationFrame(animateGradient);
}
animateGradient();