export default function({store, redirect}) {
  console.log('middle');
  if (!store.getters.hasToken) {
    redirect('/login?message=no_login')
  }
}
