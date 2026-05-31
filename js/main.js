/**
 * Doctor Gadget • Vishesh Mobiles
 * Main JavaScript — interactions, dynamic content, animations
 */

const WHATSAPP_MSG = encodeURIComponent(
  'Hello, I want to know more about your mobile repair and smartphone services.'
);
const WHATSAPP_NUMBER = '918770050980';

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  { title: 'Mobile Repair', desc: 'Expert diagnosis and repair for all smartphone issues.', icon: 'repair' },
  { title: 'New Smartphones at Best Price', desc: 'Latest models from top brands at competitive rates.', icon: 'phone' },
  { title: 'Second-Hand Mobile Buy & Sell', desc: 'Fair deals on pre-owned phones — buy or sell easily.', icon: 'exchange' },
  { title: 'Mobile Accessories', desc: 'Chargers, cables, power banks, and more.', icon: 'accessories' },
  { title: 'Pick & Drop Service', desc: 'Convenient doorstep pickup and delivery for repairs.', icon: 'delivery' },
  { title: 'Earphones & Speakers', desc: 'Wired and wireless audio accessories in stock.', icon: 'audio' },
  { title: 'Screen Replacement', desc: 'Original-quality displays with warranty support.', icon: 'screen' },
  { title: 'Battery Replacement', desc: 'Genuine batteries for longer-lasting performance.', icon: 'battery' },
  { title: 'Tempered Glass & Covers', desc: 'Protection for every phone model available.', icon: 'cover' },
  { title: 'Software Update & Flashing', desc: 'OS updates, flashing, and software troubleshooting.', icon: 'software' },
];

const offers = [
  { title: 'Festive Offers', desc: 'Special discounts on repairs and accessories during festivals.', badge: 'UP TO 30%', accent: 'cyan' },
  { title: 'Guaranteed Gifts', desc: 'Free gifts with every smartphone purchase above minimum value.', badge: 'FREE', accent: 'green' },
  { title: 'Spin Wheel Gifts', desc: 'Spin and win exciting prizes on select purchases.', badge: 'WIN', accent: 'cyan' },
  { title: 'Discount Deals', desc: 'Limited-time price drops on popular accessories.', badge: '20% OFF', accent: 'green' },
  { title: 'Combo Offers', desc: 'Screen guard + cover + charger bundles at best prices.', badge: 'COMBO', accent: 'cyan' },
];

const features = [
  { title: 'Fast Repair Service', desc: 'Most repairs completed the same day.', icon: 'speed' },
  { title: 'Genuine Spare Parts', desc: 'Only authentic parts used in every repair.', icon: 'parts' },
  { title: 'Affordable Pricing', desc: 'Transparent rates with no hidden charges.', icon: 'price' },
  { title: 'Experienced Technicians', desc: 'Skilled experts for all major brands.', icon: 'tech' },
  { title: 'Pickup & Drop Service', desc: 'We come to you — hassle-free convenience.', icon: 'pickup' },
  { title: 'Trusted by Local Customers', desc: 'Hundreds of happy customers in our community.', icon: 'trust' },
];

const galleryImages = [
  { src: 'images/shop1.jpg', alt: 'My shop' },
  { src: 'images/shop2.jpg', alt: 'Accessories' },
  { src: 'images/shop3.jpg', alt: 'Repair work' },
  { src: 'images/shop4.jpg', alt: 'Customers' },
  { src: 'images/shop5.jpg', alt: 'Inside shop' },
  { src: 'images/shop6.jpg', alt: 'Mobile service' },
];

const reviews = [
  { name: 'Payal Sahu', text: 'Got my phone screen replaced in just 30 min. Great service and fair price. Highly recommended!', stars: 5 },
  { name: 'Priya Patel', text: 'Bought a second-hand iPhone here. Genuine product and helpful staff. Very satisfied with the deal.', stars: 5 },
  { name: 'Nilesh Varma', text: 'Best mobile shop in the area. They fixed my battery issue quickly and the pick-drop service is very convenient.', stars: 5 },
  { name: 'Sneha Gupta', text: 'Friendly team at Vishesh Mobiles. Got tempered glass and cover combo at a great discount.', stars: 4 },
  { name: 'Vikram Singh', text: 'Doctor Gadget saved my phone after water damage. Professional technicians and honest pricing.', stars: 5 },
  { name: 'Anjali Sen', text: 'Excellent festive offers! Purchased accessories and received a free gift. Will visit again.', stars: 5 },
];

const brands = ['Samsung', 'Vivo', 'Oppo', 'Xiaomi', 'Realme', 'Apple', 'OnePlus'];

// ─── SVG Icons ──────────────────────────────────────────────────────────────

const icons = {
  repair: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
  screen: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
  battery: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
  software: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>',
  phone: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
  exchange: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>',
  accessories: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>',
  audio: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>',
  cover: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  delivery: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>',
  speed: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
  parts: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>',
  price: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  tech: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  pickup: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>',
  trust: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
};

