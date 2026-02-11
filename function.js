const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesScale = 1; 

function moveNoButton() {
    const x = Math.random() * 800 - 400;
    const y = Math.random() * 400 - 200;  
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    yesScale += 0.2; 
    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('mouseenter', moveNoButton);


noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    yesBtn.style.transition = 'all 1s ease-in-out';
    yesBtn.style.position = 'fixed';
    yesBtn.style.top = '50%';
    yesBtn.style.left = '50%';
    yesBtn.style.transform = 'translate(-50%, -50%) scale(30)';
    yesBtn.style.zIndex = '10';

    noBtn.style.display = 'none';
});
