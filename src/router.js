import uniloc from 'uniloc-case-sensitive'

let router = uniloc()

export function configureRouter(routes, aliases) {
  router = uniloc(routes, aliases)
}

export default function getRouter() {
  return router
}
