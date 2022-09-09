import { error } from '@sveltejs/kit'

export async function load({url, parent}) {
  const data = await fetch(`API_URL/page?path=${url.pathname}`, {
    headers: {
      'Authorization': `Bearer SITE_TOKEN`,
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(e => {throw error(404, 'Not found')})
  return Object.assign(data, {site: await parent()})
}