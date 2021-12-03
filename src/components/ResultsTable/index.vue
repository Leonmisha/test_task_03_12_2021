<template>
  <main class="search-table">
    <div class="list" role="list">
      <template v-for="item in items">
        <Card :item="item" :key="item.name"/>
      </template>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    />
  </main>
</template>

<script>
import Card from './Card'

export default {
  name: 'ResultsTable',
  components: { Card },
  data () {
    return {
      rows: 5,
      perPage: 1,
      currentPage: 1,
      items: [
        {
          name: 'sjs',
          author: {
            name: 'elmerbulthuis',
            imageURL: 'https://gravatar.com/avatar/54f9beb082c0771af47339bcc59e9d75?s=20'
          },
          version: '0.0.3',
          license: null,
          description: 'Asynchronous JavaScript for synchronous people',
          tags: ['reactive', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey', 'javascript', 'hey']
        },
        {
          name: 's',
          author: {
            name: 'SheetJS',
            imageURL: 'https://github.com/SheetJS.png?s=20'
          },
          version: '1.0.0',
          license: 'Apache-2.0',
          description: 'SheetJS Spreadsheet Helper Library'
        },
        {
          name: 's-',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-g',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-f',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-e',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-d',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-c',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-b',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        },
        {
          name: 's-a',
          author: {
            name: 'teniryte',
            imageURL: 'https://gravatar.com/avatar/1de9da4fd5405ac5f7d6a0f68e814220?s=20'
          },
          version: '0.0.1',
          license: 'MIT',
          description: null
        }
      ]
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
