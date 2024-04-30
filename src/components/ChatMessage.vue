<template>
  <div :class="['message', { 'outgoing': isOutgoing }]">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isOutgoing: Boolean
  }
}
</script>

<style scoped>
.message {
  padding: 10px;
  margin: 5px;
  background-color: #e8ffd1;  
  color: #213547;  
}

.outgoing {
  background-color: #57d9a3;  
  color: white;  
  align-self: flex-end;  
}
</style>
