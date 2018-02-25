<template>
  <div class="welcome d-flex justify-content-center flex-column">
    <section id="hero-content" class="container">
      <div class="inner-wrapper mb-auto container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="welcome-heading text-white">
              <slot></slot>
            </h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .welcome-heading {
    font-weight: 800;
    font-size: 6rem;
  }
</style>
