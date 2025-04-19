<template>
  <section class="relative overflow-hidden bg-background py-12">
    <!-- Efecto de fondo abstracto -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(#13f6e5_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <!-- Encabezado -->
      <div class="text-center mb-16 md:mb-20">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4"
        >
          Nuestra Historia
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Innovación Tecnológica <span class="text-primary">Desde 2010</span>
        </h2>
        <p class="mx-auto max-w-2xl text-xl text-gray-300">
          Liderando la transformación digital con soluciones personalizadas y un
          equipo de expertos apasionados.
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        <!-- Imagen con efecto -->
        <div class="relative lg:w-1/2 w-full">
          <div class="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              class="w-full h-auto object-cover"
              src="/images/aboutUs1.jpg"
              alt="Equipo de trabajo"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background-accent/80 to-transparent"
            ></div>
          </div>
          <div
            class="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/10 blur-xl"
          ></div>

          <!-- Badge de experiencia -->
          <div
            class="absolute -bottom-5 -left-5 bg-background-accent border border-primary/30 rounded-lg px-6 py-3 shadow-lg"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-primary">12+</div>
              <div class="text-sm font-medium text-white">
                Años de experiencia
              </div>
            </div>
          </div>
        </div>

        <!-- Texto contenido -->
        <div class="lg:w-1/2 w-full mt-10 lg:mt-0">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
            Más que una empresa, somos tu
            <span class="text-primary">socio tecnológico</span>
          </h3>

          <div class="space-y-5 text-gray-300">
            <p>
              Fundada en 2010, nuestra empresa ha crecido de la mano con la
              evolución tecnológica, ofreciendo soluciones robustas y escalables
              para empresas de todos los tamaños.
            </p>

            <p>
              Nos especializamos en entender las necesidades únicas de cada
              cliente, desarrollando infraestructuras IT que impulsan la
              productividad y aseguran la continuidad del negocio.
            </p>

            <div class="pt-2">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg
                    class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Equipo certificado en las principales tecnologías</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    >Soporte 24/7 con tiempos de respuesta garantizados</span
                  >
                </li>
                <li class="flex items-start">
                  <svg
                    class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Enfoque en seguridad y compliance</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <UButton
              size="xl"
              class="bg-primary text-background hover:bg-primary/90 transition-all"
              trailing-icon="i-lucide-arrow-right"
            >
              Conoce nuestro equipo
            </UButton>

            <UButton
              size="xl"
              variant="outline"
              class="border-gray-600 hover:border-primary text-white hover:text-primary"
              trailing-icon="i-lucide-badge-check"
            >
              Nuestras certificaciones
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
