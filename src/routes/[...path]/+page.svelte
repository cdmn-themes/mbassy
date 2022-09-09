<script>
  
  import Burger from '~/shared/burger.svelte'
  let open
  export let data

  function scrollToId(id) {
    open = false
    let el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
</script>

<svelte:window />

{#if bg}
  <div class="fixed -z-1 w-full h-screen bg-no-repeat bg-cover bg-center" style:background-image="url(/blobs/{bg}?w=1920)" />
{/if}


<div class="fixed top-10 left-2 lg:left-7 z-102">
  <Burger {open} on:click={() => open = !open}/>
</div>

<div class="fixed z-10 right-12 top-10">
  <a href={booking_link} target="_blank" class="px-7 py-2 bg-white hover:bg-black hover:text-white">
    {#if locale == 'de'}
      Jetzt reservieren
    {:else}
      Book now
    {/if}
  </a>
  {#if locale == 'de'}
    <a href='en' class="inline-block px-7 py-2 hover:bg-white text-white bg-black hover:text-black">EN</a>
  {:else}
    <a href='de' class="inline-block px-7 py-2 hover:bg-white text-white bg-black hover:text-black">DE</a>
  {/if}
</div>

<nav class:open class="text-xl fixed top-0 left-0 w-350px bg-white h-full z-100 flex justify-center flex-col pl-6">
  <div class="relative">
    {#each sections as section}
      <a on:click|preventDefault={scrollToId(section.label)} href="#{section.label}" class="block py-3">
        {section.label}
      </a>
    {/each}
    {#if instagram}
      <a href="https://instagram.com/{instagram}" class="block py-3" target="_blank">
        Instagram<br>
        <small>@{instagram}</small>
      </a>
    {/if}
    {#if contact}
      <div class="contact">
        {@html contact}
      </div>
    {/if}
    {#if booking_link}
      <div class="text-center mt-12">
        <a href={booking_link} target="_blank" class="px-7 py-2 bg-black text-white">
          {#if locale == 'de'}
            Jetzt reservieren
          {:else}
            Book now
          {/if}
        </a>
      </div>
    {/if}
  </div>
</nav>

<main class:open>
  <div class="h-screen flex flex-col items-center justify-center">
    {#if logo}
      <img src="API_URL/attachments/{logo}?w=310" alt="Logo" class="" />
    {/if}
  </div>
  {#each sections as section}
    <section class="relative min-h-screen" id={section.label}>
      {#if section.bg}
        <div class="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed" style:background-image="url(/blobs/{section.bg}?w=1920)" />
      {/if}
      <div class="content lg:w-700px bg-white/88 flex min-h-screen items-center py-26 px-11 lg:px-22 relative">
        <div class="w-full">
          {@html section.content}
        </div>
      </div>
    </section>
  {/each}
</main>

<style>
  nav {
    left: -350px;
    transition: left 0.3s ease-out;
  }
  nav.open {
    left: 0;
  }
  main section .content {
    left: 0;
    transition: left 0.3s ease-out;
  }
  @media (min-width: 1024px) {
    main.open section .content {
      left: 350px;
    }
  }
</style>