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

// === STATUS BOX (Single JS) ===

// Create status box
const statusBox = document.createElement('div');
statusBox.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.95);
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  font-family: sans-serif;
  text-align: center;
  z-index: 1000;
`;

// Title
const statusTitle = document.createElement('h3');
statusTitle.textContent = 'Service Status';
statusTitle.style.margin = '0 0 10px 0';
statusBox.appendChild(statusTitle);

// Status text
const statusText = document.createElement('div');
statusText.textContent = 'Operational';
statusText.style.cssText = `
  color: white;
  background: #28a745;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
`;
statusBox.appendChild(statusText);

// Optional: button to toggle status
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Status';
toggleBtn.style.cssText = `
  margin-top: 12px;
  padding: 8px 14px;
  border:none;
  border-radius: 8px;
  font-weight:bold;
  cursor:pointer;
  background:#4b6cb7;
  color:white;
`;
toggleBtn.onclick = () => {
  if (statusText.textContent === 'Operational') {
    statusText.textContent = 'Down';
    statusText.style.background = '#dc3545';
  } else {
    statusText.textContent = 'Operational';
    statusText.style.background = '#28a745';
  }
};
statusBox.appendChild(toggleBtn);

// Add to body
document.body.appendChild(statusBox);
