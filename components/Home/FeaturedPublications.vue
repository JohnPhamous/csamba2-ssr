<template>
  <div class="blog section section-invert py-4">
    <h3 class="section-title text-center m-5">Featured Publications</h3>

    <div class="container">
      <div class="py-4">
        <div class="row">
          <div class="card-deck">

            <div class="col-md-6">
              <div class="card mb-4">
                <div class="img-container">
                  <img class="card-img-top" src="../../static/img/publications/tnyszcp.jpg" alt="Transparent nanocrystalline yttria-stabilized-zirconia calvarium prosthesis">
                </div>
                <div class="card-body">
                  <h4 class="card-title">Transparent nanocrystalline yttria-stabilized-zirconia calvarium prosthesis</h4>
                  <p class="card-text">Laser-based diagnostics and therapeutics show promise for many neurological disorders. However, the poor transparency of cranial bone (calvaria) limits the spatial resolution and interaction depth that can be achieved, thus constraining opportunity in this regard. Herein, we report preliminary results from efforts seeking to address this limitation through use of novel transparent cranial implants made from nanocrystalline yttria-stabilized zirconia (nc-YSZ).</p>
                  <a class="btn btn-primary btn-pill" href="http://www.nanomedjournal.com/article/S1549-9634(13)00361-4/abstract">Read More</a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4">
                <img class="card-img-top" src="../../static/img/publications/elbaft.jpg" alt="Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant">
                <div class="card-body">
                  <h4 class="card-title">Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant</h4>
                  <p class="card-text">The development and feasibility of a novel nanocrystalline yttria-stabilized-zirconia (nc-YSZ) cranial implant has been recently established. The purpose of what we now call window to the brain (WttB) implant (or platform), is to improve patient care by providing a technique for delivery and/or collection of light into/from the brain, on demand, over large areas...</p>
                  <a class="btn btn-primary btn-pill" href="http://onlinelibrary.wiley.com/doi/10.1002/lsm.22558/abstract">Read More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      featuredPublications: [
        {
          name: 'Transparent nanocrystalline yttria-stabilized-zirconia calvarium prosthesis',
          image: 'tnyszcp.jpg',
          abstract: 'Laser-based diagnostics and therapeutics show promise for many neurological disorders. However, the poor transparency of cranial bone (calvaria) limits the spatial resolution and interaction depth that can be achieved, thus constraining opportunity in this regard. Herein, we report preliminary results from efforts seeking to address this limitation through use of novel transparent cranial implants made from nanocrystalline yttria-stabilized zirconia (nc-YSZ).',
          link: 'http://www.nanomedjournal.com/article/S1549-9634(13)00361-4/abstract'
        },
        {
          name: 'Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant',
          image: 'elbaft.jpg',
          abstract: 'The development and feasibility of a novel nanocrystalline yttria-stabilized-zirconia (nc-YSZ) cranial implant has been recently established. The purpose of what we now call â€œwindow to the brain (WttB) implant (or platform), is to improve patient care by providing a technique for delivery and/or collection of light into/from the brain, on demand, over large areas...',
          link: 'http://onlinelibrary.wiley.com/doi/10.1002/lsm.22558/abstract'
        }
      ]
    }
  }
}
</script>

