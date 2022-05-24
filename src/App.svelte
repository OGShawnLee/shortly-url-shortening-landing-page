<script>
  import { Banner, Features, Footer, Header, Hero, Shorter } from '@layout';
</script>

<Header />

<main class="mt-18 md:pt-16 | flex flex-col gap-24 | overflow-x-hidden">
  <Hero />
  <div class="mt-12 space-y-24 | bg-gray/20">
    <div class="relative breakpoints space-y-24">
      <Shorter layout="absolute bottom-full breakpoints w-full | transform translate-y-1/2" />
      <Features />
    </div>
    <Banner />
  </div>
</main>

<Footer />
