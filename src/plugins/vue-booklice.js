const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
