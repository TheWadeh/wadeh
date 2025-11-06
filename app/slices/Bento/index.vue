<script setup lang="ts">
import type { BentoSection } from "~/data/home";

const props = defineProps<{ section: BentoSection }>();
</script>

<template>
  <Bounded id="services">
    <p class="text-sm uppercase tracking-[0.4em] text-sky-200">
      {{ props.section.eyebrow }}
    </p>
    <h2 class="mt-4 text-center text-4xl font-medium text-white md:text-6xl">
      {{ props.section.title }}
      <span class="italic text-sky-200">{{ props.section.highlight }}</span>
    </h2>
    <p class="mx-auto mt-6 max-w-2xl text-center text-gray-300">
      {{ props.section.description }}
    </p>
    <div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
      <article
        v-for="tile in props.section.tiles"
        :key="tile.title"
        class="glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/60 p-6 before:bg-gray-100/10"
        :class="tile.isWide ? 'md:col-span-2' : 'md:col-span-1'"
      >
        <h3 class="text-2xl">{{ tile.title }}</h3>
        <p class="max-w-md text-gray-300">{{ tile.description }}</p>
        <ul class="mt-2 flex flex-col gap-3 text-sm text-sky-100/90">
          <li
            v-for="highlight in tile.highlights"
            :key="highlight"
            class="flex items-start gap-3 rounded-lg border border-sky-200/20 bg-sky-900/10 p-3 text-left"
          >
            <span class="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-300" />
            <span class="leading-relaxed text-sky-100/95">{{ highlight }}</span>
          </li>
        </ul>
      </article>
    </div>
  </Bounded>
</template>
