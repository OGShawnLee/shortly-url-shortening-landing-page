<script lang="ts">
  export let title: string;
  export let icon: string;
  export let translate = '';
</script>

<article class="z-10 p-10 pt-18 pb-12 | bg-white rounded-lg transform {translate}">
  <div
    class="w-20 min-w-20 h-20 min-h-20 absolute bottom-full right-1/2 | grid place-content-center | bg-violet-700 rounded-full transform translate-y-1/2 translate-x-1/2 lg:(right-full translate-x-30)">
    <img src={icon} alt="" />
  </div>
  <div class="flex flex-col gap-4 text-center lg:text-left">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-[15px] text-violet-300 leading-relaxed | xl:text-base">
      <slot />
    </p>
  </div>
</article>
