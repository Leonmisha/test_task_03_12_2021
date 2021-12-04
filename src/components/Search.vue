<template>
  <div class="search">
    <b-input :value="queryString" @input="updateQueryString" placeholder="Search for package"/>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'Search',
  computed: {
    ...mapGetters(['queryString'])
  },
  methods: {
    updateQueryString (queryString) {
      this.$store.dispatch('setQueryString', queryString)
      this.getListSearch()
    },
    getListSearch: _.debounce(function () {
      this.$store.dispatch('getListSearch')
    }, 500)
  }
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
