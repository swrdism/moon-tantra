<script setup>
import Title from '@/components/Title.vue';
</script>

<template>
  <Title msg="聯絡資訊"></Title>
  <div class="d-flex">
    <div class="px-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4186.354334683454!2d121.50335671256713!3d25.029359037702555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9bb6c43c653%3A0xdc5cc1589bd90d5e!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5Y2X5rW36LevMTA36Jmf!5e0!3m2!1szh-TW!2stw!4v1713329991412!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="px-5">
      <h2 class="lh-lg">如何抵達：</h2>
      <h3 class="lh-lg">公車</h3>
      <h4>
        <ul>
          <li class="lh-lg">中華南海路口：</li>
          <span class="lh-lg">12、20、204、205、212、220、中山幹線、223、249、250、253、670、671、673、藍20</span>
          <li class="lh-lg">國盛國宅：</li>
          <span   class="lh-lg">204、253、630、671</span>
        </ul>
      </h4>
    </div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
