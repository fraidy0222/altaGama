<template>
  <section class="relative bg-background-accent py-18 px-5">
    <div class="max-w-5xl mx-auto relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Text content - moved first for mobile -->
        <div
          class="flex flex-col items-center gap-6 md:gap-8 order-1 lg:order-2"
        >
          <h2
            class="text-4xl md:text-4xl/12 w-full md:w-8/12 lg:w-full text-center font-medium"
          >
            Contamos con la confianza de
            <span class="text-primary">+50 empresas</span>
          </h2>
          <p
            class="text-base/6 w-full sm:w-11/12 md:w-full text-center lg:text-left"
          >
            Nuestra trayectoria se construye con el respaldo de organizaciones
            innovadoras que han elegido nuestras soluciones para impulsar su
            crecimiento.
          </p>
        </div>

        <!-- Images section -->
        <div
          class="flex flex-col items-center lg:col-span-2 mt-2 space-y-6 md:space-y-12 justify-between order-2 lg:order-1"
        >
          <div class="flex flex-wrap justify-center gap-6 md:gap-12">
            <NuxtImg
              src="/images/clients/client-1.png"
              class="w-28 md:w-40 lg:w-42"
            />
            <NuxtImg
              src="/images/clients/client-2.png"
              class="w-28 md:w-40 lg:w-42"
            />
            <NuxtImg
              src="/images/clients/client-3.png"
              class="w-28 md:w-40 lg:w-42"
            />
          </div>
          <div class="flex flex-wrap justify-center gap-6 md:gap-12">
            <NuxtImg
              src="/images/clients/client-4.png"
              class="w-28 md:w-40 lg:w-42"
            />
            <NuxtImg
              src="/images/clients/client-6.png"
              class="w-28 md:w-40 lg:w-42"
            />
            <NuxtImg
              src="/images/clients/client-8.png"
              class="w-28 md:w-40 lg:w-42"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
