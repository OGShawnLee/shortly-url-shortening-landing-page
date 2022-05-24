<script>
  import { CardFeature, Header } from '@components';
  import { iBrandRecognition, iDetailedRecords, iFullyCustomizable } from '@assets';
</script>

<section class="flex flex-col gap-24 | lg:gap-32">
  <Header title="Advanced Statistics">
    Track how your links are performing across the web with our advanced statistics dashboard.
  </Header>
  <div class="relative | grid gap-y-20 gap-x-9 | lg:grid-cols-3">
    <CardFeature title="Brand Recognition" icon={iBrandRecognition} translate="lg:-translate-y-12">
      Boost your brand recognition with each click. Generic links don't mean a thing. Branded links
      help instil confidence in your content.
    </CardFeature>
    <CardFeature title="Detailed Records" icon={iDetailedRecords} translate="lg:-translate-y-6">
      Gain insights into who is clicking your links. Knowing when and where people engage with your
      content helps inform better decisions.
    </CardFeature>
    <CardFeature title="Fully Customizable" icon={iFullyCustomizable}>
      Improve brand awareness and content discoverability through customizable links, supercharging
      audience engagement.
    </CardFeature>
  </div>
</section>

<style>
  div::after {
    content: '';
    position: absolute;
    background-color: hsl(180, 66%, 49%);
    @apply transform <lg:(top-0 bottom-0 right-1/2 w-2 translate-x-1/2) lg:(bottom-1/2 right-0 left-0 h-2 translate-y-1/2);
  }
</style>
