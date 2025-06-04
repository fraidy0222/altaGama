<template>
  <section
    id="about"
    ref="aboutSection"
    class="relative overflow-hidden bg-background"
    itemscope
    itemtype="https://schema.org/AboutPage"
  >
    <!-- Efecto de fondo abstracto con aria-hidden -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <div
        ref="bgPattern"
        class="absolute inset-0 bg-[radial-gradient(#13f6e5_1px,transparent_1px)] [background-size:16px_16px]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <!-- Encabezado con microdatos -->
      <div class="text-center mb-16 md:mb-20">
        <span
          ref="badge"
          class="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4"
          itemprop="description"
        >
          Nuestra Historia
        </span>
        <h1
          ref="title"
          class="text-4xl md:text-5xl font-bold text-white mb-4"
          itemprop="headline"
        >
          Innovación Tecnológica
          <span class="text-primary" itemprop="name">Desde 2010</span>
        </h1>
        <p
          ref="description"
          class="mx-auto max-w-2xl text-xl text-gray-300"
          itemprop="abstract"
        >
          Liderando la transformación digital con soluciones personalizadas y un
          equipo de expertos apasionados.
        </p>
      </div>

      <!-- Contenido principal con schema.org -->
      <div
        class="flex flex-col lg:flex-row items-center gap-12 xl:gap-20"
        itemscope
        itemtype="https://schema.org/Organization"
      >
        <!-- Imagen con metadatos -->
        <div class="relative lg:w-1/2 w-full">
          <div
            ref="AboutImage"
            class="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <!-- <NuxtImg
              class="w-full h-auto object-cover"
              src="/images/aboutUs1.jpg"
              alt="Equipo de profesionales de IT trabajando"
              itemprop="image"
              loading="lazy"
            /> -->
            <img
              class="w-full h-auto object-cover"
              src="/images/aboutUs1.jpg"
              alt="Equipo de profesionales de IT trabajando"
              itemprop="image"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background-accent/80 to-transparent"
              aria-hidden="true"
            />
          </div>

          <!-- Badge de experiencia con microdatos -->
          <div
            ref="yearsExperience"
            class="absolute -bottom-5 -left-5 bg-background-accent border border-primary/30 rounded-lg px-6 py-3 shadow-lg"
            itemprop="foundingDate"
            content="2010-01-01"
          >
            <div class="text-center">
              <div
                class="text-3xl font-bold text-primary"
                itemprop="yearsActive"
              >
                12+
              </div>
              <div class="text-sm font-medium text-white">
                Años de experiencia
              </div>
            </div>
          </div>
        </div>

        <!-- Texto contenido con semántica mejorada -->
        <div ref="textContenido" class="lg:w-1/2 w-full mt-10 lg:mt-0">
          <h2
            class="text-2xl md:text-3xl font-bold text-white mb-6"
            itemprop="slogan"
          >
            Más que una empresa, somos tu
            <span class="text-primary" itemprop="knowsAbout"
              >socio tecnológico</span
            >
          </h2>

          <div class="space-y-5 text-gray-300" itemprop="description">
            <p>
              Fundada en <time datetime="2010">2010</time>, nuestra empresa ha
              crecido de la mano con la evolución tecnológica, ofreciendo
              soluciones robustas y escalables para empresas de todos los
              tamaños.
            </p>

            <p>
              Nos especializamos en entender las necesidades únicas de cada
              cliente, desarrollando infraestructuras IT que impulsan la
              productividad y aseguran la continuidad del negocio.
            </p>

            <div class="pt-2">
              <ul class="space-y-3">
                <li
                  class="flex items-start"
                  itemprop="knowsAbout"
                  itemscope
                  itemtype="https://schema.org/Thing"
                >
                  <svg
                    class="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span itemprop="name"
                    >Equipo certificado en las principales tecnologías</span
                  >
                </li>
                <li
                  class="flex items-start"
                  itemprop="knowsAbout"
                  itemscope
                  itemtype="https://schema.org/Thing"
                >
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

                  <span itemprop="name"
                    >Soporte 24/7 con tiempos de respuesta garantizados</span
                  >
                </li>
                <li
                  class="flex items-start"
                  itemprop="knowsAbout"
                  itemscope
                  itemtype="https://schema.org/Thing"
                >
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

                  <span itemprop="name">Enfoque en seguridad y compliance</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Botones con semántica -->
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <!-- <UButton

              size="xl"
              class="bg-primary text-background hover:bg-primary/90 transition-all flex items-center justify-center"
              trailing-icon="i-heroicons-arrow-right-20-solid"
              aria-label="Conoce a nuestro equipo de expertos"
              itemprop="url"
            >
              Conoce nuestro equipo
            </UButton> -->

            <!-- <UButton
              size="xl"
              variant="outline"
              class="border-gray-600 hover:border-primary text-white hover:text-primary flex items-center justify-center"
              trailing-icon="i-heroicons-check-badge"
              aria-label="Ver nuestras certificaciones profesionales"
              itemprop="url"
            >
              Nuestras certificaciones
            </UButton> -->
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

// onUnmounted(() => {
//   $gsap.set(
//     [
//       aboutSection.value,
//       bgPattern.value,
//       badge.value,
//       title.value,
//       description.value,
//       AboutImage.value,
//       yearsExperience.value,
//       textContenido.value,
//     ],
//     { clearProps: true }
//   );
// });
</script>