function svgIcon(name, className = 'w-6 h-6 text-cyan') {
  const path = icons[name] || icons.repair;
  return `<svg class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24">${path}</svg>`;
}

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    `<svg class="w-4 h-4 ${i < count ? 'star-filled' : 'text-white/20'}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
  ).join('');
}

// ─── Render Functions ───────────────────────────────────────────────────────

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map((s, i) => `
    <div class="service-card reveal rounded-2xl p-6" style="transition-delay: ${i * 50}ms">
      <div class="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4">
        ${svgIcon(s.icon)}
      </div>
      <h3 class="font-semibold mb-2">${s.title}</h3>
      <p class="text-muted text-sm leading-relaxed">${s.desc}</p>
    </div>
  `).join('');
}

function renderOffers() {
  const grid = document.getElementById('offers-grid');
  if (!grid) return;
  grid.innerHTML = offers.map((o, i) => {
    const accentClass = o.accent === 'green' ? 'text-green border-green/30' : 'text-cyan border-cyan/30';
    return `
    <div class="offer-card reveal rounded-2xl p-6 flex flex-col" style="transition-delay: ${i * 80}ms">
      <span class="offer-badge inline-block self-start px-3 py-1 rounded-full text-xs font-bold mb-4">${o.badge}</span>
      <h3 class="text-xl font-bold mb-2">${o.title}</h3>
      <p class="text-muted text-sm flex-grow mb-6">${o.desc}</p>
      <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}" target="_blank" rel="noopener"
         class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border ${accentClass} text-sm font-medium hover:bg-white/5 transition">
        Claim Offer
      </a>
    </div>`;
  }).join('');
}

function renderFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;
  grid.innerHTML = features.map((f, i) => `
    <div class="glass-card reveal rounded-2xl p-6" style="transition-delay: ${i * 60}ms">
      <div class="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-4">
        ${svgIcon(f.icon)}
      </div>
      <h3 class="font-semibold mb-2">${f.title}</h3>
      <p class="text-muted text-sm leading-relaxed">${f.desc}</p>
    </div>
  `).join('');
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item reveal aspect-square ${i === 0 ? 'col-span-2 row-span-2 md:aspect-auto md:min-h-[280px]' : ''}" style="transition-delay: ${i * 60}ms">
      <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover" loading="lazy" />
    </div>
  `).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  grid.innerHTML = reviews.map((r, i) => `
    <div class="review-card reveal rounded-2xl p-6" style="transition-delay: ${i * 70}ms">
      <div class="flex gap-1 mb-4">${renderStars(r.stars)}</div>
      <p class="text-muted text-sm leading-relaxed mb-5">"${r.text}"</p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan/30 to-green/30 flex items-center justify-center font-semibold text-sm">
          ${r.name.charAt(0)}
        </div>
        <span class="font-medium text-sm">${r.name}</span>
      </div>
    </div>
  `).join('');
}

function renderBrands() {
  const track = document.getElementById('brands-track');
  if (!track) return;
  const brandClass = (name) => {
    const map = { Apple: 'brand-apple', Samsung: 'brand-samsung' };
    return map[name] || '';
  };
  const items = brands.map(b => `<span class="brand-item ${brandClass(b)}">${b}</span>`).join('');
  track.innerHTML = items + items;
}

// ─── Navbar & Mobile Menu ───────────────────────────────────────────────────

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu?.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle?.classList.remove('active');
      menu?.classList.add('hidden');
    });
  });
}

// ─── Scroll Reveal ──────────────────────────────────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Hero Animation ─────────────────────────────────────────────────────────

function initHero() {
  requestAnimationFrame(() => {
    document.querySelector('.hero-content')?.classList.add('visible');
    document.querySelector('.hero-visual')?.classList.add('visible');
  });
}

// ─── Active Nav Link ────────────────────────────────────────────────────────

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('text-cyan');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('text-cyan');
    });
  }, { passive: true });
}

// ─── Contact Form ───────────────────────────────────────────────────────────

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (!action || action.includes('YOUR_FORM_ID')) {
      status.textContent = 'Please set your Formspree form ID in index.html';
      status.className = 'text-sm text-center form-error';
      status.classList.remove('hidden');
      return;
    }

    status.textContent = 'Sending...';
    status.className = 'text-sm text-center text-muted';
    status.classList.remove('hidden');

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = 'Thank you! We will contact you soon.';
        status.className = 'text-sm text-center form-success';
        form.reset();
      } else {
        throw new Error('Failed');
      }
    } catch {
      status.textContent = 'Something went wrong. Please try WhatsApp instead.';
      status.className = 'text-sm text-center form-error';
    }
  });
}

// ─── Footer Year ────────────────────────────────────────────────────────────

function initFooter() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ─── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderOffers();
  renderFeatures();
  renderGallery();
  renderReviews();
  renderBrands();
  initNavbar();
  initScrollReveal();
  initHero();
  initActiveNav();
  initContactForm();
  initFooter();

  // Re-observe dynamically added reveal elements
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }, 100);
});
