<script setup lang="ts">
import HeroSection from "~/slices/Hero/index.vue";
import ServicesSection from "~/slices/Bento/index.vue";
import ShowcaseSection from "~/slices/Showcase/index.vue";
import IntegrationsSection from "~/slices/Integrations/index.vue";
import CaseStudiesSection from "~/slices/CaseStudies/index.vue";
import CallToActionSection from "~/slices/CallToAction/index.vue";
import { homePageContent } from "~/data/home";
import { siteSettings } from "~/data/site";

const { hero, mission, services, showcase, integrations, caseStudies, closingCta } = homePageContent;

const isExternal = (href: string) => /^https?:|^mailto:/i.test(href);
</script>


<template>
  <main>
    <HeroSection :hero="hero" />

    <Bounded id="mission">
      <p class="text-sm uppercase tracking-[0.4em] text-sky-200">Our Mission</p>
      <h2 class="mt-4 max-w-3xl text-center text-4xl font-medium text-white md:text-6xl">
        {{ mission.title }}
      </h2>
      <div class="mt-6 flex max-w-2xl flex-col gap-4 text-center text-gray-300">
        <p v-for="paragraph in mission.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </Bounded>

    <ServicesSection :section="services" />

    <section>
      <ShowcaseSection
        v-for="item in showcase"
        :key="item.heading"
        :section="item"
      />
    </section>

    <IntegrationsSection :section="integrations" />

    <CaseStudiesSection :section="caseStudies" />

    <CallToActionSection :section="closingCta" />

    <Bounded id="contact" class="px-4 sm:px-6">
      <div class="glass-container w-full rounded-xl bg-gradient-to-r from-sky-900/40 to-teal-900/30 p-6 text-center sm:p-8 md:p-12">
        <h2 class="text-3xl font-medium text-white sm:text-4xl md:text-5xl">
          Let's build your automation roadmap
        </h2>
        <p class="mt-4 text-sm text-gray-300 sm:text-base">
          Reach out and we'll craft an automation plan tailored to your team's priorities.
        </p>
        <div class="mt-6 flex flex-col items-center gap-3 text-gray-200">
          <a class="text-base hover:text-sky-300 sm:text-lg" :href="`mailto:${siteSettings.contactEmail}`">
            {{ siteSettings.contactEmail }}
          </a>
          <span>{{ siteSettings.contactPhone }}</span>
          <span>{{ siteSettings.location }}</span>
        </div>
        <div class="mt-6 flex flex-wrap justify-center gap-3 text-xs text-sky-100/80 sm:gap-4 sm:text-sm">
          <template v-for="social in siteSettings.socials" :key="social.href">
            <NuxtLink
              :to="social.href.startsWith('http') ? undefined : social.href"
              :href="social.href.startsWith('http') ? social.href : undefined"
              class="inline-flex items-center gap-2 rounded-full border border-sky-200/20 px-3 py-2 hover:border-sky-200/40 hover:text-sky-200 sm:px-4"
              target="_blank"
              rel="noreferrer"
            >
              <Icon v-if="social.label === 'Telegram'" name="ph:paper-plane-tilt" />
              <Icon v-else-if="social.label === 'WhatsApp'" name="ph:whatsapp-logo" />
              <Icon v-else-if="social.label === 'LinkedIn'" name="ph:linkedin-logo" />
              <span>{{ social.label }}</span>
            </NuxtLink>
          </template>
        </div>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink to="#services" class="buttonLink">View services</NuxtLink>
          <template v-for="link in closingCta.ctas" :key="link.href">
            <a
              v-if="isExternal(link.href)"
              :href="link.href"
              class="buttonLink"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
            <NuxtLink v-else :to="link.href" class="buttonLink">
              {{ link.label }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </Bounded>
  </main>
</template>
