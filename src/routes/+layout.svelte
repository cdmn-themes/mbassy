<script>
  import '$lib/global.css'
  import 'virtual:uno.css'

  export let data

  const { bg, logo, bg_video_portrait, bg_video_landscape } = data.content
</script>

<svelte:head>
  <title>{data.content.title}</title>
  <link rel="icon" href="API_URL/attachments/{data.content.favicon}" />
</svelte:head>

{#if bg}
  <div class="fixed -z-1 w-full h-screen bg-no-repeat bg-cover bg-center" style:background-image="url(API_URL/attachments/{bg}?w=1920)" />
{/if}

{#if bg_video_portrait}
  <video autoplay md:hidden muted loop playsinline class="fixed -z-1 w-full h-screen object-cover">
    <source src="API_URL/attachments/{video}" type="video/mp4" />
  </video>
{/if}

{#if bg_video_landscape}
  <video autoplay hidden md:block muted loop playsinline class="fixed -z-1 w-full h-screen object-cover">
    <source src="API_URL/attachments/{video}" type="video/mp4" />
  </video>
{/if}

<div class="h-screen flex flex-col items-center justify-center">
  {#if logo}
    <img src="API_URL/attachments/{logo}?w=310" alt="Logo" class="" />
  {/if}
</div>


<slot />



