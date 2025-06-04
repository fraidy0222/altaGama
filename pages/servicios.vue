<template>
  <div class="relative py-16 mt-10 bg-background min-h-screen">
    <!-- Efecto de fondo mejorado -->
    <div
      class="absolute inset-0 opacity-10 bg-[url('/images/pattern.jpg')] bg-cover bg-center"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Encabezado mejor estructurado -->
      <div class="text-center mb-16">
        <span
          ref="title"
          class="inline-block px-4 py-1 text-sm font-semibold text-primary uppercase bg-primary/10 rounded-full mb-4"
        >
          Soluciones Integrales
        </span>
        <h1
          ref="subtitle"
          class="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Nuestros <span class="text-primary">Servicios</span> Tecnológicos
        </h1>
        <p ref="description" class="text-lg text-gray-300 max-w-3xl mx-auto">
          Descubre cómo podemos optimizar tu infraestructura IT con soluciones a
          medida
        </p>
      </div>

      <!-- Sistema de filtrado mejorado -->
      <div ref="inputField" class="card grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Barra de búsqueda -->
        <UInput
          v-model="searchQuery"
          placeholder="Buscar servicios..."
          icon="i-heroicons-magnifying-glass"
          size="lg"
          class="w-full text-primary"
        />

        <!-- Selector de categoría -->
        <USelect
          v-model="selectedCategory"
          :items="categories"
          value-key="id"
          placeholder="Todas las categorías"
          size="lg"
          class="w-full"
        />
      </div>

      <!-- Grid de servicios responsivo -->
      <div
        v-if="filteredServices.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ServiceCard
          v-for="service in paginatedServices"
          :key="service.id"
          :service="service"
          class="service-card"
        />
      </div>

      <!-- Mensaje cuando no hay resultados -->
      <div v-else class="text-center py-12">
        <UIcon
          name="i-heroicons-magnifying-glass"
          class="w-12 h-12 mx-auto text-gray-400 mb-4"
        />
        <h3 class="text-xl font-medium text-white">
          No se encontraron servicios
        </h3>
        <p class="text-gray-400 mt-2">Intenta con otros términos de búsqueda</p>
      </div>

      <!-- Paginación mejorada -->
      <div
        v-if="filteredServices.length > pageSize"
        class="mt-12 flex justify-center"
      >
        <UPagination
          v-model="page"
          :page-count="pageSize"
          :total="filteredServices.length"
          :ui="{
            wrapper: 'flex items-center gap-1',
            rounded: '!rounded-full min-w-8 h-8',
            default: {
              activeButton: {
                variant: 'outline',
              },
            },
          }"
          @update:page="changePage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import ServiceCard from "~/components/ServicesComponent/ServiceCard.vue";
import servicesData from "~/assets/data/services.json";

const { $gsap } = useNuxtApp();

const serviciosSection = ref(null);
const title = ref(null);
const subtitle = ref(null);
const description = ref(null);
const inputField = ref(null);

// Estado para filtros
const services = ref(servicesData);
const searchQuery = ref("");
const selectedCategory = ref("Todas");
const page = ref(1);
const pageSize = ref(6); // Cambiado a ref para mayor flexibilidad

const initAnimations = () => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: serviciosSection.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl.from(title.value, {
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
    )
    .from(
      description.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    )
    .from(
      inputField.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    );

  const cards = $gsap.utils.toArray(".service-card");

  cards.forEach((card, index) => {
    $gsap.from(card, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.25,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      ease: "power2.inOut",
    });
  });
};

onMounted(() => {
  initAnimations();
});

// Categorías disponibles
const categories = computed(() => {
  const uniqueCategories = [...new Set(services.value.map((s) => s.category))];
  return ["Todas", ...uniqueCategories];
});

// Servicios filtrados
const filteredServices = computed(() => {
  let result = services.value;

  // Filtrar por categoría
  if (selectedCategory.value && selectedCategory.value !== "Todas") {
    result = result.filter((s) => s.category === selectedCategory.value);
  }

  // Filtrar por búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
    );
  }

  return result;
});

// Servicios paginados
const paginatedServices = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredServices.value.slice(start, end);
});

// Cambiar página
// Cambia la función changePage así:
const changePage = (newPage) => {
  page.value = newPage;

  // Verifica que el elemento existe antes de usarlo
  nextTick(() => {
    if (serviciosSection.value) {
      window.scrollTo({
        top: serviciosSection.value.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
};
// Resetear página al filtrar
watch([searchQuery, selectedCategory], () => {
  page.value = 1;
});
</script>

<style scoped>
.card {
  margin-bottom: 48px;
}
</style>
