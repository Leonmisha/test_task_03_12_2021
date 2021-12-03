<template>
  <div class="search">
    <b-input placeholder="Search for package"/>
  </div>
</template>

<script>

export default {
  name: 'Search'
}
</script>

<style scoped lang="scss">
  .search {
    display: flex;
    justify-content: center;
    margin: 0 10px 10px;
    input {
      margin-left: 5px;
    }
  }
</style>
