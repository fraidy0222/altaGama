<template>
  <footer class="bg-background-accent border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-10 md:py-12 lg:px-8">
      <!-- Grid principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Columna logo y descripción -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <NuxtImg src="/images/logo.png" class="w-12 h-12" alt="Logo" />
            <span class="text-2xl font-bold text-white">Alta Gama</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-md">
            Especialistas en soluciones IT innovadoras para empresas que buscan
            transformar su infraestructura tecnológica con seguridad y
            eficiencia.
          </p>

          <!-- Redes sociales -->
          <div class="flex gap-4 mt-6">
            <IconsSocial />
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3
            class="text-sm font-semibold text-white uppercase tracking-wider mb-6"
          >
            Enlaces rápidos
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <!-- <ULink
                class="text-gray-400 hover:text-primary text-sm transition-colors"
                @click="handleNavigation(item)"
              >
                {{ link.label }}
              </ULink> -->
              <button
                class="text-sm text-gray-400 font-medium hover:text-primary transition-colors"
                @click="handleNavigation(link)"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h3
            class="text-sm font-semibold text-white uppercase tracking-wider mb-6"
          >
            Contacto
          </h3>
          <address class="not-italic text-gray-400 text-sm space-y-3">
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
              />
              <span>Av. Tecnológica 1234, Ciudad Digital</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary" />
              <span>+1 234 567 890</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary" />
              <span>altagama@gmail.com</span>
            </div>
          </address>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p class="text-gray-500 text-sm">
            &copy; {{ new Date().getFullYear() }} Alta Gama. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter } from "vue-router";
// import { VisuallyHidden } from "@headlessui/vue";

const router = useRouter();
const route = useRoute();

// Registrar plugin solo en cliente
gsap.registerPlugin(ScrollToPlugin);

const quickLinks = [
  { label: "Inicio", path: "/", section: "home" },
  { label: "Sobre Nosotros", path: "/", section: "about" },
  { label: "Servicios", path: "/servicios", section: "services" },
  { label: "Equipo", path: "/", section: "team" },
];

const scrollToSection = async (sectionId) => {
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
  } else {
    router.push(item.path);
  }
};
</script>
