<template>
  <section class="relative bg-background-accent py-16 md:py-24 overflow-hidden">
    <!-- Efecto de fondo -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(#13f6e5_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Encabezado -->
      <div class="text-center mb-12 md:mb-16">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4"
        >
          Nuestros Clientes
        </span>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          Confiado por <span class="text-primary">+50 empresas</span>
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-300">
          Desde startups innovadoras hasta corporaciones establecidas
        </p>
      </div>

      <!-- Grid de clientes -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="flex items-center justify-center p-4 h-32 bg-background rounded-lg border border-gray-800 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(19,246,229,0.1)]"
        >
          <!-- Versión con logo -->
          <NuxtImg
            v-if="client.logo"
            :src="client.logo"
            class="w-full h-auto max-h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
            :alt="`Logo ${client.name}`"
          />

          <!-- Versión sin logo (texto) -->
          <div v-else class="text-center">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-2"
            >
              <UIcon name="i-heroicons-building-office" class="w-6 h-6" />
            </div>
            <span class="text-sm font-medium text-white">{{
              client.name
            }}</span>
          </div>
        </div>
      </div>

      <!-- Testimonios -->
      <div class="max-w-4xl mx-auto mt-16">
        <div
          class="bg-background rounded-xl border border-gray-800 p-8 md:p-10 relative overflow-hidden"
        >
          <div
            class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-xl"
          ></div>
          <div class="relative z-10">
            <p class="text-lg md:text-xl text-white italic mb-6">
              "Su equipo demostró un profundo conocimiento técnico y entregó
              soluciones que superaron nuestras expectativas."
            </p>
            <div class="flex items-center">
              <span class="text-primary font-medium">María González</span>
              <span class="mx-2 text-gray-500">|</span>
              <span class="text-gray-400"
                >Directora de TI en
                {{ clients[0].name || "Empresa Cliente" }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: "TechCorp", logo: "/images/clients/client-1.png" },
  { name: "InnovaSoft", logo: "/images/clients/client-2.png" },
  { name: "Consultoría Digital" }, // Sin logo
  { name: "CloudNet Solutions", logo: "/images/clients/client-4.png" },
  { name: "Servicios Financieros Globales" }, // Sin logo
  { name: "DataFlow", logo: "/images/clients/client-6.png" },
  { name: "Logística Integrada" }, // Sin logo
  { name: "VirtualX", logo: "/images/clients/client-8.png" },
  { name: "Consultoría Estratégica" }, // Sin logo
  { name: "ByteWorks", logo: "/images/clients/client-10.png" },
];
</script>
