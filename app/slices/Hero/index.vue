<script setup lang="ts">
import { onMounted } from "vue";
import gsap from 'gsap';
import type { HeroContent } from "~/data/home";

const props = defineProps<{ hero: HeroContent }>();

const isExternal = (href: string) => /^https?:/i.test(href);

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
      opacity: 1
    });

    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 0.8 });
  tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4');
  tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
  tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '+=0.3');
  tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

  gsap.to('.hero__glow--one', {
    ease: 'power2.inOut',
    repeat: -1,
    repeatDelay: 0,
    keyframes: [
      { top: '0%', left: '33%', duration: 0 },
      { top: '33%', left: '33%', duration: 2 },
      { top: '33%', left: '0%', duration: 3 },
      { top: '0%', left: '0%', duration: 2 },
      { top: '0%', left: '33%', duration: 3 }
    ]
  });

  gsap.to('.hero__glow--two', {
    ease: 'power2.inOut',
    repeat: -1,
    repeatDelay: 0,
    keyframes: [
      { top: '33%', left: '0%', duration: 0 },
      { top: '0%', left: '0%', duration: 2 },
      { top: '0%', left: '33%', duration: 3 },
      { top: '33%', left: '33%', duration: 2 },
      { top: '33%', left: '0%', duration: 3 }
    ]
  });
});
</script>

