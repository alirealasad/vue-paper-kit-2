module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'vue-paper-kit-2',
    workboxOptions:{
      swSrc: "./service-worker.js"
   }
  }
}
