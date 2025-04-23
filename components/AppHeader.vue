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
        <!-- <UNavigationMenu>
          <UNavigationMenuList class="flex items-center gap-1">
            <UNavigationMenuItem
              v-for="item in navigationItems"
              :key="item.label"
            >
              <template v-if="item.children">
                <UNavigationMenuTrigger
                  class="text-sm font-medium hover:text-primary data-[state=open]:text-primary"
                >
                  {{ item.label }}
                </UNavigationMenuTrigger>
                <UNavigationMenuContent
                  class="bg-background-accent rounded-lg border border-gray-800"
                >
                  <ul class="grid w-[400px] gap-1 p-2">
                    <li v-for="child in item.children" :key="child.label">
                      <UNavigationMenuLink
                        as="NuxtLink"
                        :to="child.to"
                        class="flex items-center gap-3 p-3 hover:bg-background rounded-md transition-colors"
                      >
                        <UIcon
                          :name="child.icon"
                          class="w-5 h-5 text-primary flex-shrink-0"
                        />
                        <div class="flex flex-col">
                          <span class="font-medium text-white">{{
                            child.label
                          }}</span>
                          <span class="text-xs text-gray-400">{{
                            child.description
                          }}</span>
                        </div>
                      </UNavigationMenuLink>
                    </li>
                  </ul>
                </UNavigationMenuContent>
              </template>
              <UNavigationMenuLink
                v-else
                as="NuxtLink"
                :to="item.to"
                class="text-sm font-medium px-4 py-2 hover:text-primary"
              >
                {{ item.label }}
              </UNavigationMenuLink>
            </UNavigationMenuItem>
          </UNavigationMenuList>
        </UNavigationMenu> -->
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
        <UButton
          variant="ghost"
          color="neutral"
          class="md:hidden"
          @click="isOpen = true"
        >
          <UIcon name="i-heroicons:bars-3-16-solid" class="w-5 h-5" />
        </UButton>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const isOpen = ref(false);

// const navigationItems = [
//   {
//     label: "Servicios",
//     children: [
//       {
//         label: "Reparación de Servidores",
//         description: "Soluciones profesionales para tu infraestructura",
//         icon: "i-heroicons-server-20-solid",
//         to: "/services/servers",
//       },
//       {
//         label: "Seguridad Informática",
//         description: "Protección avanzada para tus sistemas",
//         icon: "i-heroicons-shield-check-20-solid",
//         to: "/services/security",
//       },
//       {
//         label: "Virtualización",
//         description: "Optimización de recursos tecnológicos",
//         icon: "i-heroicons-cube-20-solid",
//         to: "/services/virtualization",
//       },
//     ],
//   },
//   {
//     label: "Equipo",
//     to: "/team",
//   },
//   {
//     label: "Sobre Nosotros",
//     to: "/about",
//   },
// ];

// const mobileLinks = [
//   {
//     label: "Servicios",
//     icon: "i-heroicons-wrench-screwdriver",
//     children: navigationItems[0].children.map((child) => ({
//       label: child.label,
//       icon: child.icon,
//       to: child.to,
//     })),
//   },
//   {
//     label: "Equipo",
//     icon: "i-heroicons-users",
//     to: "/team",
//   },
//   {
//     label: "Sobre Nosotros",
//     icon: "i-heroicons-building-office",
//     to: "/about",
//   },
// ];

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
