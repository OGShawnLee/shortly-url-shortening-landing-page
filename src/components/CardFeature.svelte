<script lang="ts">
  export let title: string;
  export let icon: string;
  export let translate = '';
</script>

<article class="z-10 p-8 pt-16 | bg-white rounded-lg transform {translate}">
  <div
    class="w-18 min-w-18 h-18 absolute bottom-full right-1/2 | grid place-content-center | bg-violet-700 rounded-full transform translate-y-1/2 translate-x-1/2 lg:(right-full translate-x-24)">
    <img src={icon} alt="" />
  </div>
  <div class="flex flex-col gap-4 text-center lg:text-left">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-sm text-violet-300 leading-relaxed | xl:text-base">
      <slot />
    </p>
  </div>
</article>
