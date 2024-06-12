<script>
export default {
  name: "Input",
  props: {
    value: String,
    placeholder: String,
  },
  methods: {
    getValue(event) {
      this.$emit('update:value',event.target.value);
    }
  },
  emits: ['update:value']
}
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="value"
    @input="getValue"
  ></input>
</template>

<style scoped>

</style>