module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Un coin de pixel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/stylesheets/app.scss'
  ],
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader',
      [
        '@/assets/stylesheets/app/settings/*.scss',
        '@/assets/stylesheets/app/tools/*.scss',
        '@/assets/stylesheets/app/components/*.scss',
        'node_modules/sass-em/_em.scss',
        'node_modules/sass-rem/_rem.scss',
        'node_modules/sass-mq/_mq.scss',
        'node_modules/inuitcss/tools/*.scss',
      ]
    ],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
