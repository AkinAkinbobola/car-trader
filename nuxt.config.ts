// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
        '@vueuse/nuxt',
        "@nuxtjs/supabase"
    ],
    colorMode: {
        classSuffix: ''
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})