<template>
  <Bounded id="hero">
    <div class="relative px-4 text-center sm:px-6">
      <GlideGrid />
      <h1 class="hero__heading mx-auto max-w-3xl text-balance text-4xl font-medium opacity-0 sm:text-5xl md:text-7xl">
        {{ props.hero.title }}
        <span class="text-sky-300">{{ ' ' + props.hero.highlight }}</span>
      </h1>
      <p class="hero__body mx-auto mt-6 max-w-xl text-balance text-base text-gray-300 opacity-0 sm:text-lg">
        {{ props.hero.description }}
      </p>
      <div class="flex flex-wrap justify-center gap-6 sm:gap-8">
        <NuxtLink
          v-for="cta in props.hero.ctas"
          :key="cta.href"
          :to="isExternal(cta.href) ? undefined : cta.href"
          :href="isExternal(cta.href) ? cta.href : undefined"
          class="hero__button buttonLink mt-8 opacity-0"
          :target="isExternal(cta.href) ? '_blank' : undefined"
          :rel="isExternal(cta.href) ? 'noreferrer' : undefined"
        >
          {{ cta.label }}
        </NuxtLink>
      </div>
      <div class="hero__image glass-container mt-16 w-full max-w-[760px] lg:max-w-[1040px] xl:max-w-[1120px] opacity-0 mx-auto">
        <div
          class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-sky-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
        />
        <div
          class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-teal-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
        />
        <div class="dashboard-card-wrapper">
          <div class="dashboard-card">
          <header class="dashboard-card__header">
            <div>
              <div class="dashboard-card__title">Automation Ops</div>
              <p class="dashboard-card__subtitle">Automation governance · Quarter sync</p>
            </div>
            <div class="dashboard-card__status">Live</div>
          </header>
          <div class="dashboard-card__layout">
            <aside class="dashboard-card__sidebar">
              <div class="dashboard-card__logo">WA</div>
              <ul class="dashboard-card__nav">
                <li class="is-active">
                  <span class="dashboard-card__nav-dot" />
                  <span>Ops overview</span>
                  <span class="dashboard-card__nav-tag">Now</span>
                </li>
                <li>
                  <span class="dashboard-card__nav-dot" />
                  <span>Runbooks</span>
                </li>
                <li>
                  <span class="dashboard-card__nav-dot" />
                  <span>Workflows</span>
                </li>
                <li>
                  <span class="dashboard-card__nav-dot" />
                  <span>Alerts</span>
                </li>
              </ul>
              <div class="dashboard-card__health">
                <div class="dashboard-card__health-label">
                  <span>Automation health</span>
                  <strong>92%</strong>
                </div>
                <div class="dashboard-card__meter">
                  <span class="dashboard-card__meter-fill" style="width: 92%"></span>
                </div>
              </div>
            </aside>
            <main class="dashboard-card__main">
              <section class="dashboard-card__panel">
                <p class="dashboard-card__eyebrow">AI ROUTINES</p>
                <ul class="dashboard-card__list">
                  <li>
                    <span>Lead qualification</span>
                    <span class="dashboard-card__pill">42 triggers</span>
                  </li>
                  <li>
                    <span>Invoice reconciliation</span>
                    <span class="dashboard-card__pill">99.8% accuracy</span>
                  </li>
                  <li>
                    <span>Support triage</span>
                    <span class="dashboard-card__pill">3m response</span>
                  </li>
                </ul>
              </section>
              <section class="dashboard-card__panel">
                <p class="dashboard-card__eyebrow">REGIONAL IMPACT</p>
                <div class="dashboard-card__metric-grid">
                  <div>
                    <strong>+68%</strong>
                    <span>Process velocity</span>
                  </div>
                  <div>
                    <strong>-32%</strong>
                    <span>Ops costs</span>
                  </div>
                  <div>
                    <strong>5 countries</strong>
                    <span>Served</span>
                  </div>
                </div>
                <div class="dashboard-card__trend">
                  <span>Ticket backlog</span>
                  <div class="dashboard-card__sparkline">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong class="dashboard-card__trend-value">-18%</strong>
                </div>
              </section>
            </main>
            <aside class="dashboard-card__activity">
              <p class="dashboard-card__eyebrow">LIVE SIGNALS</p>
              <ul class="dashboard-card__activity-feed">
                <li>
                  <span class="dashboard-card__activity-dot is-positive" />
                  <div>
                    <strong>Marketing sync</strong>
                    <span>Orchestrations ready in 12m</span>
                  </div>
                  <span class="dashboard-card__timestamp">08:24</span>
                </li>
                <li>
                  <span class="dashboard-card__activity-dot is-warning" />
                  <div>
                    <strong>Invoice reconciliation</strong>
                    <span>2 vendors awaiting review</span>
                  </div>
                  <span class="dashboard-card__timestamp">08:02</span>
                </li>
                <li>
                  <span class="dashboard-card__activity-dot" />
                  <div>
                    <strong>Support triage</strong>
                    <span>Queue cleared by automation</span>
                  </div>
                  <span class="dashboard-card__timestamp">07:55</span>
                </li>
              </ul>
              <div class="dashboard-card__uptime">
                <span>Runtime uptime</span>
                <strong>99.982%</strong>
              </div>
            </aside>
          </div>
          <footer class="dashboard-card__footer">
            <div class="dashboard-card__timeline">
              <span class="dashboard-card__dot" />
              <span class="dashboard-card__dot" />
              <span class="dashboard-card__dot" />
              <span class="dashboard-card__dot" />
            </div>
            <span class="dashboard-card__footer-text">Wadeh Launchpad Sync</span>
          </footer>
          </div>
        </div>
      </div>
      
      <!-- Marquee Section -->
      <div class="marquee-wrapper mt-16 w-full relative">
        <div class="marquee-container">
          <div class="marquee-track">
            <Icon name="simple-icons:stripe" class="marquee-icon" />
            <Icon name="simple-icons:notion" class="marquee-icon" />
            <Icon name="simple-icons:slack" class="marquee-icon" />
            <Icon name="simple-icons:hubspot" class="marquee-icon" />
            <Icon name="simple-icons:airtable" class="marquee-icon" />
            <Icon name="simple-icons:zapier" class="marquee-icon" />
            <Icon name="simple-icons:whatsapp" class="marquee-icon" />
            <Icon name="simple-icons:shopify" class="marquee-icon" />
          </div>
          <div class="marquee-track" aria-hidden="true">
            <Icon name="simple-icons:stripe" class="marquee-icon" />
            <Icon name="simple-icons:notion" class="marquee-icon" />
            <Icon name="simple-icons:slack" class="marquee-icon" />
            <Icon name="simple-icons:hubspot" class="marquee-icon" />
            <Icon name="simple-icons:airtable" class="marquee-icon" />
            <Icon name="simple-icons:zapier" class="marquee-icon" />
            <Icon name="simple-icons:whatsapp" class="marquee-icon" />
            <Icon name="simple-icons:shopify" class="marquee-icon" />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>

<style scoped>
.dashboard-card-wrapper {
  position: relative;
  width: min(1040px, 92vw);
  max-height: 600px;
  border-radius: 1.35rem;
  border: 1px solid rgba(125, 211, 252, 0.2);
  overflow: hidden;
  mask-image: linear-gradient(180deg, black 0%, black 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, black 0%, black 60%, transparent 100%);
}

.dashboard-card-wrapper::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 200px;
  background: linear-gradient(180deg, transparent 0%, rgb(3 7 18) 100%);
  pointer-events: none;
  z-index: 20;
}

.dashboard-card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1.25rem;
  border-radius: 1.35rem;
  background: linear-gradient(185deg, rgba(15, 23, 42, 0.96) 0%, rgba(12, 38, 74, 0.9) 55%, rgba(12, 27, 54, 0.88) 100%);
  box-shadow: 0 44px 90px rgba(14, 116, 144, 0.28);
  padding: clamp(1.25rem, 1vw + 1rem, 1.8rem) clamp(1.25rem, 0.8vw + 1.25rem, 2rem) clamp(1.75rem, 1.2vw + 1.5rem, 2.5rem);
}


.dashboard-card__header,
.dashboard-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.dashboard-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e0f2fe;
}

