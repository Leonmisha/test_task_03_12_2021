<template>
  <li class="tree-item">
    <div class="tree-item__file" @click="handleClick">
      <b-icon size="lg" :icon="icon" class="icon"/>
      <div>
        {{ isFolder ? item.name : `${item.name}, ${getSize(item.size)}` }}
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder" class="tree-item_tree">
      <FileTreeItem
        class="item"
        v-for="(child, index) in item.files"
        :key="index"
        :item="child"
        @open="handleOpenChild"
      ></FileTreeItem>
    </ul>
  </li>
</template>

<script>
const SIZES = [{ name: 'B', divider: 1 }, { name: 'KB', divider: 1024 }, { name: 'MB', divider: 1024 * 1024 }]

export default {
  name: 'FileTreeItem',
  props: {
    item: Object
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder () {
      return Boolean(this.item.files && this.item.files.length)
    },
    icon () {
      if (!this.isFolder) {
        return 'file'
      } else if (this.isOpen) {
        return 'folder2-open'
      } else {
        return 'folder'
      }
    }
  },
  methods: {
    handleClick () {
      if (this.isFolder) {
        // toggle folder
        this.isOpen = !this.isOpen
      } else {
        // open cdn link
        this.$emit('open', {
          path: this.item.name
        })
      }
    },
    getSize (sizeBytes) {
      for (let i = SIZES.length - 1; i--; i >= 0) {
        if (sizeBytes >= SIZES[i].divider) {
          const number = +(sizeBytes / SIZES[i].divider).toFixed(1)
          return `${number}${SIZES[i].name}`
        }
      }
      return '0B'
    },
    handleOpenChild ({ path }) {
      this.$emit('open', { path: `${this.item.name}/${path}` })
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    margin-right: 3px;
  }
  .tree-item_tree {
    list-style-type: none;
    padding-left: 15px;
  }
  .tree-item__file {
    padding: 3px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    &:hover {
      background: #b5b5db;
    }
  }
</style>
