<template>
  <b-card role="listitem">
    <b-row>
        <div class="name">Package: {{ item.name }}</div>
    </b-row>
    <b-row>
        <b-col class="author-image"><img class="author-image__item" :src="item.author.imageURL"></b-col>
        <b-col class="author-name">{{ item.author.name }}</b-col>
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
        <div v-for="tag in item.tags" :key="tag" class="tags__item">
            {{ tag }}
        </div>
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'Card',
  props: ['item']
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
</style>
