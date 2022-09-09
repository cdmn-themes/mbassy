<script>
  import '$lib/global.css'
  import 'virtual:uno.css'

  export let data
</script>

<svelte:head>
  <title>{data.content.title}</title>
  <link rel="icon" href="API_URL/attachments/{data.content.favicon}" />
</svelte:head>


<slot />



