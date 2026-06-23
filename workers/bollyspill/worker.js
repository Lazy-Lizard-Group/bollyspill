const FALLBACK_ARTICLES = [
  {
    slug: "salman-khan-next-project-2026",
    title: "Salman Khan's Next Project REVEALED — And It's NOT What You Expected",
    category: "Exclusive",
    date: "June 23, 2026",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
    summary: "The superstar has been keeping secrets. Our sources have finally spilled the chai on Bhai's next big move — and the internet is NOT ready.",
    content: `<p>The Bollywood industry is buzzing with excitement as insider sources close to Salman Khan have revealed details about his next big project. And trust us — nobody saw this coming.</p>
    <p>According to our highly placed sources, Bhai is set to collaborate with an unexpected director from South India for a massive pan-India production that promises to break every box office record in history.</p>
    <p>"The script is unlike anything Salman has done before," our source tells BollySpill exclusively. "It's dark, it's gritty, and it will shock audiences who only know him from his Dabangg days."</p>
    <p>The project is reportedly budgeted at ₹400 crore and will feature a stunning ensemble cast that includes several A-list actresses and international stars.</p>
    <p>Stay tuned to BollySpill for more tea as it brews! 🍵</p>`
  },
  {
    slug: "deepika-ranveer-vacation-drama",
    title: "Deepika & Ranveer's Vacation Turns into DRAMA — Insiders Spill Everything",
    category: "Relationships",
    date: "June 22, 2026",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80",
    summary: "What was supposed to be a romantic Maldives getaway for Bollywood's golden couple turned into an unexpected saga.",
    content: `<p>Deepika Padukone and Ranveer Singh's much-talked-about vacation in the Maldives didn't go exactly as planned, and BollySpill has the full scoop straight from those who were there.</p>
    <p>The couple, who recently celebrated their anniversary, checked into a luxury resort — but sources say the trip was far from peaceful. "There were some heated discussions about their upcoming projects and career choices," a resort staffer revealed.</p>
    <p>Despite the reported tension, the couple was later spotted laughing and enjoying sunset dinners, suggesting whatever drama unfolded was quickly resolved.</p>
    <p>Our fashion experts also noticed Deepika carrying a brand new Hermès Birkin in a rare colorway that's reportedly on a three-year waiting list.</p>`
  },
  {
    slug: "shahrukh-khan-birthday-plans-2026",
    title: "Shah Rukh Khan's SECRET Birthday Plans — He's Going Where?!",
    category: "Celebrity",
    date: "June 21, 2026",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80",
    summary: "King Khan is planning something massive for his upcoming birthday, and the details are nothing short of royal.",
    content: `<p>Shah Rukh Khan is known for doing everything in grand style, and his upcoming birthday plans are no exception. BollySpill has exclusively learned where the King of Bollywood will be celebrating.</p>
    <p>Sources close to the Khan family reveal that SRK is planning a private celebration in Vienna — a city that holds special meaning for the superstar, having shot several iconic scenes there over his career.</p>
    <p>"He wants something intimate this year. Just family and his closest friends," our source says. "No industry parties, no press — just pure, private joy."</p>
    <p>The guest list reportedly includes his three children, wife Gauri, and a handful of his most trusted industry friends. Interestingly, some big Bollywood names who expected invitations have been left off the list.</p>`
  },
  {
    slug: "karan-johar-new-show-drama",
    title: "Karan Johar's New Chat Show Drama: A-Listers REFUSING to Appear?",
    category: "Industry",
    date: "June 20, 2026",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    summary: "Koffee With Karan has always sparked controversy, but the new season is facing unprecedented pushback from top stars.",
    content: `<p>Karan Johar's iconic chat show has always been the most talked-about programme in Bollywood, but BollySpill has learned that the upcoming season is facing serious casting challenges.</p>
    <p>Multiple A-list stars have reportedly declined invitations to appear on the show, citing concerns about how previous appearances affected their public image.</p>
    <p>"Some of the biggest names just aren't interested in the format anymore," a production insider told us. "They feel the show has become more about controversy than genuine conversation."</p>
    <p>KJo is reportedly scrambling to fill the couch with fresh faces, including several Gen-Z stars who have risen to prominence through social media and OTT platforms.</p>`
  },
  {
    slug: "priyanka-chopra-bollywood-return",
    title: "Priyanka Chopra's Bollywood COMEBACK — The Film That's Bringing Her Back",
    category: "Exclusive",
    date: "June 19, 2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    summary: "After years in Hollywood, desi girl is reportedly in advanced talks for a Bollywood return that will shake the entire industry.",
    content: `<p>The news every Bollywood fan has been waiting for: Priyanka Chopra Jonas is reportedly in serious talks to return to Hindi cinema in a role that promises to be the most ambitious of her career.</p>
    <p>BollySpill sources reveal that PeeCee has been in discussions with one of Bollywood's top directors for a historical epic that would place her at the center of a story spanning three generations of an Indian family.</p>
    <p>"The script blew her away," a source close to the production told us. "She said it was the first time in years that she'd read something that made her want to come home."</p>
    <p>Nick Jonas has reportedly been very supportive of the potential return. The project's budget would make it one of the most expensive Indian films ever made.</p>`
  },
  {
    slug: "bollywood-nepotism-debate-2026",
    title: "The Nepotism Debate is BACK and It's More Brutal Than Ever",
    category: "Drama",
    date: "June 18, 2026",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80",
    summary: "With several star kids launching this year, the conversation around nepotism in Bollywood has reignited with fresh fury.",
    content: `<p>The nepotism debate that has periodically rocked Bollywood is back — and this time, it's hitting differently. With four major star kid launches announced for 2026, social media has erupted.</p>
    <p>BollySpill spoke anonymously to several outsiders who've struggled to break into the industry. "We spend years struggling, going to casting calls, doing background work," one aspiring actor told us. "And then someone's kid walks into a film with a ₹100 crore budget. How is that fair?"</p>
    <p>Industry veterans have pushed back, arguing that star kids face enormous pressure and public scrutiny that outsiders don't have to deal with. "Nobody is born with talent. The audience will decide," one veteran director told us.</p>`
  }
];

const CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --pink: #e8007a;
    --pink-light: #ff4da6;
    --pink-pale: #ffe0f0;
    --orange: #f97316;
    --orange-light: #ffedd5;
    --cream: #fdf8f3;
    --cream2: #f7f0e8;
    --dark: #1a0a2e;
    --dark2: #2d1a4a;
    --text: #1a0a2e;
    --muted: #6b5c7a;
    --border: #edddd4;
    --white: #ffffff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    background: var(--cream);
    color: var(--text);
    line-height: 1.6;
    min-height: 100dvh;
  }

  header {
    background: var(--white);
    border-bottom: 3px solid var(--pink);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 20px rgba(232,0,122,0.12);
  }

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 28px;
    max-width: 1240px;
    margin: 0 auto;
  }

  .logo { text-decoration: none; display: flex; flex-direction: column; }

  .logo-text {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 1;
    color: var(--dark);
    font-family: Georgia, serif;
  }

  .logo-text span { color: var(--pink); }

  .logo-sub {
    font-size: 0.6rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--orange);
    font-weight: 700;
    margin-top: 2px;
  }

  .header-tiktok {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--dark);
    color: #fff;
    text-decoration: none;
    padding: 8px 18px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: background 0.2s;
  }

  .header-tiktok:hover { background: var(--pink); }

  .tiktok-icon {
    width: 18px;
    height: 18px;
    background: linear-gradient(45deg, #ff2d78, #00f2ea);
    border-radius: 4px;
    flex-shrink: 0;
  }

  nav {
    background: var(--cream2);
    border-top: 1px solid var(--border);
    padding: 0 28px;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    gap: 0;
    overflow-x: auto;
  }

  nav a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 12px 16px;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    display: block;
  }

  nav a:hover { color: var(--pink); }
  nav a.active { color: var(--pink); border-bottom-color: var(--pink); }

  .ticker {
    background: linear-gradient(135deg, var(--pink) 0%, var(--dark2) 100%);
    padding: 7px 0;
    overflow: hidden;
  }

  .ticker-inner {
    display: inline-block;
    animation: scroll-ticker 35s linear infinite;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    white-space: nowrap;
  }

  @keyframes scroll-ticker {
    0% { transform: translateX(100vw); }
    100% { transform: translateX(-100%); }
  }

  .hero {
    max-width: 1240px;
    margin: 32px auto;
    padding: 0 28px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 28px;
  }

  .hero-featured {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    display: block;
    box-shadow: 0 8px 40px rgba(26,10,46,0.15);
  }

  .hero-featured img {
    width: 100%;
    height: 460px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  .hero-featured:hover img { transform: scale(1.04); }

  .hero-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent 10%, rgba(26,10,46,0.97));
    padding: 60px 28px 28px;
  }

  .pill {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .pill-pink { background: var(--pink); color: #fff; }
  .pill-orange { background: var(--orange); color: #fff; }
  .pill-outline { background: transparent; border: 2px solid var(--pink); color: var(--pink); }

  .hero-title {
    font-size: 1.75rem;
    font-weight: 900;
    color: #fff;
    line-height: 1.2;
    font-family: Georgia, serif;
    margin-bottom: 10px;
  }

  .hero-summary {
    color: rgba(255,255,255,0.75);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .hero-side {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .side-item {
    display: flex;
    gap: 14px;
    text-decoration: none;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
    transition: transform 0.2s;
  }

  .side-item:first-child { padding-top: 0; }
  .side-item:last-child { border-bottom: none; }
  .side-item:hover { transform: translateX(4px); }

  .side-item img {
    width: 100px;
    height: 72px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .side-item-title {
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.3;
    font-family: Georgia, serif;
    margin-top: 6px;
    transition: color 0.2s;
  }

  .side-item:hover .side-item-title { color: var(--pink); }

  .side-item-meta {
    color: var(--muted);
    font-size: 0.7rem;
    margin-top: 6px;
  }

  .section {
    max-width: 1240px;
    margin: 0 auto 48px;
    padding: 0 28px;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 3px solid var(--pink);
  }

  .section-header h2 {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--dark);
  }

  .section-header-dot {
    width: 6px;
    height: 6px;
    background: var(--pink);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    display: block;
    border: 1px solid var(--border);
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .card:hover {
    box-shadow: 0 12px 40px rgba(232,0,122,0.15);
    transform: translateY(-4px);
  }

  .card-img-wrap { position: relative; overflow: hidden; }

  .card img {
    width: 100%;
    height: 195px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .card:hover img { transform: scale(1.06); }

  .card-body { padding: 18px; }

  .card-title {
    font-size: 1rem;
    font-weight: 800;
    font-family: Georgia, serif;
    color: var(--text);
    line-height: 1.3;
    margin: 10px 0 8px;
    transition: color 0.2s;
  }

  .card:hover .card-title { color: var(--pink); }

  .card-summary {
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.55;
    margin-bottom: 14px;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid var(--border);
    font-size: 0.7rem;
    color: var(--muted);
  }

  .read-more {
    color: var(--pink);
    font-weight: 700;
    font-size: 0.75rem;
  }

  .promo-banner {
    max-width: 1240px;
    margin: 0 auto 40px;
    padding: 0 28px;
  }

  .promo-inner {
    background: linear-gradient(135deg, var(--dark) 0%, var(--dark2) 40%, #4a0a5e 100%);
    border-radius: 16px;
    padding: 32px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .promo-text h3 {
    font-size: 1.4rem;
    font-weight: 900;
    color: #fff;
    font-family: Georgia, serif;
    margin-bottom: 6px;
  }

  .promo-text p { color: rgba(255,255,255,0.65); font-size: 0.9rem; }
  .promo-text p strong { color: var(--orange); }

  .promo-btn {
    background: var(--pink);
    color: #fff;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 100px;
    font-weight: 800;
    font-size: 0.85rem;
    white-space: nowrap;
    transition: background 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .promo-btn:hover { background: var(--orange); transform: scale(1.04); }

  .article-page {
    max-width: 820px;
    margin: 0 auto;
    padding: 40px 28px 80px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    font-size: 0.75rem;
    color: var(--muted);
  }

  .breadcrumb a { color: var(--pink); text-decoration: none; font-weight: 600; }

  .article-title {
    font-size: 2.2rem;
    font-weight: 900;
    font-family: Georgia, serif;
    color: var(--dark);
    line-height: 1.2;
    margin: 16px 0 14px;
  }

  .article-summary-block {
    background: var(--pink-pale);
    border-left: 4px solid var(--pink);
    padding: 14px 18px;
    border-radius: 0 8px 8px 0;
    font-size: 1rem;
    color: var(--dark2);
    font-style: italic;
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .article-meta-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
    font-size: 0.78rem;
    color: var(--muted);
    padding-bottom: 20px;
    border-bottom: 2px solid var(--border);
  }

  .article-img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 32px;
    display: block;
  }

  .article-content p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: var(--text);
    margin-bottom: 22px;
  }

  .share-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 40px;
    padding-top: 24px;
    border-top: 2px solid var(--border);
    flex-wrap: wrap;
  }

  .share-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
  }

  .share-btn {
    padding: 9px 20px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
  }

  .share-btn:hover { opacity: 0.85; transform: scale(1.04); }
  .share-btn-tiktok { background: var(--dark); color: #fff; }
  .share-btn-twitter { background: #1d9bf0; color: #fff; }
  .share-btn-whatsapp { background: #25d366; color: #fff; }

  footer {
    background: var(--dark);
    padding: 48px 28px 28px;
  }

  .footer-inner {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 900;
    font-family: Georgia, serif;
    color: var(--white);
    letter-spacing: -1px;
  }

  .footer-logo span { color: var(--pink); }

  .footer-desc {
    color: rgba(255,255,255,0.5);
    font-size: 0.85rem;
    max-width: 480px;
    line-height: 1.6;
  }

  .footer-tiktok {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--pink);
    color: #fff;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    transition: background 0.2s;
  }

  .footer-tiktok:hover { background: var(--orange); }

  .footer-links {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links a {
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    font-size: 0.75rem;
    letter-spacing: 1px;
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--pink); }

  .footer-copy {
    color: rgba(255,255,255,0.2);
    font-size: 0.7rem;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.08);
    width: 100%;
    text-align: center;
  }

  @media (max-width: 900px) {
    .hero { grid-template-columns: 1fr; }
    .hero-side { display: none; }
    .articles-grid { grid-template-columns: 1fr 1fr; }
    .hero-featured img { height: 280px; }
    .article-title { font-size: 1.6rem; }
    .article-img { height: 240px; }
    .promo-inner { flex-direction: column; text-align: center; }
  }

  @media (max-width: 600px) {
    .articles-grid { grid-template-columns: 1fr; }
    .header-top { padding: 12px 16px; }
    nav { padding: 0 16px; }
    .hero, .section, .promo-banner { padding: 0 16px; }
    .logo-text { font-size: 1.5rem; }
    .hero-title { font-size: 1.3rem; }
  }
`;

function shell(title, body, desc = "Your daily dose of Bollywood gossip, drama, and spicy chai.") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${title} — BollySpill</title>
  <meta name="description" content="${desc}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:site_name" content="BollySpill">
  <meta name="twitter:card" content="summary_large_image">
  <style>${CSS}</style>
</head>
<body>
<header>
  <div class="header-top">
    <a href="/" class="logo">
      <div class="logo-text">Bolly<span>Spill</span></div>
      <div class="logo-sub">Daily Bollywood Tea ☕</div>
    </a>
    <a href="https://tiktok.com/@bollyspill" target="_blank" class="header-tiktok">
      <div class="tiktok-icon"></div>
      Follow @bollyspill
    </a>
  </div>
  <div style="max-width:1240px;margin:0 auto;">
    <nav>
      <a href="/" class="active">Home</a>
      <a href="/category/exclusive">Exclusive</a>
      <a href="/category/relationships">Relationships</a>
      <a href="/category/celebrity">Celebrity</a>
      <a href="/category/drama">Drama</a>
      <a href="/category/industry">Industry</a>
      <a href="/category/fashion">Fashion</a>
    </nav>
  </div>
</header>
<div class="ticker">
  <div style="overflow:hidden">
    <span class="ticker-inner">🔥 BREAKING: Major Bollywood announcement incoming this week &nbsp;&nbsp;•&nbsp;&nbsp; 👀 Shah Rukh Khan spotted at mystery location — fans go wild &nbsp;&nbsp;•&nbsp;&nbsp; 💔 Top star couple spotted NOT together at awards night &nbsp;&nbsp;•&nbsp;&nbsp; 🎬 Surprise casting confirmed for biggest sequel of the year &nbsp;&nbsp;•&nbsp;&nbsp; ✨ Follow @bollyspill on TikTok for daily gossip drops &nbsp;&nbsp;•&nbsp;&nbsp;</span>
  </div>
</div>
${body}
<footer>
  <div class="footer-inner">
    <div class="footer-logo">Bolly<span>Spill</span></div>
    <p class="footer-desc">Your number one source for Bollywood gossip, celebrity drama, relationships, and industry tea. Served fresh daily.</p>
    <a href="https://tiktok.com/@bollyspill" target="_blank" class="footer-tiktok">Follow us on TikTok</a>
    <div class="footer-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
    <div class="footer-copy">© 2026 BollySpill. Entertainment purposes only. All rights reserved.</div>
  </div>
</footer>
</body>
</html>`;
}

function homePage(articles = FALLBACK_ARTICLES) {
  const [hero, ...rest] = articles;

  const heroHTML = `
<div class="hero">
  <a href="/article/${hero.slug}" class="hero-featured">
    <img src="${hero.image}" alt="${hero.title}" loading="eager">
    <div class="hero-overlay">
      <div><span class="pill pill-pink">${hero.category}</span></div>
      <h1 class="hero-title">${hero.title}</h1>
      <p class="hero-summary">${hero.summary}</p>
    </div>
  </a>
  <div class="hero-side">
    ${rest.slice(0,4).map(a => `
    <a href="/article/${a.slug}" class="side-item">
      <img src="${a.image}" alt="${a.title}" loading="lazy">
      <div class="side-item-content">
        <span class="pill pill-outline" style="font-size:0.55rem;padding:2px 8px">${a.category}</span>
        <div class="side-item-title">${a.title}</div>
        <div class="side-item-meta">${a.date}</div>
      </div>
    </a>`).join('')}
  </div>
</div>`;

  const gridHTML = `
<div class="section">
  <div class="section-header">
    <div class="section-header-dot"></div>
    <h2>Latest Gossip</h2>
  </div>
  <div class="articles-grid">
    ${rest.slice(0).map(a => `
    <a href="/article/${a.slug}" class="card">
      <div class="card-img-wrap">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
        <span class="pill pill-pink" style="position:absolute;top:12px;left:12px">${a.category}</span>
      </div>
      <div class="card-body">
        <h2 class="card-title">${a.title}</h2>
        <p class="card-summary">${a.summary}</p>
        <div class="card-meta">
          <span>${a.date}</span>
          <span class="read-more">Read more →</span>
        </div>
      </div>
    </a>`).join('')}
  </div>
</div>`;

  const promoHTML = `
<div class="promo-banner">
  <div class="promo-inner">
    <div class="promo-text">
      <h3>🍵 Don't miss a single spill</h3>
      <p>Daily Bollywood gossip videos on TikTok. <strong>@bollyspill</strong> — 5 videos a week, all the tea you need.</p>
    </div>
    <a href="https://tiktok.com/@bollyspill" target="_blank" class="promo-btn">Follow on TikTok →</a>
  </div>
</div>`;

  return shell('Bollywood Gossip & Entertainment News', heroHTML + gridHTML + promoHTML);
}

function articlePage(slug, articles = FALLBACK_ARTICLES) {
  const a = articles.find(x => x.slug === slug);
  if (!a) return null;
  const url = `https://bollyspill.com/article/${slug}`;

  const body = `
<div class="article-page">
  <div class="breadcrumb">
    <a href="/">BollySpill</a>
    <span>›</span>
    <span>${a.category}</span>
    <span>›</span>
    <span style="color:var(--text)">${a.title.substring(0,40)}...</span>
  </div>
  <span class="pill pill-pink">${a.category}</span>
  <h1 class="article-title">${a.title}</h1>
  <div class="article-summary-block">${a.summary}</div>
  <div class="article-meta-bar">
    <span>By BollySpill Team</span>
    <span>•</span>
    <span>${a.date}</span>
    <span>•</span>
    <span>3 min read</span>
  </div>
  <img src="${a.image}" alt="${a.title}" class="article-img">
  <div class="article-content">${a.content}</div>
  <div class="share-bar">
    <span class="share-label">Share the tea:</span>
    <a href="https://tiktok.com/@bollyspill" target="_blank" class="share-btn share-btn-tiktok">TikTok</a>
    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(url)}" target="_blank" class="share-btn share-btn-twitter">Twitter / X</a>
    <a href="https://wa.me/?text=${encodeURIComponent(a.title + ' ' + url)}" target="_blank" class="share-btn share-btn-whatsapp">WhatsApp</a>
  </div>
</div>`;

  return shell(a.title, body, a.summary);
}

export default {
  async fetch(request, env) {
    let articles = FALLBACK_ARTICLES;
    try {
      if (env && env.ARTICLES_KV) {
        const kvData = await env.ARTICLES_KV.get('articles-json');
        if (kvData) {
          const parsed = JSON.parse(kvData);
          if (Array.isArray(parsed) && parsed.length > 0) articles = parsed;
        }
      }
    } catch(e) {}

    const { pathname } = new URL(request.url);
    let html = '';
    let status = 200;

    if (pathname === '/' || pathname === '') {
      html = homePage(articles);
    } else if (pathname.startsWith('/article/')) {
      const slug = pathname.replace('/article/', '').replace(/\/$/, '');
      html = articlePage(slug, articles);
      if (!html) {
        html = shell('Not Found', '<div style="text-align:center;padding:80px 24px"><h1 style="color:var(--pink);font-family:Georgia,serif">Article not found</h1><p style="margin:16px 0;color:var(--muted)">That story may have been updated or removed.</p><a href="/" style="color:var(--pink);font-weight:700">← Back to BollySpill</a></div>');
        status = 404;
      }
    } else {
      html = shell('Not Found', '<div style="text-align:center;padding:80px 24px"><h1 style="color:var(--pink);font-family:Georgia,serif">Page not found</h1><a href="/" style="color:var(--pink);font-weight:700">← Back to BollySpill</a></div>');
      status = 404;
    }

    return new Response(html, {
      status,
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=300',
        'X-Content-Type-Options': 'nosniff',
      }
    });
  }
};
