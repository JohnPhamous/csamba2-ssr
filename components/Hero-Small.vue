<template>
  <div class="welcome d-flex justify-content-center flex-column"
    :style="`
    background: url('${hero}') no-repeat center center fixed;
    background-size: cover;
    `">
    <section id="hero-content" class="container">
      <div class="inner-wrapper mb-auto container">
        <div class="row">
          <div class="col-md-12 text-center text-white">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['hero']
  }
</script>

<style scoped>
  .welcome-heading {
    font-weight: 800;
    font-size: 6rem;
  }
</style>
