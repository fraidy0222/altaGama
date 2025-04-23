<template>
  <div
    class="min-h-screen bg-[url(/images/hero.webp)] mask-b-from-30% bg-cover bg-center bg-no-repeat bg-fixed"
  >
    <div class="relative bg-black/70 min-h-screen overflow-hidden">
      <div
        class="min-h-screen flex flex-col gap-1 justify-center max-w-7xl mx-auto px-6"
      >
        <div class="mx-auto max-w-7xl lg:mx-0 w-full">
          <!-- Added w-full here -->
          <!-- Badge superior -->
          <div class="mb-8 flex items-center gap-x-4">
            <span
              class="relative z-10 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Innovación Tecnológica
            </span>
            <span class="text-gray-400 text-sm">Desde 2012</span>
          </div>
        </div>

        <!-- Título principal -->
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Transformamos <span class="text-primary">ideas</span> en
          <span class="relative whitespace-nowrap">
            <span class="relative text-primary">soluciones</span>
            <svg
              class="absolute left-0 top-full h-[0.4em] w-full text-primary"
              viewBox="0 0 200 20"
            >
              <path fill="currentColor" d="M0,10 C50,18 150,2 200,10" />
            </svg>
          </span>
          digitales
        </h1>

        <!-- Descripción -->
        <p class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl">
          Especialistas en infraestructura IT, seguridad y transformación
          digital para empresas que buscan escalar con tecnología confiable.
        </p>

        <!-- Botones CTA -->
        <div class="mt-10 flex flex-wrap gap-6">
          <UButton
            size="xl"
            class="bg-primary text-background hover:bg-primary/90 transition-all group"
            trailing-icon="i-heroicons-arrow-right"
          >
            Explorar servicios
          </UButton>

          <UButton
            size="xl"
            variant="outline"
            class="text-white border-gray-600 hover:border-primary hover:text-primary"
            leading-icon="i-heroicons-play"
          >
            Ver video
          </UButton>
        </div>
      </div>

      <div class="absolute top-0 -right-96 -rotate-45">
        <NuxtImg src="/images/circuito.png" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
