<template>
  <div class="min-h-screen bg-[url(/images/hero.webp)] mask-b-from-60%">
    <div class="relative bg-black/70 min-h-screen overflow-hidden">
      <div
        class="min-h-screen flex flex-col gap-8 justify-center max-w-5xl mx-auto"
      >
        <div class="text-7xl/24 font-bold w-7/12">
          Creating a Better
          <span class="text-primary">IT Solutions.</span>
        </div>
        <p class="text-base/loose w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos
          delectus unde iure molestias harum cum repudiandae reiciendis corrupti
          iste placeat ex impedit.
        </p>

        <div>
          <UButton variant="outline" size="xl">Contáctanos</UButton>
        </div>
      </div>

      <div class="absolute top-0 -right-96 -rotate-45">
        <NuxtImg src="/images/circuito.png" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
