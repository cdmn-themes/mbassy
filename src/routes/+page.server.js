import { redirect } from '@sveltejs/kit'
export function load({locals}) {
  if (locals.acceptLang && locals.acceptLang.startsWith('de')) throw redirect(302, '/de')
  else throw redirect(302, '/en')
}