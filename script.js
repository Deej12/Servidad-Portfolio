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

const app = document.querySelector('#app');

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
          <a href="https://linkedin.com/in/daniel-joshua-servidad-2ba8763a" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><i class="ph ph-linkedin-logo"></i></a>
          <a href="#contact" aria-label="Contact Daniel"><i class="ph ph-chat-circle-dots"></i></a>
        </div>
      </div>
      <nav aria-label="Primary navigation">
        ${navItems
          .map(
            ([icon, label, href]) =>
              `<a class="nav-link ${label === 'Home' ? 'active' : ''}" href="${href}" data-section="${href.slice(1)}"><i class="ph ph-${icon}"></i><span>${label}</span></a>`
          )
          .join('')}
      </nav>
      <div class="sidebar-footer"><span class="status-dot"></span> Available for opportunities</div>
    </aside>

    <main>
      <header class="mobile-header"><div class="brand"><span class="brand-mark">DS</span><span>Servidad<span class="brand-dot">.</span></span></div><button class="menu-toggle" aria-label="Open menu"><i class="ph ph-list"></i></button></header>
      <section class="hero section" id="home">
        <div class="eyebrow"><span class="eyebrow-line"></span> Fresh graduate · BS Information Technology</div>
        <h1>Building useful digital<br /><span>experiences that work.</span></h1>
        <p class="hero-copy">Hi, I’m Daniel — a web developer and IT support professional who enjoys turning ideas, workflows, and problems into clear, reliable solutions.</p>
        <div class="hero-actions"><a class="button button-primary" href="#projects">Explore my work <i class="ph ph-arrow-up-right"></i></a><a class="text-link" href="#contact">Let’s connect <i class="ph ph-arrow-right"></i></a></div>
        <div class="hero-note"><i class="ph ph-map-pin"></i> Imus, Cavite, Philippines <span></span> Open to entry-level IT roles</div>
      </section>

      <section class="tool-strip" aria-label="Tools I work with">
        <div class="tool-title"><span>Daily drivers</span><strong>Tools I work with</strong></div>
        <div class="marquee"><div class="marquee-track">${[...tools, ...tools].map(([title, icon]) => `<span><img src="${icon}" alt="${title}" title="${title}" />${title}</span>`).join('')}</div></div>
      </section>

      <section class="section content-section" id="projects">
        <div class="section-heading"><div><div class="eyebrow">Selected work</div><h2>Projects with purpose.</h2></div><p>Thoughtful systems designed to improve everyday workflows.</p></div>
        <div class="project-grid">
          <article class="project-card featured"><div class="card-top"><span class="tag">Capstone research project</span><i class="ph ph-arrow-up-right"></i></div><div class="project-visual queue-visual"><div class="queue-window"><div class="window-dots">● ● ●</div><div class="queue-title">QUEUE-<span>OUR</span>-CODE</div><div class="queue-sub">Smart queueing for better customer flow</div><div class="queue-steps"><b>01</b><b>02</b><b>03</b></div></div></div><h3>Queue-Our-Code</h3><p>A QR code-based queueing system designed for Star Parks Corporation to reduce waiting time and make customer flow more efficient.</p><div class="tech-list"><span>QR Code</span><span>Web Development</span><span>UX Design</span></div></article>
          <article class="project-card"><div class="card-top"><span class="tag">Work experience</span><i class="ph ph-arrow-up-right"></i></div><div class="project-visual forms-visual"><i class="ph ph-notepad"></i><i class="ph ph-check-square"></i><i class="ph ph-file-text"></i></div><h3>Digital forms & workflow tools</h3><p>Supported IQVIA forms and helped develop a User Deactivation Tracker using Microsoft PowerApps at Makati Medical Center.</p><div class="tech-list"><span>PowerApps</span><span>IQVIA</span><span>UAT</span></div></article>
          <article class="project-card"><div class="card-top"><span class="tag">IT support</span><i class="ph ph-arrow-up-right"></i></div><div class="project-visual support-visual"><i class="ph ph-wifi-high"></i><span>System troubleshooting</span><i class="ph ph-database"></i></div><h3>Technical support operations</h3><p>Resolved connectivity issues, assisted with database debugging, and helped teams keep their daily operations moving.</p><div class="tech-list"><span>Networking</span><span>Databases</span><span>Support</span></div></article>
        </div>
      </section>

      <section class="section split-section" id="services">
        <div><div class="eyebrow">What I do</div><h2>Reliable support.<br /><span>Practical development.</span></h2></div>
        <div class="service-list"><div><i class="ph ph-code"></i><div><h3>Web development</h3><p>Responsive websites and interfaces using modern front-end tools.</p></div></div><div><i class="ph ph-wrench"></i><div><h3>IT support & troubleshooting</h3><p>Patient, methodical support for systems, connectivity, and user needs.</p></div></div><div><i class="ph ph-database"></i><div><h3>Data & workflow solutions</h3><p>Organized tools that help teams simplify repetitive processes.</p></div></div></div>
      </section>

      <section class="section about-section" id="about"><div class="about-card"><div class="eyebrow">A little about me</div><h2>Curious by nature.<br />Dependable by choice.</h2><p>I’m a Bachelor of Science in Information Technology graduate from De La Salle University–Dasmariñas, where I made the Dean’s List throughout my degree and served as class president.</p><p>From building systems to supporting people, I bring a calm, collaborative approach to technical work. I’m always looking for the next problem worth solving.</p><div class="about-stats"><div><strong>95–97</strong><span>GPA equivalent</span></div><div><strong>486</strong><span>Hours of OJT</span></div><div><strong>2+</strong><span>Years learning by doing</span></div></div></div></section>

      <section class="section contact-section" id="contact"><div class="contact-card"><div><div class="eyebrow">Have a role or project in mind?</div><h2>Let’s make something<br /><span>work better.</span></h2></div><a class="button button-light" href="mailto:dj.m.servidad@gmail.com">Get in touch <i class="ph ph-arrow-up-right"></i></a></div></section>
      <footer><span>© 2026 Daniel Joshua M. Servidad</span><span>Designed & built with care</span></footer>
    </main>
  </div>
`;

const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
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

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});

links.forEach((link) =>
  link.addEventListener('click', () => document.querySelector('.sidebar').classList.remove('open'))
);
