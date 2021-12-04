<template>
  <main class="search-table">
    <template v-if="queryString && status === STATUSES.DONE && items.length > 0">
      <div class="list" role="list">
        <template v-for="item in items">
          <Card :item="item" :key="item.name"/>
        </template>
      </div>
      <b-pagination
        :value="currentPage"
        @input="changeCurrentPage"
        :total-rows="pages"
        per-page="1"
      />
    </template>
    <template v-else-if="queryString">
      <div v-if="status === STATUSES.ERROR">Search error</div>
      <div v-else-if="status === STATUSES.DONE">No results founds</div>
      <b-spinner v-else-if="status === STATUSES.PENDING" variant="primary" />
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import { STATUSES } from '@/store/constants'

import Card from './Card'

export default {
  name: 'ResultsTable',
  components: { Card },
  data () {
    return {
      STATUSES
    }
  },
  computed: {
    ...mapGetters({
      items: 'results',
      queryString: 'queryString',
      status: 'status',
      currentPage: 'currentPage',
      pages: 'pages'
    })
  },
  methods: {
    changeCurrentPage (page) {
      this.$store.dispatch('changePage', page)
    }
  }
}
</script>

<style scoped lang="scss">
.search-table {
  margin: 0 20px;
}
.list {
  padding-bottom: 10px;
}
</style>
