<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#000a0c" }, // Color de tu tema
    { name: "robots", content: "index, follow" },
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.ico" },
    { rel: "canonical", href: "https://altagamasrl.com" }, // Reemplaza con tu URL real
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Alta Gama S.R.L",
        url: "https://tudominio.com",
        logo: "https://tudominio.com/images/logo.png",
        description: "Especialistas en soluciones IT innovadoras para empresas",
        foundingDate: "2010", // Ajusta según tu año de fundación
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tu dirección",
          addressLocality: "Ciudad",
          addressRegion: "Provincia/Estado",
          postalCode: "Código Postal",
          addressCountry: "País",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+tu-numero",
          contactType: "customer service",
          email: "contacto@altagama.com",
          areaServed: "País o región",
        },
        sameAs: [
          "https://facebook.com/tupagina",
          "https://linkedin.com/company/tuempresa",
          "https://twitter.com/tuempresa",
        ],
      }),
    },
  ],
});
useSeoMeta({
  title: "Alta Gama S.R.L",
  ogTitle: "Alta Gama S.R.L",
  description:
    "Especialistas en soluciones IT innovadoras para empresas que buscan transformar su infraestructura tecnológica con seguridad y eficiencia.",
  ogDescription:
    "Especialistas en soluciones IT innovadoras para empresas que buscan transformar su infraestructura tecnológica con seguridad y eficiencia.",
  ogImage: "/images/logo.png",
  twitterCard: "summary_large_image",

  ogUrl: "https://twitter.com/tuempresa",
  twitterTitle: "Alta Gama S.R.L",
  twitterDescription:
    "Especialistas en soluciones IT innovadoras para empresas que buscan transformar su infraestructura tecnológica con seguridad y eficiencia.",
  twitterImage: "/images/logo.png",
});
</script>
