<script lang="ts">
  export let title: string;
</script>

<header class="text-center">
  <div class="max-w-lg space-y-4 mx-auto">
    <h2 class="text-3xl font-bold">{title}</h2>
    <p class="text-violet-300">
      <slot />
    </p>
  </div>
</header>
