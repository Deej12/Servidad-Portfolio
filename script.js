const navItems = [
  ['house', 'Home', '#home'],
  ['folders', 'Projects', '#projects'],
  ['sparkle', 'Services', '#services'],
  ['user-circle', 'About', '#about'],
  ['paper-plane-tilt', 'Contact', '#contact'],
];

const tools = [
  ['Git', './Icons/git.png'],
  ['Android Studio', './Icons/androidStudio.png'],
  ['Visual Studio', './Icons/visualStudio.png'],
  ['NetBeans', './Icons/netBeans.png'],
  ['Sublime', './Icons/sublime.png'],
  ['Microsoft 365', './Icons/microsoft.png'],
  ['Figma', './Icons/figma.png'],
  ['Claude', './Icons/claude.png'],
  ['Copilot', './Icons/copilot.png'],
  ['PowerApps', './Icons/powerApps.png'],
  ['Vercel', './Icons/vercel.png'],
  ['Canva', './Icons/canva.png'],
];

const profileImage = './src/assets/profilePic.jpg';
const projectImages = {
  capstone: './src/assets/capstone.png',
  iqviaForms: './src/assets/IqviaForms.png',
  wedding: './src/assets/Wedding.png',
};
const cvFile = './src/assets/Servidad%20-%20CV.pdf';

const app = document.querySelector('#app');
const navMarkup = navItems
  .map(
    ([icon, label, href]) =>
      `<a class="nav-link ${label === 'Home' ? 'active' : ''}" href="${href}" data-section="${href.slice(1)}"><i class="ph ph-${icon}"></i><span>${label}</span></a>`
  )
  .join('');

const mobileNavMarkup = navItems
  .map(
    ([icon, label, href]) =>
      `<a class="nav-link ${label === 'Home' ? 'active' : ''}" href="${href}" data-section="${href.slice(1)}"><i class="ph ph-${icon}"></i><span>${label}</span></a>`
  )
  .join('');

