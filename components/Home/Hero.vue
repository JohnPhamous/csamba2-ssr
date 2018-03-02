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
                <!--<div class="col-md-12">-->
                  <!--<div class="row">-->
                    <!--<div class="col-md-4 hero-card">-->
                      <!--<div class="hero-card-content text-center">-->
                        <!--<div class="hero-card-header">-->
                          <!--<p><strong>PUBLICATIONS</strong></p>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-md-4 hero-card">-->
                      <!--<div class="hero-card-content"></div>-->
                    <!--</div>-->
                    <!--<div class="col-md-4 hero-card">-->
                      <!--<div class="hero-card-content"></div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              </div>
            </div>
      </section>
    </div>
</template>

<style scoped>
.hero-card {
  height: 200px;
  width: 200px;
}
.hero-card-content {
  background: #1a1a1a;
  height: inherit;
  padding: 1.5em;
  color: white;
}
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
  background: url("/img/hero/Hero-Home.png") no-repeat center center fixed;
  background-size: cover;
}
h1 {
  font-weight: 300;
  font-size: 1.8rem;
}
.letter {
  font-weight: 800;
}
.small {
  font-size: 1.2rem;
}
.slogan {
  letter-spacing: 3px;
}
</style>

<script>
</script>

