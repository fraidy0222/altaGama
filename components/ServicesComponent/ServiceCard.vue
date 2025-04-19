<template>
  <div
    class="group relative overflow-hidden bg-background-accent rounded-xl p-6 transition-all duration-300 hover:border-primary border border-transparent hover:shadow-[0_0_20px_rgba(19,246,229,0.15)] h-full flex flex-col"
  >
    <!-- Efecto de fondo animado -->
    <div
      class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"
    ></div>

    <div class="relative z-10 flex flex-col h-full">
      <!-- Icono del servicio -->
      <div
        class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
      >
        <UIcon :name="service.icon" class="w-6 h-6" />
      </div>

      <!-- Título y descripción -->
      <h3 class="text-xl font-semibold text-white mb-2">{{ service.title }}</h3>
      <p class="text-gray-300 mb-4 flex-grow">{{ service.description }}</p>

      <!-- Categoría -->
      <div class="mt-auto">
        <div class="flex justify-between items-center">
          <UBadge
            :label="service.category"
            variant="subtle"
            class="bg-primary/10 text-primary"
          />
          <UIcon
            name="i-heroicons-arrow-right-circle"
            class="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>
