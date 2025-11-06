<script setup lang="ts">
import type { CaseStudiesSection } from "~/data/home";

const props = defineProps<{ section: CaseStudiesSection }>();
</script>

<template>
  <Bounded id="case-studies">
    <h2 class="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
      {{ props.section.title }}
    </h2>
    <p class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
      {{ props.section.description }}
    </p>
    <div class="mt-20 grid gap-16">
      <div
        v-for="(caseStudy, index) in props.section.studies"
        :key="caseStudy.company"
        class="group relative grid gap-6 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
      >
        <div class="case-card glass-container relative flex flex-col gap-5 rounded-xl bg-gray-900/60 p-6 before:bg-gray-200/5">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-4xl font-semibold text-white">{{ caseStudy.company }}</h3>
            <span class="rounded-full border border-sky-200/30 bg-sky-200/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-100/80">
              {{ caseStudy.sector }}
            </span>
          </div>
          <p class="max-w-xl text-gray-300">
            {{ caseStudy.description }}
          </p>
          <NuxtLink :to="caseStudy.link" class="buttonLink self-start">
            Read {{ caseStudy.company }} case study
          </NuxtLink>
        </div>

        <div
          class="case-card-metrics glass-container relative flex flex-col gap-4 rounded-xl bg-sky-900/20 p-6 before:bg-sky-200/5"
          :class="index % 2 ? 'md:-order-1' : ''"
        >
          <header class="flex items-center justify-between">
            <span class="text-xs uppercase tracking-[0.4em] text-sky-200/70">Impact</span>
            <Icon name="ph:trend-up-bold" class="text-2xl text-sky-200/70" />
          </header>
          <div class="grid gap-3 sm:grid-cols-3">
            <div
              v-for="metric in caseStudy.metrics"
              :key="metric.label"
              class="rounded-lg border border-sky-200/20 bg-sky-50/10 p-4 text-center"
            >
              <span class="text-xs uppercase tracking-[0.25em] text-sky-100/60">{{ metric.label }}</span>
              <p class="mt-2 text-2xl font-semibold text-sky-100">{{ metric.value }}</p>
            </div>
          </div>
          <footer class="flex items-center justify-between border-t border-sky-200/10 pt-3 text-xs text-sky-100/70">
            <span>Automation uptime</span>
            <div class="flex items-center gap-2">
              <span class="inline-flex h-2 w-16 rounded-full bg-gradient-to-r from-sky-200 to-teal-300" />
              <strong class="text-sm text-sky-50">99.2%</strong>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </Bounded>
</template>

<style scoped>
.case-card::before,
.case-card-metrics::before {
  opacity: 0.35;
}
</style>