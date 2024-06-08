// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const celebrateButton = document.getElementById('celebrateButton');
    const message = document.getElementById('message');

    celebrateButton.addEventListener('click', function() {
        message.classList.remove('hidden');
        startConfetti();
    });

    function startConfetti() {
        const canvas = document.getElementById('confetti');
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 300;
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 5 + 1
            });
        }

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
                if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            requestAnimationFrame(update);
        }

        update();
    }
});
