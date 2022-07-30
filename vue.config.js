// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  transpileDependencies: true,
  pwa: {
    name: 'Birch Farm Camping & Fishing',
    themeColor: '#006400',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    display: 'standalone',

    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: './src/registerServiceWorker.js',
    //   // ...other Workbox options...
    // }
  }
}
