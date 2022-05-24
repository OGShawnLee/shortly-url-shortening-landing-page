<script>
  import { Logo } from '@components';
</script>

<footer class="bg-violet-900">
  <div
    class="w-full breakpoints | flex flex-col gap-12 items-center py-12 lg:(flex-row items-start gap-18)">
    <Logo isDark />
    <nav class="flex flex-col gap-9 text-center lg:(ml-auto flex-row text-left)">
      <div class="space-y-4">
        <span class="text-white font-bold"> Features </span>
        <ul class="flex flex-col gap-2">
          <a href="/#">
            <li>Link Shortening</li>
          </a>
          <a href="/#">
            <li>Branded Links</li>
          </a>
          <a href="/#">
            <li>Analytics</li>
          </a>
        </ul>
      </div>
      <div class="space-y-4">
        <span class="text-white font-bold"> Resources </span>
        <ul class="flex flex-col gap-2">
          <a href="/#">
            <li>Blog</li>
          </a>
          <a href="/#">
            <li>Developers</li>
          </a>
          <a href="/#">
            <li>Support</li>
          </a>
        </ul>
      </div>
      <div class="space-y-4">
        <span class="text-white font-bold"> Company </span>
        <ul class="flex flex-col gap-2">
          <a href="/#">
            <li>About</li>
          </a>
          <a href="/#">
            <li>Our Team</li>
          </a>
          <a href="/#">
            <li>Contact</li>
          </a>
          <a href="/#">
            <li>Careers</li>
          </a>
        </ul>
      </div>
    </nav>
    <div class="text-2xl text-white space-x-3">
      <a href="/#">
        <span class="sr-only">Follow us on Facebook</span>
        <ion-icon name="logo-facebook" />
      </a>
      <a href="/#">
        <span class="sr-only">Follow us on Twitter</span>
        <ion-icon name="logo-twitter" />
      </a>
      <a href="/#">
        <span class="sr-only">Follow us on Pinterest</span>
        <ion-icon name="logo-pinterest" />
      </a>
      <a href="/#">
        <span class="sr-only">Follow us on Instagram</span>
        <ion-icon name="logo-instagram" />
      </a>
    </div>
  </div>
</footer>

<style>
  a,
  ion-icon {
    @apply transition hover:text-cyan focus:text-cyan;
  }
</style>
