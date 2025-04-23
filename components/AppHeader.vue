<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gray-800"
  >
    <UContainer class="flex h-16 items-center justify-between px-4 sm:px-6">
      <!-- Logo y nombre -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <NuxtImg
            src="/images/logo.png"
            class="w-10 h-10 transition-all duration-300 group-hover:scale-110"
            alt="Alta Gama"
          />
          <span
            class="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"
          >
            Alta Gama
          </span>
        </NuxtLink>
      </div>

      <!-- Navegación principal (desktop) - Versión corregida -->
      <nav class="hidden md:block">
        <UNavigationMenu :items="items" class="w-full justify-center" />
      </nav>

      <!-- Botones de redes y CTA -->
      <div class="flex items-center gap-2">
        <div class="hidden md:flex items-center gap-1 mr-3">
          <IconsSocial />
        </div>

        <UButton
          size="sm"
          class="hidden sm:flex bg-primary text-background hover:bg-primary/90"
          trailing-icon="i-heroicons:arrow-right-16-solid"
        >
          Contacto
        </UButton>

        <!-- Menú móvil -->

        <UDrawer
          v-model:open="open"
          direction="right"
          :overlay="false"
          :ui="{ header: 'flex items-center justify-between' }"
        >
          <UButton variant="ghost" color="neutral" class="md:hidden">
            <UIcon name="i-heroicons:bars-3-16-solid" class="w-5 h-5" />
          </UButton>

          <template #header>
            <h2 class="text-highlighted font-semibold">Menú</h2>

            <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-x"
              @click="open = !open"
            />
          </template>

          <template #body>
            <UNavigationMenu
              :items="items"
              class="w-52 h-full"
              orientation="vertical"
            />
          </template>
        </UDrawer>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const open = ref(false);

const items = ref<NavigationMenuItem[]>([
  {
    label: "Inicio",
  },
  {
    label: "Sobre Nosotros",
  },
  {
    label: "Servicios",
  },
  {
    label: "Equipo",
  },
]);
</script>
