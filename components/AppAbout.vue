<template>
  <section ref="aboutSection" class="relative overflow-hidden bg-background">
    <!-- Efecto de fondo abstracto -->
    <div class="absolute inset-0 opacity-5">
      <div
        ref="bgPattern"
        class="absolute inset-0 bg-[radial-gradient(#13f6e5_1px,transparent_1px)] [background-size:16px_16px]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <!-- Encabezado -->
      <div class="text-center mb-16 md:mb-20">
        <span
          ref="badge"
          class="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4"
        >
          Nuestra Historia
        </span>
        <h2 ref="title" class="text-4xl md:text-5xl font-bold text-white mb-4">
          Innovación Tecnológica <span class="text-primary">Desde 2010</span>
        </h2>
        <p ref="description" class="mx-auto max-w-2xl text-xl text-gray-300">
          Liderando la transformación digital con soluciones personalizadas y un
          equipo de expertos apasionados.
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        <!-- Imagen con efecto -->
        <div ref="AboutImage" class="relative lg:w-1/2 w-full">
          <div class="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              class="w-full h-auto object-cover"
              src="/images/aboutUs1.jpg"
              alt="Equipo de trabajo"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background-accent/80 to-transparent"
            />
            /
          </div>
          <div
            class="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/10 blur-xl"
          />

          <!-- Badge de experiencia -->
          <div
            ref="yearsExperience"
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
        <div ref="textContenido" class="lg:w-1/2 w-full mt-10 lg:mt-0">
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

            <!-- List of Features -->
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
              trailing-icon="i-heroicons-arrow-right-20-solid"
            >
              Conoce nuestro equipo
            </UButton>

            <UButton
              size="xl"
              variant="outline"
              class="border-gray-600 hover:border-primary text-white hover:text-primary"
              trailing-icon="i-heroicons-check-badge"
            >
              Nuestras certificaciones
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

const aboutSection = ref(null);
const bgPattern = ref(null);
const badge = ref(null);
const title = ref(null);
const description = ref(null);
const AboutImage = ref(null);
const yearsExperience = ref(null);
const textContenido = ref(null);

onMounted(() => {
  // Configuración global de GSAP
  $gsap.defaults({
    ease: "power3.out",
    duration: 1,
  });

  // Animación del fondo
  $gsap.from(bgPattern.value, {
    scale: 0.95,
    opacity: 0,
    duration: 2,
    ease: "sine.out",
  });

  // Animación del contenido
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection.value,
      start: "top 75%",
      toggleActions: "play none none none",
      markers: false, // Cambiar a true para desarrollo
    },
  });

  tl.from(badge.value, {
    y: 30,
    opacity: 0,
    duration: 0.8,
  })
    .from(
      title.value,
      {
        y: 40,
        opacity: 0,
        duration: 1,
      },
      "-=0.3"
    )
    .from(
      description.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      AboutImage.value,
      {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.2)",
      },
      "-=0.5"
    )
    .from(
      textContenido.value,
      {
        x: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      yearsExperience.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "bounce.out",
      },
      "-=0.7"
    );
});

onUnmounted(() => {
  $gsap.set(
    [
      aboutSection.value,
      bgPattern.value,
      badge.value,
      title.value,
      description.value,
      AboutImage.value,
      yearsExperience.value,
      textContenido.value,
    ],
    { clearProps: true }
  );
});
</script>