.dashboard-card__subtitle {
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: rgba(190, 242, 255, 0.64);
}

.dashboard-card__status {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.4);
  color: #bae6fd;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.dashboard-card__layout {
  display: grid;
  grid-template-columns: minmax(180px, 210px) minmax(0, 1fr) minmax(200px, 240px);
  gap: clamp(1rem, 1vw + 0.75rem, 1.5rem);
  z-index: 1;
}

.dashboard-card__sidebar {
  display: grid;
  align-content: start;
  gap: 1rem;
  padding-right: clamp(0.5rem, 0.8vw, 1rem);
  border-right: 1px solid rgba(125, 211, 252, 0.16);
}

.dashboard-card__logo {
  width: 3rem;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgba(8, 18, 36, 0.88);
  background: linear-gradient(120deg, rgba(125, 211, 252, 0.95), rgba(56, 189, 248, 0.8));
  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.25);
}

.dashboard-card__nav {
  display: grid;
  gap: 0.65rem;
  font-size: 0.92rem;
  color: rgba(226, 232, 240, 0.8);
}

.dashboard-card__nav li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.85rem;
  transition: background 0.2s ease, color 0.2s ease;
}

.dashboard-card__nav li:hover {
  background: rgba(30, 64, 175, 0.22);
  color: rgba(226, 232, 240, 0.92);
}

.dashboard-card__nav li.is-active {
  background: rgba(59, 130, 246, 0.16);
  color: rgba(191, 219, 254, 1);
  box-shadow: inset 0 0 0 1px rgba(125, 211, 252, 0.3);
}

.dashboard-card__nav-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #22d3ee, #2dd4bf);
  opacity: 0.75;
}

.dashboard-card__nav-tag {
  font-size: 0.68rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid rgba(56, 189, 248, 0.32);
  color: rgba(186, 230, 253, 0.9);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dashboard-card__health {
  display: grid;
  gap: 0.75rem;
  padding: 0.85rem 0.9rem;
  border-radius: 1rem;
  background: rgba(15, 118, 110, 0.18);
  border: 1px solid rgba(45, 212, 191, 0.18);
}

.dashboard-card__health-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.88rem;
  color: rgba(204, 251, 241, 0.92);
}

.dashboard-card__meter {
  position: relative;
  height: 0.55rem;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.2);
  overflow: hidden;
}

.dashboard-card__meter-fill {
  position: absolute;
  inset-block: 0;
  left: 0;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(56, 189, 248, 0.9), rgba(34, 197, 94, 0.9));
}

.dashboard-card__main {
  display: grid;
  gap: 1rem;
  align-content: start;
  padding-inline: clamp(0.25rem, 0.8vw, 1rem);
}

.dashboard-card__panel {
  display: grid;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  background: rgba(30, 64, 175, 0.18);
  border: 1px solid rgba(56, 189, 248, 0.2);
  box-shadow: 0 20px 35px rgba(30, 64, 175, 0.15);
}

.dashboard-card__activity {
  display: grid;
  align-content: start;
  gap: 1rem;
  padding-left: clamp(0.5rem, 0.8vw, 1.1rem);
  border-left: 1px solid rgba(125, 211, 252, 0.16);
}

.dashboard-card__activity-feed {
  display: grid;
  gap: 0.75rem;
}

.dashboard-card__activity-feed li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.6rem;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border-radius: 0.85rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(56, 189, 248, 0.15);
}

.dashboard-card__activity-feed strong {
  font-size: 0.95rem;
  color: rgba(226, 232, 240, 0.92);
}

.dashboard-card__activity-feed span {
  font-size: 0.8rem;
  color: rgba(148, 163, 184, 0.9);
}

.dashboard-card__activity-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: rgba(100, 116, 139, 0.9);
}

.dashboard-card__activity-dot.is-positive {
  background: rgba(34, 197, 94, 0.9);
}

.dashboard-card__activity-dot.is-warning {
  background: rgba(250, 204, 21, 0.9);
}

.dashboard-card__timestamp {
  font-feature-settings: "tnum";
  font-size: 0.8rem;
  color: rgba(203, 213, 225, 0.8);
}

.dashboard-card__uptime {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1rem;
  border-radius: 0.95rem;
  background: rgba(15, 118, 110, 0.22);
  border: 1px solid rgba(45, 212, 191, 0.22);
  color: rgba(204, 251, 241, 0.94);
  font-size: 0.9rem;
}

.dashboard-card__uptime strong {
  font-size: 1.05rem;
}

.dashboard-card__trend {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0.95rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(59, 130, 246, 0.24);
}

.dashboard-card__sparkline {
  display: grid;
  grid-template-columns: repeat(5, 0.4fr);
  gap: 0.45rem;
  height: 1.8rem;
}

