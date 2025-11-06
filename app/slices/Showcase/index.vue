<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { ShowcaseSection } from "~/data/home";

const props = defineProps<{ section: ShowcaseSection }>();

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

  if (prefersReducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    '.showcase__heading',
    {
      y: 100
    },
    {
      y: 0,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.showcase__heading',
        start: 'top bottom-=40%',
        toggleActions: 'play pause resume reverse'
      }
    }
  );

  gsap.fromTo(
    '.showcase__glow',
    {
      scale: 0.7,
      opacity: 0.1
    },
    {
      scale: 1,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.showcase__heading',
        start: 'top bottom-=40%',
        toggleActions: 'play pause resume reverse'
      }
    }
  );
});
</script>

<template>
  <Bounded class="relative px-4 sm:px-6">
    <div
      class="showcase__glow absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-sky-700 mix-blend-screen blur-[120px] filter"
    />
    <h2 class="showcase__heading text-balance text-center text-4xl font-medium sm:text-5xl md:text-7xl">
      {{ props.section.heading }}
    </h2>
    <div
      class="relative mt-10 grid items-start gap-8 rounded-xl border border-sky-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-6 py-7 backdrop-blur-sm sm:mt-12 sm:px-8 lg:mt-16 lg:grid-cols-2 lg:gap-14 lg:py-12"
    >
      <div class="grid-background" />
      <div :class="props.section.reversed ? 'lg:order-2' : 'lg:order-1'">
        <figure class="w-fit rounded-lg bg-sky-900 p-4 text-3xl">
          <Icon :name="`ph:${props.section.icon}`" class="block" />
        </figure>
        <h3 class="mt-6 text-2xl font-normal">
          {{ props.section.subheading }}
        </h3>
        <p class="prose prose-invert mt-4 max-w-xl">
          {{ props.section.body }}
        </p>
        <NuxtLink :to="props.section.cta.href" class="buttonLink mt-6">
          {{ props.section.cta.label }}
        </NuxtLink>
      </div>
      <div
        class="showcase-card glass-container relative flex flex-col gap-4 rounded-xl bg-gray-900/60 p-6"
        :class="props.section.reversed ? 'lg:order-1' : 'lg:order-2'"
      >
        <header class="flex items-center justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.4em] text-sky-200/70">Launchpad Modules</p>
            <h4 class="mt-2 text-xl font-medium text-sky-50">{{ props.section.subheading }}</h4>
          </div>
          <Icon name="ph:circles-four" class="text-3xl text-sky-200/70" />
        </header>
        <ul class="grid gap-3 sm:grid-cols-2">
          <li
            v-for="point in props.section.points"
            :key="point"
            class="flex items-start gap-3 rounded-lg border border-sky-200/20 bg-sky-200/10 p-4"
          >
            <span class="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-sky-200 to-teal-200" />
            <span class="text-sm text-sky-100/90 leading-relaxed">{{ point }}</span>
          </li>
        </ul>
        <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-sky-200/10 pt-4 text-xs text-sky-100/70">
          <span>Automation confidence score</span>
          <div class="flex items-center gap-2">
            <span class="inline-flex h-2 w-16 rounded-full bg-gradient-to-r from-sky-200 to-teal-300" />
            <strong class="text-base text-sky-50">96%</strong>
          </div>
        </footer>
      </div>
    </div>
  </Bounded>
</template>

<style scoped>
.grid-background {
  background-image: url('/assets/grid-pattern.png');
  position: absolute;
  inset: 0;
  background-repeat: repeat;
  z-index: -1;
  background-position: center;
  opacity: 0.15;
  mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
}
</style>