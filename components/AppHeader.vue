<template>
  <header class="relative">
    <div class="fixed top-0 left-0 right-0 z-10 px-4 lg:px-0 bg-background">
      <div class="flex h-18 items-center justify-between max-w-5xl mx-auto">
        <div class="flex items-center justify-center">
          <NuxtImg src="/images/logo.png" class="w-12 h-12" />
          <span class="text-2xl font-bold">Alta Gama</span>
        </div>
        <nav>
          <ul class="flex items-center gap-6 text-sm font-medium">
            <li>Servicios</li>
            <li>Equipo</li>
            <li>Sobre Nosotros</li>
          </ul>
        </nav>
        <div>
          <UButton icon="i-lucide-twitter" variant="ghost" />
          <UButton icon="i-lucide-youtube" variant="ghost" />
          <UButton icon="i-lucide-facebook" variant="ghost" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>
