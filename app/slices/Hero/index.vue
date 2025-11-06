<script setup lang="ts">
import { onMounted } from "vue";
import gsap from 'gsap';
import type { HeroContent } from "~/data/home";

const props = defineProps<{ hero: HeroContent }>();

const isExternal = (href: string) => /^https?:/i.test(href);

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

  if (prefersReducedMotion) {
    gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
      opacity: 1
    });

    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
  tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');
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
    <div class="relative text-center">
      <GlideGrid />
      <h1 class="hero__heading mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl">
        {{ props.hero.title }}
        <span class="text-sky-300">{{ ' ' + props.hero.highlight }}</span>
      </h1>
      <p class="hero__body mx-auto mt-6 max-w-md text-balance text-gray-300 opacity-0">
        {{ props.hero.description }}
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
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
      <div class="hero__image glass-container mt-16 w-fit opacity-0">
        <div
          class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-sky-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
        />
        <div
          class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-teal-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
        />
        <div class="dashboard-card">
          <header class="dashboard-card__header">
            <div class="dashboard-card__title">Automation Ops</div>
            <div class="dashboard-card__status">Live</div>
          </header>
          <div class="dashboard-card__body">
            <div class="dashboard-card__column">
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
            </div>
            <div class="dashboard-card__column">
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
            </div>
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
          <div class="dashboard-card__fade" />
        </div>
      </div>
    </div>
  </Bounded>
</template>

<style scoped>
.dashboard-card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  width: min(960px, 95vw);
  border-radius: 1.25rem;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(12, 27, 54, 0.88) 100%);
  border: 1px solid rgba(125, 211, 252, 0.18);
  box-shadow: 0 40px 80px rgba(14, 116, 144, 0.25);
  overflow: hidden;
  padding: clamp(1.5rem, 1.2vw + 1.5rem, 2.25rem) clamp(1.5rem, 1vw + 1.75rem, 2.75rem) clamp(2rem, 1.4vw + 1.8rem, 3rem);
}

.dashboard-card__fade {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 90px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.9) 70%, rgba(15, 23, 42, 1) 100%);
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

.dashboard-card__body {
  display: grid;
  gap: 1.5rem;
  z-index: 1;
}

@media (min-width: 640px) {
  .dashboard-card__body {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }
}

.dashboard-card__column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.dashboard-card__fade + * {
  position: relative;
}
</style>
