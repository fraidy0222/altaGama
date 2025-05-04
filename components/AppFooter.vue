<template>
  <footer class="bg-background-accent border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-10 md:py-12 lg:px-8">
      <!-- Grid principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Columna logo y descripción -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <NuxtImg src="/images/logo.png" class="w-12 h-12" alt="Logo" />
            <span class="text-2xl font-bold text-white">Alta Gama</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-md">
            Especialistas en soluciones IT innovadoras para empresas que buscan
            transformar su infraestructura tecnológica con seguridad y
            eficiencia.
          </p>

          <!-- Redes sociales -->
          <div class="flex gap-4 mt-6">
            <IconsSocial />
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3
            class="text-sm font-semibold text-white uppercase tracking-wider mb-6"
          >
            Enlaces rápidos
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <ULink
                :to="link.href"
                class="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                {{ link.name }}
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h3
            class="text-sm font-semibold text-white uppercase tracking-wider mb-6"
          >
            Contacto
          </h3>
          <address class="not-italic text-gray-400 text-sm space-y-3">
            <div class="flex items-start gap-3">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
              />
              <span>Av. Tecnológica 1234, Ciudad Digital</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary" />
              <span>+1 234 567 890</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary" />
              <span>contacto@altagama.com</span>
            </div>
          </address>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p class="text-gray-500 text-sm">
            &copy; {{ new Date().getFullYear() }} Alta Gama. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/" },
  { name: "Sobre Nosotros", href: "/" },
  { name: "Equipo", href: "/" },
  { name: "Clientes", href: "/" },
  { name: "Contacto", href: "/" },
];
</script>
