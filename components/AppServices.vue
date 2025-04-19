<template>
  <div class="relative py-16 bg-background">
    <!-- Efecto de partículas o fondo abstracto -->
    <div
      class="absolute inset-0 opacity-10 bg-[url('/images/pattern.jpg')] bg-cover"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Soluciones Tecnológicas <span class="text-primary">a Medida</span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          Innovación y eficiencia para transformar tu infraestructura IT
        </p>
      </div>

      <!-- Grid de servicios (el que te gustó) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        <!-- Servicio 1 -->
        <div
          class="group relative overflow-hidden bg-background-accent rounded-xl p-6 transition-all duration-300 hover:border-primary border border-transparent hover:shadow-[0_0_20px_rgba(19,246,229,0.15)]"
        >
          <div
            class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"
          ></div>
          <div class="relative z-10">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h4 class="mb-3 text-xl font-semibold text-white">
              Reparación de Servidores
            </h4>
            <p class="text-gray-300">
              Diagnóstico y solución de fallas en hardware y software de
              servidores con garantía extendida.
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

        <!-- Servicio 2 -->
        <div
          class="group relative overflow-hidden bg-background-accent rounded-xl p-6 transition-all duration-300 hover:border-primary border border-transparent hover:shadow-[0_0_20px_rgba(19,246,229,0.15)]"
        >
          <div
            class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"
          ></div>
          <div class="relative z-10">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 class="mb-3 text-xl font-semibold text-white">
              Virtualización
            </h4>
            <p class="text-gray-300">
              Implementación de soluciones de virtualización para optimizar tus
              recursos de hardware.
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

        <!-- Servicio 3 -->
        <div
          class="group relative overflow-hidden bg-background-accent rounded-xl p-6 transition-all duration-300 hover:border-primary border border-transparent hover:shadow-[0_0_20px_rgba(19,246,229,0.15)]"
        >
          <div
            class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary opacity-10 transition-all duration-500 group-hover:scale-150"
          ></div>
          <div class="relative z-10">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h4 class="mb-3 text-xl font-semibold text-white">
              Seguridad Informática
            </h4>
            <p class="text-gray-300">
              Protección avanzada contra amenazas digitales con monitoreo 24/7 y
              respuesta inmediata.
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

      <!-- Botón CTA opcional -->
      <div class="text-center mt-16">
        <UButton to="/servicios" size="xl" trailing-icon="i-lucide:arrow-right"
          >Ver todos los servicios
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>
