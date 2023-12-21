<script>
export default {
  computed: {
    destinationSentence() {
      return `la destination sera ${this.$route.params.pays}`
    }
  }
}
</script>

<template>
  <div class="destination">
    <h1>destionation: {{ $route.params.pays }}</h1><br>
    <div>{{ destinationSentence }}</div>
  </div>
</template>
  