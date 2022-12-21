<script>
  import Burger from '$lib/burger.svelte'
  import { page } from '$app/stores'
  export let data
  let open
  
  $: locale = $page.url.pathname == '/de' ? 'de' : 'en'

  $: ({booking_link, sections, contact} = data.content)
  $: ({logo} = data.site.content)
  $: ({instagram} = data.site.content)
  function scrollToId(id) {
    open = false
    let el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth'})
    }
  }
</script>

<svelte:window />


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
    <a href='/' class="inline-block px-7 py-2 hover:bg-white text-white bg-black hover:text-black">EN</a>
  {:else}
    <a href='/de' class="inline-block px-7 py-2 hover:bg-white text-white bg-black hover:text-black">DE</a>
  {/if}
</div>

<nav class:open class="text-xl fixed top-0 left-0 w-350px bg-white h-full z-100 flex justify-center flex-col pl-6">
  <div class="relative">
    {#if logo}
      <img src="API_URL/attachments/{logo}?w=310" alt="Logo" class="h-26 md:h-36 lg:h-44" />
    {/if}
    {#each sections || [] as section}
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
  {#each sections as section}
    <section class="relative min-h-screen" style:clip-path="polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" id={section.label}>
      <div class="content md:w-600px  flex min-h-screen items-center relative p-9 md:p-0 md:bg-white">
        <div class="w-full bg-white/90 md:bg-white/80 py-26 px-11 md:px-22">
          {@html section.content}
        </div>
      </div>

      {#if section.bg}
        <div class="fixed -z-1 top-0 left-0 md:left-600px right-0 h-full bg-no-repeat bg-center bg-cover" style:background-image="url(API_URL/attachments/{section.bg}?w=1920)" />
      {/if}
    </section>
  {/each}
</main>

<style>
  .content :global(a[target="_blank"]) {
    background-color: #000;
    color: white;
    padding: 0.5em 1em;
  }
  .content :global(a[target="_blank"])::after {
    content: '↗';
    margin-left: 0.5em;
  }
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