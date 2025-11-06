<script setup lang="ts">
import type { CallToActionSection } from "~/data/home";

const props = defineProps<{ section: CallToActionSection }>();
</script>

<template>
  <Bounded class="relative py-32 text-center font-medium md:py-40">
    <div class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter" />
    <div class="glass-container rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:rounded-xl">
      <GlideIcon class="h-24 w-24" />
    </div>
    <h2 class="mt-8 max-w-xl text-balance text-5xl">
      {{ props.section.title }}
    </h2>
    <div class="flex flex-wrap gap-8">
      <NuxtLink
        v-for="cta in props.section.ctas"
        :key="cta.href"
        :to="cta.external ? undefined : cta.href"
        :href="cta.external ? cta.href : undefined"
        class="buttonLink mt-6"
        :target="cta.external ? '_blank' : undefined"
        :rel="cta.external ? 'noreferrer' : undefined"
      >
        {{ cta.label }}
      </NuxtLink>
    </div>
  </Bounded>
</template>
