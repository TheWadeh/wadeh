<script lang="ts" setup>
import type { SiteSettings } from "~/data/site";

defineProps<{ settings: SiteSettings }>();
</script>

<template>
  <footer>
    <nav
      class="flex flex-col items-center justify-between gap-6 border-t border-gray-600 px-8 py-7 md:flex-row"
      aria-label="Footer"
    >
      <NuxtLink to="/">
        <span class="flex items-center gap-3">
          <Icon name="ph:brain" class="text-lg text-sky-300" />
          <span class="text-sm font-semibold tracking-wider uppercase">Wadeh AI</span>
        </span>
        <span class="sr-only">{{ settings.siteTitle }} home page</span>
      </NuxtLink>

      <ul class="flex gap-6">
        <li v-for="link in settings.footerLinks" :key="link.href">
          <NuxtLink :to="link.href" class="inline-flex min-h-11 items-center">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
