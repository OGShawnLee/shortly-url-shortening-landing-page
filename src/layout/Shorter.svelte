<script lang="ts" context="module">
  const baseURL = 'https://api.shrtco.de/v2/';

  function getErrorMessage(error_code: number) {
    return {
      1: 'No URL Specified',
      2: 'Invalid URL',
      3: 'Rate Limit Reached',
      4: 'Your IP Address is banned!',
      10: 'Tried to shorten a disallowed URL',
    }[error_code];
  }

  async function getShortLink(link: string) {
    const path = baseURL + 'shorten?url=' + link;
    const response = await fetch(path);
    const data = (await response.json()) as APIResponse;
    return data.ok ? ([data, null] as [ShortLinkJSON, null]) : ([null, data] as [null, APIError]);
  }
</script>

<script lang="ts">
  import { ShortLink } from '@components';
  import { slide } from 'svelte/transition';
  import { links } from '@state';

  export let layout: string;

  let errorMessage: string;
  let inputLink: string | undefined;
  let link = '';
  let shortLink: string | null = null;
  let state: 'IDLE' | 'PENDING' | 'ERROR' = 'IDLE';

  async function handleSubmit() {
    if (state === 'PENDING') return;

    state = 'PENDING';
    inputLink = link;
    const [data, error] = await getShortLink(link);

    if (data) {
      link = '';
      shortLink = data.result.full_short_link;
      links.add({ inputLink, shortLink });
      state = 'IDLE';
    }

    if (error) {
      link = '';
      state = 'ERROR';
      errorMessage = getErrorMessage(error.error_code) ?? 'Unknown Error';
    }
  }

  $: if (link && state === 'ERROR') state = 'IDLE';
</script>

<section class="pt-28">
  <div id="shorter" class="{layout} p-6 | bg-violet-700 rounded-lg lg:p-12">
    <h2 class="sr-only">URL Shortener</h2>
    <form
      class="flex flex-col gap-3 items-start | lg:flex-row"
      on:submit|preventDefault={handleSubmit}>
      <div class="w-full">
        <div class="p-0.5 | rounded-lg transition {state === 'ERROR' ? 'bg-red' : 'bg-white'}">
          <label class="sr-only" for="link">Link</label>
          <input
            class="w-full h-12 p-2 px-3 pt-3 | rounded-lg text-violet-700 {state === 'ERROR'
              ? 'placeholder-red/75'
              : ''}"
            type="text"
            placeholder="Shorten a link here..."
            id="link"
            bind:value={link} />
        </div>
        {#if state === 'ERROR' && errorMessage}
          <span class="text-sm text-red italic" transition:slide> {errorMessage} </span>
        {/if}
      </div>
      <button
        class="w-full button h-13 px-8 | bg-cyan rounded-lg | lg:(w-[fit-content] text-lg)"
        class:opacity-75={state === 'PENDING'}
        disabled={state === 'PENDING'}>
        {state === 'PENDING' ? 'Shortening...' : 'Shorten It!'}
      </button>
    </form>
  </div>

  <div class="flex flex-col gap-6">
    {#each $links as link (link.id)}
      <ShortLink {...link} />
    {/each}
  </div>
</section>

<style>
  #shorter {
    background-image: url("../assets/bg-shorten-mobile.svg");
    background-repeat: no-repeat;
    background-position: top right;
}

@media screen and (min-width: 1024px) {
  #shorter {
    background-image: url(../assets/bg-shorten-desktop.svg);
    background-size: cover;
  }
}
</style>