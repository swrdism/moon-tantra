<script setup>
import backgroundImagePath from '@/assets/background.jpeg'
</script>

<template>
  <div :style="{}">
    <div>
      <nav-header></nav-header>
      <div class="m-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template> 