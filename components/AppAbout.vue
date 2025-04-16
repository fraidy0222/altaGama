<template>
  <section class="max-w-5xl mx-auto md:py-18 relative">
    <!-- <div class="absolute top-0 left-0">
      <NuxtImg src="/images/ai.png" />
    </div> -->

    <div class="flex items-center justify-center">
      <div class="w-full px-4">
        <div class="max-w-xl flex flex-col mx-auto text-center">
          <h4 class="text-md font-semibold mb-3 text-primary uppercase">
            Sobre Nosotros
          </h4>
          <div>
            <h1 class="text-4xl font-semibold">Soluciones Informáticas</h1>
            <p class="text-xl mt-3 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              nesciunt ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="/images/aboutUs1.jpg"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Before they sold out <br class="hidden lg:inline-block" />readymade
          gluten
        </h1>
        <p class="mb-8 leading-relaxed text-gray-300">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div class="flex justify-center">
          <UButton
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            variant="outline"
            >Saber Más</UButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