app.innerHTML = `
  <div class="site-shell">
    <aside class="sidebar">
      <div class="brand"><span class="brand-mark">DS</span><span>Servidad<span class="brand-dot">.</span></span></div>
      <div class="profile">
        <div class="avatar"><img src="${profileImage}" alt="Daniel Joshua Servidad" /></div>
        <h2>Daniel Joshua<br />Servidad</h2>
        <p>Web Developer · IT Support</p>
        <div class="socials">
          <a href="mailto:dj.m.servidad@gmail.com" aria-label="Email Daniel"><i class="ph ph-envelope-simple"></i></a>
          <a href="https://linkedin.com/in/daniel-joshua-servidad-2ba8763a6" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><i class="ph ph-linkedin-logo"></i></a>
          <a href="#contact" aria-label="Contact Daniel"><i class="ph ph-chat-circle-dots"></i></a>
          <button class="theme-toggle social-theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false"><i class="ph ph-moon"></i></button>
        </div>
      </div>
      <nav class="nav-links desktop-nav" aria-label="Primary navigation">${navMarkup}</nav>
      <div class="sidebar-footer"><span class="status-dot"></span> Available for opportunities</div>
    </aside>

    <main>
      <header class="mobile-header"><div class="brand"><span class="brand-mark">DS</span><span>Servidad<span class="brand-dot">.</span></span></div><div class="mobile-header-actions"><button class="theme-toggle mobile-theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false"><i class="ph ph-moon"></i></button><button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><i class="ph ph-list"></i></button></div></header>
      <nav class="nav-links mobile-nav" aria-label="Mobile navigation">${mobileNavMarkup}</nav>
      <section class="hero section" id="home">
        <div class="eyebrow"><span class="eyebrow-line"></span> Fresh graduate · BS Information Technology</div>
        <h1>Building useful digital<br /><span>experiences that work.</span></h1>
        <p class="hero-copy">Hi, I’m Daniel — a web developer and IT support professional who enjoys turning ideas, workflows, and problems into clear, reliable solutions.</p>
        <div class="hero-actions"><a class="button button-primary" href="#projects">Explore my work <i class="ph ph-arrow-up-right"></i></a><a class="button button-outline" href="${cvFile}" download="Daniel-Joshua-Servidad-CV.pdf"><i class="ph ph-download-simple"></i> Download my CV</a><a class="text-link" href="#contact">Let’s connect <i class="ph ph-arrow-right"></i></a></div>
        <div class="hero-note"><i class="ph ph-map-pin"></i> Imus, Cavite, Philippines <span></span> Open to entry-level IT roles</div>
      </section>

      <section class="tool-strip" aria-label="Tools I work with">
        <div class="tool-title"><span>Daily drivers</span><strong>Tools I work with</strong></div>
        <div class="marquee"><div class="marquee-track">${[...tools, ...tools].map(([title, icon]) => `<span><img src="${icon}" alt="${title}" title="${title}" />${title}</span>`).join('')}</div></div>
      </section>

      <section class="section content-section" id="projects">
        <div class="section-heading"><div><div class="eyebrow">Selected work</div><h2>Projects with purpose.</h2></div><p>Thoughtful systems designed to improve everyday workflows.</p></div>
        <div class="project-grid">
          <article class="project-card featured"><div class="card-top"><span class="tag">Capstone research project</span><i class="ph ph-arrow-up-right"></i></div><button class="project-visual project-image-button" type="button" data-image="${projectImages.capstone}" data-title="Queue-Our-Code"><img src="${projectImages.capstone}" alt="Queue-Our-Code QR queueing system project preview" /><span class="image-hint"><i class="ph ph-arrows-out"></i> View project</span></button><h3>Queue-Our-Code: A QR Code-Driven Queueing System App for Star Parks Corporation</h3><p>A QR code-driven queueing system designed to help Star Parks Corporation manage visitor flow more efficiently. Guests can scan a code, join a queue digitally, and explore the amusement park instead of spending their visit waiting in lines.</p><div class="tech-list"><span>QR Code</span><span>Queue Management</span><span>Web App</span></div></article>
          <article class="project-card"><div class="card-top"><span class="tag">Work experience</span><i class="ph ph-arrow-up-right"></i></div><button class="project-visual project-image-button" type="button" data-image="${projectImages.iqviaForms}" data-title="IQVIA Hospital Information System & User-Deactivation Tracker"><img src="${projectImages.iqviaForms}" alt="IQVIA Hospital Information System and forms project preview" /><span class="image-hint"><i class="ph ph-arrows-out"></i> View project</span></button><h3>IQVIA Hospital Information System & User-Deactivation Tracker (UDT)</h3><p>Supported hospital information system workflows through IQVIA forms and contributed to the User-Deactivation Tracker. My role focused on the outsource portion of the UDT, helping organize and support the process for deactivating user access.</p><div class="tech-list"><span>IQVIA Forms</span><span>User Deactivation</span><span>Outsource</span></div></article>
          <article class="project-card"><div class="card-top"><span class="tag">Client project</span><i class="ph ph-arrow-up-right"></i></div><button class="project-visual project-image-button" type="button" data-image="${projectImages.wedding}" data-title="Annie & Wendel - Interactive Wedding Website"><img src="${projectImages.wedding}" alt="Annie and Wendel interactive wedding website preview" /><span class="image-hint"><i class="ph ph-arrows-out"></i> View project</span></button><h3>Annie & Wendel — Interactive Wedding Website</h3><p>Created a personalized wedding website for Annie and Wendel, collaborating closely with the couple to understand their preferred look, feel, and details. I translated their ideas into an interactive experience they loved.</p><div class="tech-list"><span>Web Design</span><span>Client Collaboration</span><span>Responsive UI</span></div></article>
        </div>
      </section>

      <section class="section split-section" id="services">
        <div><div class="eyebrow">What I do</div><h2>Reliable support.<br /><span>Practical development.</span></h2></div>
        <div class="service-list"><div><i class="ph ph-code"></i><div><h3>Web development</h3><p>Responsive websites and interfaces using modern front-end tools.</p></div></div><div><i class="ph ph-wrench"></i><div><h3>IT support & troubleshooting</h3><p>Patient, methodical support for systems, connectivity, and user needs.</p></div></div><div><i class="ph ph-database"></i><div><h3>Data & workflow solutions</h3><p>Organized tools that help teams simplify repetitive processes.</p></div></div></div>
      </section>

      <section class="section about-section" id="about"><div class="about-card"><div class="eyebrow">A little about me</div><h2>Curious by nature.<br />Dependable by choice.</h2><p>I’m a Bachelor of Science in Information Technology graduate from De La Salle University–Dasmariñas, where I made the Dean’s List throughout my degree and served as class president.</p><p>From building systems to supporting people, I bring a calm, collaborative approach to technical work. I’m always looking for the next problem worth solving.</p><div class="about-stats"><div><strong>95–97</strong><span>GPA equivalent</span></div><div><strong>486</strong><span>Hours of OJT</span></div><div><strong>2+</strong><span>Years learning by doing</span></div></div></div></section>

      <section class="section contact-section" id="contact"><div class="contact-card"><div><div class="eyebrow">Have a role or project in mind?</div><h2>Let’s make something<br /><span>work better.</span></h2></div><a class="button button-light" href="mailto:dj.m.servidad@gmail.com">Get in touch <i class="ph ph-arrow-up-right"></i></a></div></section>
      <div class="image-lightbox" role="dialog" aria-modal="true" aria-label="Project image preview" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Close image preview"><i class="ph ph-x"></i></button><div class="lightbox-content"><img src="" alt="" /><p></p></div></div>
      <footer><span>© 2026 Daniel Joshua M. Servidad</span><span>Designed & built with care</span></footer>
    </main>
  </div>
`;

const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const themeToggles = document.querySelectorAll('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-theme', isDark);
  localStorage.setItem('portfolio-theme', theme);
  themeToggles.forEach((toggle) => {
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    const icon = toggle.querySelector('i');
    icon.className = isDark ? 'ph ph-sun' : 'ph ph-moon';
    const label = toggle.querySelector('span');
    if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
  });
};

const setTheme = (theme, animate = true) => {
  if (!animate || !document.startViewTransition) {
    applyTheme(theme);
    return;
  }

  document.startViewTransition(() => applyTheme(theme));
};

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'), false);
themeToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    setTheme(document.body.classList.contains('dark-theme') ? 'light' : 'dark');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach((section) => observer.observe(section));

document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
  const menuButton = event.currentTarget;
  const sidebar = document.querySelector('.sidebar');
  const isOpen = sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuButton.querySelector('i').className = isOpen ? 'ph ph-x' : 'ph ph-list';
});

links.forEach((link) =>
  link.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
    document.querySelector('.menu-toggle')?.setAttribute('aria-label', 'Open menu');
    document.querySelector('.menu-toggle i').className = 'ph ph-list';
  })
);

const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('p');
const closeLightbox = () => {
  lightbox.classList.remove('is-visible');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
};

document.querySelectorAll('.project-image-button').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.querySelector('img').alt;
    lightboxTitle.textContent = button.dataset.title;
    lightbox.classList.add('is-visible');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightbox.querySelector('.lightbox-close').focus();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-visible')) closeLightbox();
});