.dashboard-card__sparkline span {
  align-self: end;
  display: block;
  width: 100%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.9), rgba(12, 74, 110, 0.4));
}

.dashboard-card__sparkline span:nth-child(1) {
  height: 60%;
}

.dashboard-card__sparkline span:nth-child(2) {
  height: 85%;
}

.dashboard-card__sparkline span:nth-child(3) {
  height: 45%;
}

.dashboard-card__sparkline span:nth-child(4) {
  height: 90%;
}

.dashboard-card__sparkline span:nth-child(5) {
  height: 55%;
}

.dashboard-card__trend-value {
  font-size: 0.95rem;
  color: rgba(16, 185, 129, 0.9);
}

.dashboard-card__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: rgba(125, 211, 252, 0.7);
}

.dashboard-card__list {
  display: grid;
  gap: 0.75rem;
}

.dashboard-card__list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.9rem;
  background: rgba(30, 64, 175, 0.25);
  border: 1px solid rgba(56, 189, 248, 0.24);
  color: rgba(224, 242, 254, 0.92);
  font-size: 0.95rem;
}

.dashboard-card__pill {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.18);
  border: 1px solid rgba(14, 165, 233, 0.3);
  color: rgba(186, 230, 253, 0.9);
}

.dashboard-card__metric-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.dashboard-card__metric-grid div {
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(15, 118, 110, 0.2);
  border: 1px solid rgba(45, 212, 191, 0.25);
  color: rgba(204, 251, 241, 0.95);
  display: grid;
  gap: 0.25rem;
}

.dashboard-card__metric-grid strong {
  font-size: 1.4rem;
  font-weight: 600;
}

.dashboard-card__timeline {
  display: flex;
  gap: 0.4rem;
}

.dashboard-card__dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #22d3ee, #2dd4bf);
  opacity: 0.6;
}

.dashboard-card__footer-text {
  font-size: 0.85rem;
  color: rgba(224, 242, 254, 0.8);
}

@media (max-width: 1080px) {
  .dashboard-card {
    width: min(960px, 92vw);
    padding: 1.6rem 1.8rem 2.6rem;
    gap: 1.5rem;
  }

  .dashboard-card__layout {
    grid-template-columns: minmax(190px, 1fr) minmax(0, 1.25fr) minmax(200px, 1fr);
  }

  .dashboard-card__panel {
    padding: 1rem 1.1rem;
  }
}

@media (max-width: 920px) {
  .dashboard-card {
    width: min(860px, 94vw);
  }

  .dashboard-card__layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .dashboard-card__sidebar,
  .dashboard-card__activity {
    border: none;
    padding: 0;
  }

  .dashboard-card__activity {
    order: 3;
  }

  .dashboard-card__main {
    padding: 0;
  }
}

@media (max-width: 640px) {
  .dashboard-card {
    width: min(560px, 94vw);
    padding: 1.35rem 1.45rem 2.1rem;
    gap: 1.3rem;
  }

  .dashboard-card__header,
  .dashboard-card__footer {
    flex-direction: column;
    gap: 0.9rem;
    align-items: flex-start;
  }

  .dashboard-card__status {
    align-self: flex-start;
  }

  .dashboard-card__nav li,
  .dashboard-card__activity-feed li {
    grid-template-columns: auto 1fr;
  }

  .dashboard-card__nav-tag,
  .dashboard-card__timestamp {
    justify-self: start;
  }

  .dashboard-card__trend {
    grid-template-columns: 1fr;
  }

  .dashboard-card__timeline {
    width: 100%;
    justify-content: space-between;
  }

  .dashboard-card__footer-text {
    width: 100%;
  }
}

@media (max-width: 420px) {
  .dashboard-card {
    padding: 1.15rem 1.2rem 1.8rem;
    gap: 1.15rem;
  }

  .dashboard-card__nav li,
  .dashboard-card__activity-feed li {
    padding: 0.65rem 0.75rem;
  }

  .dashboard-card__eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.32em;
  }

  .dashboard-card__footer-text {
    font-size: 0.78rem;
  }

  .dashboard-card__dot {
    width: 0.5rem;
    height: 0.5rem;
  }
}

/* Marquee Styles */
.marquee-wrapper {
  overflow: hidden;
  padding: 2rem 0;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-container {
  display: flex;
  width: fit-content;
  will-change: transform;
}

.marquee-track {
  display: flex;
  gap: 4rem;
  align-items: center;
  animation: scroll 30s linear infinite;
}

.marquee-icon {
  font-size: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: rgba(148, 163, 184, 0.4);
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.marquee-icon:hover {
  color: rgba(186, 230, 253, 0.8);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@media (max-width: 768px) {
  .marquee-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
  }
  
  .marquee-track {
    gap: 3rem;
  }
}

@media (max-width: 480px) {
  .marquee-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .marquee-track {
    gap: 2rem;
  }
}
</style>
