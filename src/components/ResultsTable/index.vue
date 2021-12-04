<template>
  <main class="search-table">
    <template v-if="queryString && status === STATUSES.DONE && results.length > 0">
      <div class="list" role="list">
        <template v-for="item in results">
          <Card :item="item" :key="item.objectID" @click="openPackage"/>
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
    <b-modal :visible="modalVisible" @change="closeModal" id="modal-package" :title="openedPackage && openedPackage.name" hide-footer>
      <template #modal-title>
        <a target="_blank" :href="openedPackage ? `https://www.npmjs.com/package/${openedPackage.name}` : '#'" >
          {{openedPackage && openedPackage.name}}
        </a>
      </template>
      <Card :item="openedPackage" expanded />
    </b-modal>
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
    ...mapGetters('search', ['results', 'queryString', 'status', 'currentPage', 'pages']),
    ...mapGetters('modal', ['openedPackage', 'modalVisible'])
  },
  methods: {
    changeCurrentPage (page) {
      this.$store.dispatch('search/changePage', page)
    },
    openPackage (e, packageObj) {
      this.$store.dispatch('modal/openPackage', packageObj)
    },
    closeModal () {
      this.$store.dispatch('modal/setModalVisible', false)
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
