<script lang="ts">
  import { copiedLink, links } from '@state';
  import { slide } from 'svelte/transition';
  import { quadOut } from 'svelte/easing';

  export let inputLink: string;
  export let shortLink: string;
  export let id: number;

  $: isCopied = $copiedLink === shortLink;

  function copyShortLink() {
    navigator.clipboard.writeText(shortLink);
    $copiedLink = shortLink;
  }

  function removeShortLink() {
    links.remove(id);
  }
</script>

<article
  class="bg-white rounded-lg | <lg:divide-y-1 lg:(flex items-center justify-between)"
  transition:slide={{ duration: 300, easing: quadOut }}>
  <h3 class="p-4 text-violet-700 whitespace-nowrap overflow-x-auto">{inputLink}</h3>
  <div class="p-4 | flex flex-col gap-4 | lg:(flex-row items-center)">
    <output class="text-cyan"> {shortLink} </output>
    <div class="flex gap-3">
      <button
        class="w-full button px-8 | {isCopied ? 'bg-violet-700' : 'bg-cyan'} rounded-md"
        on:click={copyShortLink}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <button
        class="px-3 py-2 | grid place-items-center | bg-red rounded-md transition transform "
        data-function="remove"
        on:click={removeShortLink}>
        <span class="sr-only"> Remove Short Link </span>
        <ion-icon class="text-xl text-white" name="close-outline" />
      </button>
    </div>
  </div>
</article>

<style>
  button[data-function='remove']:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.5);
  }

  button[data-function='remove']:focus {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.5);
  }
</style>
