<template>
  <footer class="footer bg-dark">
    <span class="author">Project developed by Leonmisha</span>
    <span class="github"><a href="https://github.com/Leonmisha"><img src="@/assets/GitHub-Mark-Light-32px.png" /></a></span>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .footer {
    flex-shrink: 0;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    .github {
      margin-left: 10px;
    }
  }
  .github {
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>
