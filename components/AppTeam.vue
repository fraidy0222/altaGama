<template>
  <section class="relative bg-background py-16 md:py-24 mb-6 overflow-hidden">
    <!-- Efecto de fondo -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(#13f6e5_1px,transparent_1px)] [background-size:16px_16px]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Encabezado -->
      <div class="text-center mb-12 md:mb-16">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4"
        >
          Nuestro Equipo
        </span>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          Expertos en <span class="text-primary">tecnología</span>
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-300">
          Profesionales certificados con años de experiencia
        </p>
      </div>

      <!-- Grid de miembros - Versión minimalista -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="team-card group relative h-80 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <!-- Imagen que ocupa todo el espacio -->
          <NuxtImg
            :src="member.image"
            class="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            :alt="`Foto de ${member.name}`"
          />

          <!-- Máscara degradada con información -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
          >
            <h3 class="text-xl font-bold text-white mb-1">{{ member.name }}</h3>
            <p class="text-primary">{{ member.position }}</p>
          </div>

          <!-- Efecto hover sutil -->
          <div
            class="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 rounded-xl pointer-events-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { $gsap } = useNuxtApp();

const team = ref([
  {
    name: "Carlos Martínez",
    position: "CEO & Fundador",
    image: "/images/hero.webp",
  },
  {
    name: "Ana Rodríguez",
    position: "Directora de Tecnología",
    image: "/images/hero.webp",
  },
  {
    name: "David Fernández",
    position: "Ingeniero de Sistemas",
    image: "/images/hero.webp",
  },
  {
    name: "Laura Gómez",
    position: "Soporte Técnico Senior",
    image: "/images/hero.webp",
  },
]);

const initAnimations = () => {
  // Animación CORREGIDA para las tarjetas
  const cards = $gsap.utils.toArray(".team-card");
  cards.forEach((card, index) => {
    $gsap.from(card, {
      y: 60, // Menos desplazamiento vertical
      opacity: 0,
      duration: 0.8, // Duración más corta
      delay: index * 0.25, // Retardo más corto entre tarjetas
      scrollTrigger: {
        trigger: card,
        start: "top 85%", // Dispara un poco más abajo
        toggleActions: "restart none none none",
      },
      ease: "power2.inOut", // Easing más suave
    });
  });
};

onMounted(() => {
  initAnimations();
});
</script>
