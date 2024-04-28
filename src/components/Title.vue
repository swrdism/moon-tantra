<script  setup>
defineProps({
  msg: String,
})

</script>

<template>
  <div class="text-center pt-5 pb-3">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped></style>