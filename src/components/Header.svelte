<script lang="ts">
  export let title: string;
</script>

<header class="text-center">
  <div class="max-w-lg space-y-5 mx-auto">
    <h2 class="text-3xl font-bold | lg:text-4xl">{title}</h2>
    <p class="text-violet-300 || lg:text-lg">
      <slot />
    </p>
  </div>
</header>
