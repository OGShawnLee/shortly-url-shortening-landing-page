<script lang="ts" context="module">
  import type { Action } from 'svelte/action';
  import { useWindowListener } from 'malachite-ui/hooks';

  const scrollHideableNavBar: Action = (element) => {
    let y = 0;
    return {
      destroy: useWindowListener('scroll', () => {
        const currentY = window.scrollY;
        const isGoingDown = currentY > y;
        if (isGoingDown) element.classList.add('-translate-y-24');
        else element.classList.remove('-translate-y-24');
        y = currentY;
      }),
    };
  };
</script>

<script lang="ts">
  import { Popover, PopoverButton } from 'malachite-ui/components';
  import { Logo } from '@components';
  import { slide } from 'svelte/transition';
  import { quartOut } from 'svelte/easing';
</script>

<Popover
  class="fixed top-0 right-0 left-0 z-90 h-24 | bg-white/90 transform transition duration-300"
  as="header"
  use={[[scrollHideableNavBar]]}
  let:panel
  let:isOpen>
  <div class="breakpoints h-full | flex items-center justify-between gap-18">
    <div class="min-w-[fit-content]">
      <Logo />
    </div>

    <PopoverButton class="transition hover:text-cyan focus:text-cyan lg:hidden">
      <ion-icon name="menu-outline" size="large" />
    </PopoverButton>

    {#if isOpen}
      <div
        class="fixed top-24 z-90 w-full breakpoints p-8 | space-y-6 | bg-violet-700 shadow-2xl rounded-lg text-lg text-white | lg:hidden"
        use:panel
        transition:slide={{ easing: quartOut }}>
        <nav>
          <ul class="flex flex-col items-center gap-6">
            <li>
              <a class="transition hover:text-cyan focus:text-cyan" href="/#"> Features </a>
            </li>
            <li>
              <a class="transition hover:text-cyan focus:text-cyan" href="/#"> Pricing </a>
            </li>
            <li>
              <a class="transition hover:text-cyan focus:text-cyan" href="/#"> Resources </a>
            </li>
          </ul>
        </nav>

        <div class="h-0.25 w-full bg-violet-300/25" />

        <div class="w-full | flex flex-col gap-3">
          <button class="py-2 | transition hover:text-cyan focus:text-cyan"> Login </button>
          <button class="button | bg-cyan rounded-full"> Sign Up </button>
        </div>
      </div>
    {/if}

    <div class="hidden w-full | lg:flex">
      <div class="mr-auto">
        <nav class="h-full flex items-center | text-violet-300">
          <ul class="flex items-center gap-12">
            <li>
              <a class="transition hover:text-violet-900 focus:text-violet-900" href="/#">
                Features
              </a>
            </li>
            <li>
              <a class="transition hover:text-violet-900 focus:text-violet-900" href="/#">
                Pricing
              </a>
            </li>
            <li>
              <a class="transition hover:text-violet-900 focus:text-violet-900" href="/#">
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button class="px-6 transition hover:text-violet-900 focus:text-violet-900"> Login </button>
        <button class="button px-6 | bg-cyan rounded-full"> Sign Up </button>
      </div>
    </div>
  </div>
</Popover>
