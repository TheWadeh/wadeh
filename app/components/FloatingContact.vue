<script setup lang="ts">
import { ref, computed } from "vue";
import { siteSettings } from "~/data/site";

const isOpen = ref(false);
const socials = computed(() => siteSettings.socials);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="floating-contact" aria-live="polite">
    <transition name="contact-fade">
      <div
        v-if="isOpen"
        class="contact-card glass-container"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Wadeh AI"
      >
        <header class="contact-card__header">
          <div>
            <p class="text-xs uppercase tracking-[0.35em] text-sky-200/70">Contact</p>
            <h2 class="text-lg font-semibold text-white">Wadeh AI</h2>
          </div>
          <button
            type="button"
            class="contact-card__close"
            aria-label="Close contact panel"
            @click="close"
          >
            <Icon name="ph:x-bold" />
          </button>
        </header>
        <div class="contact-card__info">
          <a :href="`mailto:${siteSettings.contactEmail}`" class="contact-link">
            <Icon name="ph:envelope-simple" />
            <span>{{ siteSettings.contactEmail }}</span>
          </a>
          <a :href="`tel:${siteSettings.contactPhone}`" class="contact-link">
            <Icon name="ph:phone" />
            <span>{{ siteSettings.contactPhone }}</span>
          </a>
        </div>
        <ul class="contact-card__socials">
          <li v-for="social in socials" :key="social.href">
            <NuxtLink
              :to="social.href.startsWith('http') ? undefined : social.href"
              :href="social.href.startsWith('http') ? social.href : undefined"
              class="contact-social"
              target="_blank"
              rel="noreferrer"
            >
              <Icon v-if="social.label === 'Telegram'" name="ph:paper-plane-tilt" />
              <Icon v-else-if="social.label === 'WhatsApp'" name="ph:whatsapp-logo" />
              <Icon v-else-if="social.label === 'LinkedIn'" name="ph:linkedin-logo" />
              <span>{{ social.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>

    <button
      type="button"
      class="contact-trigger"
      aria-label="Open contact options"
      @click="toggle"
    >
      <Icon :name="isOpen ? 'ph:minus-circle' : 'ph:chat-circle-dots'" class="text-2xl" />
    </button>
  </div>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  inset-inline-end: 1.25rem;
  inset-block-end: 1.5rem;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

.contact-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 999px;
  border: 1px solid rgba(125, 211, 252, 0.4);
  background: linear-gradient(135deg, rgba(14, 116, 144, 0.9), rgba(8, 47, 73, 0.9));
  color: #e0f2fe;
  box-shadow: 0 20px 40px rgba(14, 116, 144, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-trigger:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 24px 48px rgba(14, 116, 144, 0.3);
}

.contact-card {
  width: min(320px, 90vw);
  border-radius: 1.25rem;
  border: 1px solid rgba(125, 211, 252, 0.2);
  background: rgba(7, 16, 28, 0.9);
  padding: 1.5rem;
  display: grid;
  gap: 1.25rem;
  backdrop-filter: blur(12px);
}

.contact-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.contact-card__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border-radius: 999px;
  border: 1px solid rgba(125, 211, 252, 0.2);
  color: rgba(224, 242, 254, 0.8);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.contact-card__close:hover {
  background: rgba(8, 47, 73, 0.6);
  color: #e0f2fe;
}

.contact-card__info {
  display: grid;
  gap: 0.75rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: rgba(224, 242, 254, 0.85);
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #e0f2fe;
}

.contact-card__socials {
  display: grid;
  gap: 0.6rem;
}

.contact-social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.6rem 0.9rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(125, 211, 252, 0.2);
  background: rgba(15, 118, 110, 0.1);
  color: rgba(224, 242, 254, 0.85);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.contact-social:hover {
  border-color: rgba(125, 211, 252, 0.45);
  color: #e0f2fe;
}

.contact-fade-enter-active,
.contact-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.contact-fade-enter-from,
.contact-fade-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
