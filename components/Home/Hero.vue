<template>
  <div class="welcome justify-content-center flex-column">
      <section id="hero-content" class="container">
          <div class="inner-wrapper mb-auto container">
              <div class="row">
                <div class="col-md-12 text-center">
                    <img src="../../static/img/logo.png" alt="Window to the Brain Logo">
                    <h1 class="welcome-heading text-white">
                      <span class="letter">C</span>enter<span class="small"> for the </span> <span class="letter">S</span>ynthesis<span class="small"> of </span> <span class="letter">A</span>dvanced <span class="letter">M</span>aterials <span class="small">for </span> <span class="letter">B</span>iomedical <span class="letter">A</span>pplications
                    </h1>
                    <p class="slogan text-white">Developing the next generation of implantable materials</p>
                </div>
              </div>
            </div>
      </section>
    </div>
</template>

<style scoped>
#hero-content {
  padding-top: 15vh;
}

@media (max-width: 800px) {
  #hero-content {
    padding-top: 0vh;
  }
  .welcome-heading {
    font-size: 3em;
  }
}

.csamba-landing-page--1 .welcome {
  position: relative;
  height: 100vh;
  min-height: 700px;
  background: url("../../static/img/hero.jpg") no-repeat center center fixed;
  background-size: cover;
}
h1 {
  font-weight: 300;
  font-size: 2rem;
}
.letter {
  font-weight: 800;
}
.small {
  font-size: 1.5rem;
}
.slogan {
  letter-spacing: 3px;
}
</style>

<script>
</script>

