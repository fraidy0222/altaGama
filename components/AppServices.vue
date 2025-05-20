<template>
  <div ref="servicesSection" class="relative py-16 bg-background">
    <!-- Efecto de fondo (agregada clase para animación) -->
    <div
      ref="bgPattern"
      class="absolute inset-0 opacity-10 bg-[url('/images/pattern.jpg')] bg-cover bg-fixed"
    />

    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 ref="title" class="text-3xl md:text-4xl font-bold text-white mb-4">
          Soluciones Tecnológicas <span class="text-primary">a Medida</span>
        </h2>
        <p ref="subtitle" class="text-gray-300 max-w-2xl mx-auto">
          Innovación y eficiencia para transformar tu infraestructura IT
        </p>
      </div>

      <!-- Grid de servicios (agregada clase service-card a cada tarjeta) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        <!-- Servicio 1 -->
        <div
          v-for="(services, index) in servicesCard"
          :key="index"
          class="service-card group relative overflow-hidden bg-background-accent rounded-xl p-6 transition-all duration-300 hover:border-primary border border-transparent hover:shadow-[0_0_20px_rgba(19,246,229,0.15)]"
        >
          <div
            class="circle-bg absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"
          />
          <div class="relative z-10">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <UIcon :name="services.icon" class="h-6 w-6" dynamic />
            </div>
            <h4 class="mb-3 text-xl font-semibold text-white">
              {{ services.title }}
            </h4>
            <p class="text-gray-300">
              {{ services.description }}
            </p>
            <div class="mt-4 flex items-center text-primary">
              <span class="text-sm font-medium">Saber más</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón CTA -->
      <div ref="btnCta" class="text-center mt-16">
        <UButton
          to="/servicios"
          size="xl"
          trailing-icon="i-heroicons-arrow-right-20-solid"
          >Ver todos los servicios
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { $gsap } = useNuxtApp();

const servicesSection = ref(null);
const bgPattern = ref(null);
const title = ref(null);
const subtitle = ref(null);
const btnCta = ref(null);
// const serviceCards = ref([]) // Array para las tarjetas de servicio

const servicesCard = ref([
  {
    title: "Reparación de Servidores",
    description:
      "Diagnóstico y solución de fallas en hardware y software de servidores con garantía extendida.",
    icon: "i-heroicons-server",
  },

  {
    title: "Virtualización",
    description:
      "Implementación de soluciones de virtualización para optimizar tus recursos de hardware.",
    icon: "i-heroicons-server-stack",
  },
  {
    title: "Seguridad Informática",
    description:
      "Protección avanzada contra amenazas digitales con monitoreo 24/7 y respuesta inmediata.",
    icon: "i-heroicons-shield-check",
  },
]);
// Función para inicializar las animaciones
const initAnimations = () => {
  // Configuración global de GSAP
  // $gsap.defaults({
  //   ease: "power3.out",
  //   duration: 0.8,
  // });

  // Animación del fondo con efecto parallax sutil
  $gsap.from(bgPattern.value, {
    scale: 0.95,
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  });

  // Timeline principal para el encabezado
  const headerTL = $gsap.timeline({
    scrollTrigger: {
      trigger: servicesSection.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  headerTL
    .from(title.value, {
      y: 50,
      opacity: 0,
      duration: 1,
    })
    .from(
      subtitle.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    );

  // Animación CORREGIDA para las tarjetas
  const cards = $gsap.utils.toArray(".service-card");
  cards.forEach((card, index) => {
    $gsap.from(card, {
      y: 50, // Menos desplazamiento vertical
      opacity: 0,
      duration: 0.8, // Duración más corta
      delay: index * 0.15, // Retardo más corto entre tarjetas
      scrollTrigger: {
        trigger: card,
        start: "top 85%", // Dispara un poco más abajo
        toggleActions: "restart none none none",
      },
      ease: "sine.out", // Easing más suave
    });

    // Efecto hover mejorado
    const circle = card.querySelector(".circle-bg");
    card.addEventListener("mouseenter", () => {
      $gsap.to(circle, {
        scale: 1.5,
        duration: 0.1,
      });
    });
    card.addEventListener("mouseleave", () => {
      $gsap.to(circle, {
        scale: 1,
        duration: 0.1,
      });
    });
  });

  // Animación para el botón CTA
  $gsap.from(btnCta.value, {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: btnCta.value,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  // Efecto hover mejorado para las tarjetas
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      $gsap.to(card.querySelector(".circle-bg"), {
        scale: 1.5,
        duration: 0.1,
      });
    });
    card.addEventListener("mouseleave", () => {
      $gsap.to(card.querySelector(".circle-bg"), {
        scale: 1,
        duration: 0.1,
      });
    });
  });
};

onMounted(() => {
  initAnimations();
});
</script>
