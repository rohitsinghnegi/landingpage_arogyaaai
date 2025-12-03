// Simple scroll reveal
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .testi-card').forEach(card => {
  observer.observe(card);
});

// Parallax effect for hero elements
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const heart = document.querySelector('.heart');
  const dna = document.querySelector('.dna');
  const pills = document.querySelector('.pills');

  if (heart) heart.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
  if (dna) dna.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px)`;
  if (pills) pills.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
});

// 3D Tilt Effect for Cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});
