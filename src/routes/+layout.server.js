import { redirect } from '@sveltejs/kit'
export function load({locals, request}) {
  if (request.url.includes('/en')) return
  if (request.url.includes('/de')) return
  
  if (locals.acceptLang && locals.acceptLang.startsWith('de')) throw redirect(302, '/de')
  else throw redirect(302, '/en')
}