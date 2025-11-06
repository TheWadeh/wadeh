<script lang="ts" setup>
import { computed, ref } from "vue";
import type { SiteSettings } from "~/data/site";

const props = defineProps<{ settings: SiteSettings }>();

const isOpen = ref(false);

const navigationLinks = computed(() => props.settings.navigation);
</script>

<template>
  <header class="p-4 md:p-6">
    <nav
      class="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"
      aria-label="Main"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="z-50" @click="isOpen = false">
          <span class="flex items-center gap-3">
            <Icon name="ph:brain" class="text-xl text-sky-300" />
            <span class="text-lg font-semibold tracking-wide">Wadeh AI</span>
          </span>
          <span class="sr-only">{{ settings.siteTitle }} home page</span>
        </NuxtLink>

        <button
          type="button"
          class="block p-2 text-3xl text-white md:hidden"
          :aria-expanded="isOpen"
          @click="isOpen = true"
        >
          <Icon name="ph:list-bold" />
        </button>
      </div>

      <!-- Mobile Nav -->
      <div
        class="fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden"
        :class="isOpen ? 'translate-x-0' : 'translate-x-[100%]'"
      >
        <button
          :aria-expanded="isOpen"
          type="button"
          class="block p-2 text-3xl text-white md:hidden"
          @click="isOpen = false"
        >
          <Icon name="ph:x-bold" />
        </button>
        <ul class="grid justify-items-end gap-8">
          <li v-for="link in navigationLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block min-h-11 px-3 text-3xl first:mt-8"
              :class="{ buttonLink: link.variant === 'button' }"
              @click="isOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden gap-6 md:flex">
        <li v-for="link in navigationLinks" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="inline-flex min-h-11 items-center"
            :class="{ buttonLink: link.variant === 'button' }"
            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>