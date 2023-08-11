const authBtns = ['add', 'edit', 'delete', 'view']
const install = (app) => {
  app.directive('auth', {
    mounted(el, binding) {
      const code = binding.value
      let hasAuth = true
      if (Array.isArray(code)) {
        hasAuth = code.some((codeItem) => authBtns.includes(codeItem))
      } else {
        hasAuth = authBtns.includes(code)
      }
      if (!hasAuth) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    },
  })
}

export default { install }
