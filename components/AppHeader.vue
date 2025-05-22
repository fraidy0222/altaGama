<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gray-800"
  >
    <UContainer class="flex h-16 items-center justify-between px-4 sm:px-6">
      <!-- Logo y nombre -->
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group"
          @click.prevent="scrollToSection('home')"
        >
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

      <!-- Navegación principal (desktop) -->
      <!-- Navegación desktop -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="item in items" :key="item.value">
            <button
              class="text-sm font-medium hover:text-primary transition-colors"
              @click="handleNavigation(item)"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          <IconsSocial />
        </div>

        <!-- <UButton
          size="sm"
          class="hidden sm:flex bg-primary text-background hover:bg-primary/90"
          trailing-icon="i-heroicons:arrow-right-16-solid"
        >
          Contacto
        </UButton> -->

        <!-- Menú móvil -->
        <UDrawer
          v-model:open="open"
          :prevent-close="true"
          direction="right"
          :ui="{ header: 'flex items-center justify-between' }"
        >
          <!-- Botón para abrir el drawer (debe estar fuera del drawer) -->
          <UButton variant="ghost" color="neutral" class="md:hidden">
            <UIcon name="i-heroicons:bars-3-16-solid" class="w-5 h-5" />
          </UButton>

          <!-- Contenido del drawer -->
          <template #header>
            <h2 id="drawer-title" class="sr-only">Menú de navegación</h2>
            <div
              class="flex items-center justify-between w-full"
              aria-labelledby="drawer-title"
            >
              <span class="text-highlighted font-semibold">Menú</span>
              <UButton
                color="neutral"
                variant="ghost"
                icon="i-lucide-x"
                aria-label="Cerrar menú"
                @click="open = false"
              />
            </div>
          </template>

          <template #body>
            <ul class="flex flex-col space-y-5">
              <li v-for="item in items" :key="item.value">
                <button
                  class="text-sm font-medium hover:text-primary transition-colors"
                  @click="handleNavigation(item)"
                >
                  {{ item.label }}
                </button>
              </li>
            </ul>
          </template>
        </UDrawer>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter } from "vue-router";
// import { VisuallyHidden } from "@headlessui/vue";

const router = useRouter();
const route = useRoute();

// Registrar plugin solo en cliente
gsap.registerPlugin(ScrollToPlugin);

const open = ref(false);

const items = ref<NavigationMenuItem[]>([
  { label: "Inicio", path: "/", section: "home" },
  { label: "Sobre Nosotros", path: "/", section: "about" },
  { label: "Servicios", path: "/servicios", section: "services" },
  { label: "Equipo", path: "/", section: "team" },
]);

const scrollToSection = async (sectionId: string | undefined) => {
  // Si estamos en la página principal
  if (route.path === "/") {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 80,
        autoKill: false,
      },
      ease: "power3.inOut",
    });
  } else {
    // Si estamos en otra página, navegar a home primero
    await router.push("/");
    await nextTick(); // Esperar a que se actualice el DOM

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 80,
        autoKill: false,
      },
      ease: "power3.inOut",
    });
  }
};

const handleNavigation = (item) => {
  if (item.section) {
    scrollToSection(item.section);
    open.value = false;
  } else {
    router.push(item.path);
    open.value = false;
  }
};
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
