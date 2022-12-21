<script>
  import '$lib/global.css'
  import 'virtual:uno.css'

  export let data

  const { bg, logo, bg_video_portrait, bg_video_landscape } = data.content

  let muted = true
</script>

<svelte:head>
  <title>{data.content.title}</title>
  <link rel="icon" href="API_URL/attachments/{data.content.favicon}" />
</svelte:head>

{#if bg}
  <div class="fixed -z-1 w-full h-screen bg-no-repeat bg-cover bg-center" style:background-image="url(API_URL/attachments/{bg}?w=1920)" />
{/if}

{#if bg_video_portrait}
  <video autoplay md:hidden {muted} loop playsinline class="fixed -z-1 w-full h-screen object-cover">
    <source src="API_URL/attachments/{bg_video_portrait}" type="video/mp4" />
  </video>
  
  <button on:click={() => muted =! muted} class="fixed bottom-4 right-4 w-10 h-10 flex justify-center items-center z-1">
    {#if muted}
    <span class="text-20px i-clarity:volume-mute-solid"></span>
    {:else}
    <span class="text-20px i-clarity:volume-up-solid"></span>
    {/if}
  </button>
  
{/if}

{#if bg_video_landscape}
  <video autoplay hidden md:block {muted} loop playsinline class="fixed -z-1 w-full h-screen object-cover">
    <source src="API_URL/attachments/{bg_video_landscape}" type="video/mp4" />
  </video>

  <button on:click={() => muted =! muted} class="fixed bottom-4 right-4 w-10 h-10 flex justify-center items-center z-1">
    {#if muted}
    <span class="text-20px i-clarity:volume-mute-solid"></span>
    {:else}
    <span class="text-20px i-clarity:volume-up-solid"></span>
    {/if}
  </button>
{/if}

<div class="h-screen flex flex-col items-center justify-center">
  {#if logo}
    <!-- <img src="API_URL/attachments/{logo}?w=310" alt="Logo" class="" /> -->
  {/if}
</div>


<slot />



