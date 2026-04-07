const background = document.getElementById('background');
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
  const xPercent = e.clientX / window.innerWidth;
  const yPercent = e.clientY / window.innerHeight;

  // Move background with cursor (subtle parallax)
  const bgX = (xPercent - 0.5) * 30;
  const bgY = (yPercent - 0.5) * 30;
  background.style.transform = `translate(${bgX}px, ${bgY}px)`;

  // Change background colors dynamically based on cursor
  // We'll shift the hue rotation with X and saturation with Y
  const hueRotation = xPercent * 360; // 0 to 360 degrees hue shift
  const saturation = 50 + yPercent * 50; // 50% to 100% saturation

  background.style.filter = `blur(80px) saturate(${saturation}%) hue-rotate(${hueRotation}deg)`;

  // Move container slightly left/right and up/down based on cursor for subtle effect
  const containerX = (xPercent - 0.5) * 40; // larger movement horizontally
  const containerY = (yPercent - 0.5) * 20; // smaller movement vertically
  container.style.transform = `translate(calc(-50% + ${containerX}px), calc(-50% + ${containerY}px))`;
});
