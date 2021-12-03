<template>
  <div class="main">
    <Search />
    <ResultsTable />
  </div>
</template>

<script>
import Search from './Search.vue'
import ResultsTable from './ResultsTable'

export default {
  name: 'Main',
  components: {
    Search,
    ResultsTable
  }
}
</script>

<style scoped lang="scss">
  .main {
    margin-top: 20px;
    flex-grow: 1;
  }
</style>
