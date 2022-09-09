<script>
  import '$lib/global.css'
  import 'virtual:uno.css'

  export let data

  const { bg, logo } = data.content
</script>

<svelte:head>
  <title>{data.content.title}</title>
  <link rel="icon" href="API_URL/attachments/{data.content.favicon}" />
</svelte:head>


{#if bg}
  <div class="fixed -z-1 w-full h-screen bg-no-repeat bg-cover bg-center" style:background-image="url(API_URL/attachments/{bg}?w=1920)" />
{/if}

<div class="h-screen flex flex-col items-center justify-center">
  {#if logo}
    <img src="API_URL/attachments/{logo}?w=310" alt="Logo" class="" />
  {/if}
</div>


<slot />



