const background = document.getElementById('background');
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;

    // background parallax
    const bgX = (xPercent - 0.5) * 50;
    const bgY = (yPercent - 0.5) * 50;
    background.style.transform = `translate(${bgX}px, ${bgY}px)`;

    // background color shift dynamically
    const hueRotation = xPercent * 360;
    const saturation = 50 + yPercent * 50;
    background.style.filter = `blur(100px) saturate(${saturation}%) hue-rotate(${hueRotation}deg)`;

    // content moves slightly with cursor
    const containerX = (xPercent - 0.5) * 30;
    const containerY = (yPercent - 0.5) * 15;
    container.style.transform = `translate(calc(-50% + ${containerX}px), calc(-50% + ${containerY}px))`;
});
