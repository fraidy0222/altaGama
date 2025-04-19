<template>
  <div class="relative py-16 bg-background min-h-screen">
    <!-- Efecto de fondo mejorado -->
    <div
      class="absolute inset-0 opacity-10 bg-[url('/images/pattern.jpg')] bg-cover bg-center"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Encabezado mejor estructurado -->
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1 text-sm font-semibold text-primary uppercase bg-primary/10 rounded-full mb-4"
        >
          Soluciones Integrales
        </span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Nuestros <span class="text-primary">Servicios</span> Tecnológicos
        </h1>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Descubre cómo podemos optimizar tu infraestructura IT con soluciones a
          medida
        </p>
      </div>

      <!-- Sistema de filtrado mejorado -->
      <div class="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Barra de búsqueda -->
        <UInput
          v-model="searchQuery"
          placeholder="Buscar servicios..."
          icon="i-heroicons-magnifying-glass"
          size="lg"
          class="w-full"
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
      <div class="mt-12 flex justify-center">
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
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "~/components/ServicesComponent/ServiceCard.vue";
import servicesData from "~/assets/data/services.json";

// Estado para filtros
const services = ref(servicesData);
const searchQuery = ref("");
const selectedCategory = ref("Todas");
const page = ref(1);
const pageSize = 6;

// Categorías disponibles
const categories = computed(() => [
  "Todas",
  ...new Set(services.value.map((s) => s.category)),
]);

// Servicios filtrados (CORRECCIÓN IMPORTANTE)
const filteredServices = computed(() => {
  let result = services.value;

  // Filtrar por categoría (corregido)
  if (selectedCategory.value && selectedCategory.value !== "Todas") {
    result = result.filter((s) => s.category === selectedCategory.value);
  }

  // Filtrar por búsqueda (corregido)
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

// Servicios paginados (CORRECCIÓN IMPORTANTE)
const paginatedServices = computed(() => {
  const start = (page.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredServices.value.slice(start, end);
});

// Resetear página al filtrar (CORRECCIÓN IMPORTANTE)
watch([searchQuery, selectedCategory], () => {
  page.value = 1;
});
</script>
