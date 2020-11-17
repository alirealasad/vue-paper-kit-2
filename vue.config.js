module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'vue-paper-kit-2',
    workboxOptions:{
      swSrc: "src/service-worker.js"
   }
  }
}
