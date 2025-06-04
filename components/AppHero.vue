<template>
  <div
    :id="id"
    ref="heroSection"
    class="min-h-screen bg-[url(/images/hero-mobile.webp)] md:bg-[url(images/hero-tablet.webp)] lg:bg-[url(images/hero.webp)] mask-b-from-70% bg-cover bg-center bg-no-repeat bg-fixed"
  >
    <div class="relative bg-black/70 min-h-screen overflow-hidden">
      <div
        class="min-h-screen flex flex-col gap-1 justify-center max-w-7xl mx-auto px-6"
      >
        <div class="mx-auto md:max-w-7xl lg:max-w-2xl lg:mx-0 w-full">
          <!-- Added w-full here -->
          <!-- Badge superior -->
          <div class="mb-8 flex items-center gap-x-4">
            <span
              ref="badge"
              class="relative z-10 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Innovación Tecnológica
            </span>
            <span ref="date" class="text-gray-400 text-sm">Desde 2012</span>
          </div>

          <!-- Título principal -->
          <h1 ref="textSplit" class="headline">
            Transformamos <span class="text-primary">ideas</span> en
            <span class="solutions-container">
              <span class="text-primary">soluciones</span>
              <svg
                ref="underlineSvg"
                class="underline-svg"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path
                  ref="underlinePath"
                  class="underline-path"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  d="M0,10 C50,18 150,2 200,10"
                />
              </svg>
            </span>
            <span class="digitales-text">digitales</span>
          </h1>
          <!-- Descripción -->
          <p
            ref="description"
            class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
          >
            Especialistas en infraestructura IT, seguridad y transformación
            digital para empresas que buscan escalar con tecnología confiable.
          </p>

          <!-- Botones CTA -->
          <div ref="primaryButton" class="mt-10 flex flex-wrap gap-6">
            <UButton
              to="/servicios"
              size="xl"
              class="bg-primary text-background hover:bg-primary/90 transition-all group"
              trailing-icon="i-heroicons-arrow-right"
            >
              Explorar servicios
            </UButton>

            <!-- <UButton
              size="xl"
              variant="outline"
              class="text-white border-gray-600 hover:border-primary hover:text-primary"
              leading-icon="i-heroicons-play"
            >
              Ver video
            </UButton> -->
          </div>
        </div>
      </div>

      <div class="absolute hidden lg:flex top-0 -right-96 -rotate-45">
        <!-- <img src="/images/circuito.png" alt="" /> -->
        <NuxtImg src="/images/circuito.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText"; // Importación correcta de SplitText

// Registra el plugin SplitText
gsap.registerPlugin(SplitText);

const heroSection = ref(null);
const badge = ref(null);
const date = ref(null);
const textSplit = ref(null);
const underlineSvg = ref(null);
const underlinePath = ref(null);
const description = ref(null);
const primaryButton = ref(null);

defineProps({
  id: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  initAnimations();
});

const initAnimations = () => {
  document.fonts.ready.then(() => {
    // 1. Verificar que los elementos existen
    if (!textSplit.value || !underlineSvg.value || !underlinePath.value) {
      console.error("Elementos no encontrados");
      return;
    }

    // 2. Configurar SplitText para el título
    const segmenter = new Intl.Segmenter("es", { granularity: "word" });

    // Opción A: Usando SplitText.create() (recomendada)
    const split = new SplitText(textSplit.value, {
      type: "words",
      wordsClass: "word",
      prepareText: (text) => {
        return [...segmenter.segment(text)]
          .map((s) => s.segment)
          .join(String.fromCharCode(8204));
      },
      wordDelimiter: " ", // Simplificado
    });

    // Ocultar palabras inicialmente
    gsap.set(split.words, { opacity: 0, y: 50 });

    // 3. Animación de palabras
    const wordsAnimation = gsap.to(split.words, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "back",
      duration: 0.8,
    });

    // 4. Configurar estado inicial del SVG
    gsap.set(underlineSvg.value, { opacity: 0 });
    gsap.set(underlinePath.value, {
      strokeDasharray: 350,
      strokeDashoffset: 350,
    });

    // 5. Animación del SVG después de las palabras
    wordsAnimation.then(() => {
      const tl = gsap.timeline();
      tl.to(underlineSvg.value, {
        opacity: 1,
        duration: 0.3,
      }).to(
        underlinePath.value,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "<"
      );
    });

    // 6. Limpieza opcional (para evitar memory leaks)
    return () => split.revert();
  });

  gsap.from(badge.value, {
    y: 40,
    opacity: 0,
    duration: 1,
  });
  gsap.from(
    date.value,
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.8"
  );
  gsap.from(
    description.value,
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );
  gsap.from(
    primaryButton.value,
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );
};
</script>

<style>
/* Estilos para las palabras divididas */
.solutions-container {
  position: relative;
  display: inline-block;
  margin-right: 0.5em; /* Añade espacio a la derecha */
}

.digitales-text {
  display: inline; /* Asegura que fluya naturalmente */
  margin-left: -13px; /* Espacio adicional si es necesario */
}

.underline-svg {
  position: absolute;
  left: 0;
  bottom: -9px; /* Ajusta según necesites */
  width: 100%;
  height: 0.4em;
}
/* Estilos base */
.hero-container {
  min-height: 100vh;
  position: relative;
}

.headline {
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1.1;
  color: white;
  letter-spacing: -0.025em;
}

@media (min-width: 640px) {
  .headline {
    font-size: 3.7rem;
  }
}

/* Contenedor para soluciones + SVG */
.solutions-wrapper {
  position: relative;
  display: inline-block;
}

.underline-path {
  vector-effect: non-scaling-stroke;
}

/* Estilos para caracteres animados */
.char {
  display: inline-block;
  position: relative;
  opacity: 0; /* Inicialmente oculto */
  transform: translateY(30px); /* Posición inicial */
}
</style>
