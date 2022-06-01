<script lang="ts">
  import { illustrationWorking } from '@assets';
</script>

<section
  class="breakpoints grid gap-8 | sm:(mt-12 gap-16) md:mt-0 @md:gap-24 lg:grid-cols-12 xl:my-18">
  <div class="relative | h-80 lg:(order-2 col-span-6) xl:col-span-5">
    <img
      class="absolute | left-22 bottom-1/2 | transform translate-y-1/2 scale-150 md:(left-12 scale-125) lg:hidden"
      src={illustrationWorking}
      alt="Person working with a computer" />

    <img
      class="hidden transform | lg:inline lg:(absolute top-1/2 scale-150 -translate-y-1/2 translate-x-1/8) xl:(translate-x-2/8 scale-150)"
      src={illustrationWorking}
      alt="Person working with a computer" />
  </div>
  <div
    class="flex flex-col items-center gap-4 | text-center | lg:(order-1 col-span-6 text-left items-start justify-center) xl:col-span-7">
    <h1 class="text-4xl font-bold | lg:text-6xl xl:text-7xl">More than just shorter links</h1>
    <p class="text-violet-300 text-lg xl:text-2xl">
      Build your brand's recognition and get detailed insights on how your links are performing.
    </p>
    <button class="button mt-4 px-8 | bg-cyan rounded-full text-lg"> Get Started </button>
  </div>
</section>
