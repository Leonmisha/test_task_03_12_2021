<template>
  <b-card role="listitem" @click="$emit('click', arguments[0], item)">
    <b-row v-if="!expanded">
        <div class="name">Package: <a target="_blank" @click.stop :href="`https://www.npmjs.com/package/${item.name}`" >{{ item.name }}</a></div>
    </b-row>
    <b-row>
        <b-col class="author-image"><a target="_blank" @click.stop :href="item.owner.link"><img class="author-image__item" :src="item.owner.avatar"></a></b-col>
        <b-col class="author-name"><a target="_blank" @click.stop :href="item.owner.link">{{ item.owner.name }}</a></b-col>
        <b-col class="version_license">
            <div class="version">
                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" class="version-icon">
                    <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                </svg>
                <span class="version__number">{{ item.version }}</span>
            </div>
            <div v-if="item.license" class="license">License: {{ item.license }}</div>
        </b-col>
    </b-row>
    <b-row class="description">
        <b-col>{{ item.description }}</b-col>
    </b-row>
    <div class="tags">
        <div v-for="(tag, index) in item.keywords" :key="index" class="tags__item">
            {{ tag }}
        </div>
    </div>
    <template v-if="expanded">
      <template v-if="item.files">
        <b-card class="file-tree">
          <div class="file-tree__header">File system:</div>
          <ul class="file-tree__files">
            <template v-for="(file, index) in item.files">
              <FileTreeItem @open="handleOpenFile" :item="file" :key="index"/>
            </template>
          </ul>
        </b-card>
      </template>
      <template v-else-if="status === STATUSES.PENDING">
        <b-spinner variant="primary" />
      </template>
      <template v-else-if="status === STATUSES.ERROR">
        <b-alert show variant="danger" dismissible>
          Network error. Can't get files of the package.
        </b-alert>
      </template>
      <template v-else-if="status === STATUSES.DONE">
        Can't get files of the package.
      </template>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

import { STATUSES } from '@/store/constants'
import FileTreeItem from '@/components/common/FileTreeItem.vue'

export default {
  name: 'Card',
  components: { FileTreeItem },
  props: {
    item: {
      type: Object,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      STATUSES
    }
  },
  methods: {
    handleOpenFile ({ path }) {
      window.open(`https://cdn.jsdelivr.net/npm/${this.item.name}@${this.item.version}/${path}`)
    }
  },
  computed: {
    ...mapGetters('modal', ['status'])
  }
}
</script>

<style scoped lang="scss">
    .card {
        margin: 5px 0;
        cursor: pointer;
        &:hover {
            background: #adacac2e;
        }
        .card-body {
            padding: 5px 10px;
        }
        .row {
            margin: 5px 0;
        }
    }
    .author-image {
        flex: 0 0 20px;
    }
    .author-image__item {
        width: 20px;
        height: 20px;
        transition: transform 1s;
        &:hover {
            transform: scale(1.2);
        }
    }
    .version_license {
        display: flex;
        flex-wrap: wrap;
        .version {
            margin-right: 10px;
        }
    }
    .version {
        display: flex;
        align-items: center;
        padding: 0 5px;
        border-radius: 3px;
        border: 1px solid rgb(173, 172, 172);
        .version__number {
            margin-left: 5px;
        }
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
    }
    .tags__item {
        padding: 0 5px;
        margin-bottom: 5px;
        border-radius: 3px;
        border: 1px solid rgb(173, 172, 172);
    }
    .tags__item:not(:last-child) {
        margin-right: 5px;
    }
    .file-tree {
      &:hover {
        background: inherit;
      }
    }
    .file-tree__header {
      color: orange;
      margin-bottom: 5px;
    }
    .file-tree__files {
      padding-left: 5px;
      list-style-type: none;
    }
</style>
