<script lang="ts" setup>
import { siteSettings } from "~/data/site";

useSeoMeta({
  title: siteSettings.siteTitle,
  ogTitle: siteSettings.siteTitle,
  description: siteSettings.metaDescription,
  ogDescription: siteSettings.metaDescription,
});
</script>

<template>
  <div>
    <AppHeader :settings="siteSettings" />
    <slot />
    <AppFooter :settings="siteSettings" />
    <FloatingContact />
  </div>
</template>
