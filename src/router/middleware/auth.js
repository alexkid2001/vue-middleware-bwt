export default function auth ({ next, cookie }) {
  if (cookie.get('loggedIn') !== 'true') {
    return next({
      name: 'Dummy'
    })
  }

  return next()
}
