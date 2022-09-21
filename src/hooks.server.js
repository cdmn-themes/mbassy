export async function handle({ event, resolve }) {
  const ua = event.request.headers.get('user-agent')
  const acceptLang = event.request.headers.get('accept-language')
  event.locals.isBot = ua?.includes('Bot') || ua?.includes('bot') || ua?.includes('crawler') || ua?.includes('Crawler')
  event.locals.acceptLang = acceptLang
  return resolve(event);
}