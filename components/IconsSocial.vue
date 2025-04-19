<template>
  <div class="flex items-center gap-2">
    <UButton
      v-for="social in socials"
      :key="social.name"
      :to="social.link"
      :ui="{ rounded: 'rounded-full' }"
      size="sm"
      color="neutral"
      variant="ghost"
      :class="social.class"
      :aria-label="social.name"
    >
      <template #leading>
        <component :is="social.iconComponent" class="w-4 h-4" />
      </template>
    </UButton>
  </div>
</template>

<script setup>
import TwitterIcon from "./Icons/TwitterIcon.vue";
import FacebookIcon from "./Icons/FacebookIcon.vue";
import YoutubeIcon from "./Icons/YoutubeIcon.vue";

const socials = [
  {
    name: "Twitter",
    link: "#",
    class: "hover:text-primary",
    iconComponent: TwitterIcon,
  },
  {
    name: "Facebook",
    link: "#",
    class: "hover:text-primary",
    iconComponent: FacebookIcon,
  },
  {
    name: "YouTube",
    link: "#",
    class: "hover:text-primary",
    iconComponent: YoutubeIcon,
  },
];
</script>
