<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">C-SAMBA News Archive</h3>
    <div class="col-md-10 ml-auto mr-auto">
      <table class="table table-responsive table-hover">
        <thead class="bg-primary text-white">
          <tr>
            <th>Publisher</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in news" :key="n.link">
            <td>
              <img class="publisher" :src="`img/news/${n.publisherImage}`"/>
            </td>
            <td>
              <a :href="n.link">{{ n.title }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table {
  box-shadow: 0 0 25px rgba(40, 47, 60, 0.05), 0 20px 25px rgba(40, 47, 60, 0.05), 0 3px 4px rgba(40, 47, 60, 0.05);
}
.publisher {
  width: 25vh;
}
</style>

<script>
export default {
  data: () => {
    return {
      news: [
        {
          publisherImage: 'bbc.png',
          title: '"Window on the brain"',
          link: 'http://www.bbc.co.uk/programmes/p0423m8n'
        },
        {
          publisherImage: 'science360.jpg',
          title: 'Scientists move closer to developing therapeutic window to the brain',
          link: 'https://news.science360.gov/obj/story/73942d6f-33f5-466f-aaa9-1bdc108557b0/scientists-move-closer-developing-therapeutic-window-brain'
        },
        {
          publisherImage: 'ucr_news.png',
          title: '',
          link: 'https://ucrtoday.ucr.edu/38537'
        },
        {
          publisherImage: 'novus.png',
          title: 'Scientists Closer to Developing Therapeutic Window to Brain',
          link: 'http://www.novuslight.com/scientists-closer-to-developing-therapeutic-window-to-brain_N5827.html'
        },
        {
          publisherImage: 'vocativ.png',
          title: 'A Clear Skull Implant Could Let Doctors Shoot Lasers Into The Brain',
          link: 'http://www.vocativ.com/339450/a-clear-skull-implant-could-let-doctors-shoot-lasers-into-the-brain/'
        },
        {
          publisherImage: 'optics.png',
          title: 'Window to the brain moves closer to reality',
          link: 'http://optics.org/news/7/7/21'
        },
        {
          publisherImage: 'science_daily.png',
          title: 'Scientists move closer to developing therapeutic window to the brain',
          link: 'https://www.sciencedaily.com/releases/2016/07/160712133916.htm'
        },
        {
          publisherImage: 'dtj.png',
          title: 'Desarrollan cerámica transparente que podría implantarse en segmentos del cráneo',
          link: 'http://www.diariotijuana.info/desarrollan-ceramica-transparente-que-podria-implantarse-en-segmentos-del-craneo/'
        },
        {
          publisherImage: 'logo_UniradioInforma.png',
          title: 'Presentan investigadores proyecto ‘Ventana al cerebro’',
          link: 'http://www.uniradioinforma.com/noticias/ensenada/370467/presentan-investigadores-proyecto-ventana-al-cerebro.html'
        },
        {
          publisherImage: 'cicese.png',
          title: 'Desarrollan cerámica transparente que permitiría tratamientos en el cerebro basados en luz',
          link: 'http://todos.cicese.mx/sitio/noticia.php?t=texto&stat=Cf&n=703#.Vi5Zc-fDH3V'
        },
        {
          publisherImage: 'uc.png',
          title: '‘Window to the brain’ research ramps up ',
          link: 'https://www.universityofcalifornia.edu/news/5508/window-brain-research-ramps'
        },
        {
          publisherImage: 'ucr_news.png',
          title: '',
          link: 'http://ucrtoday.ucr.edu/32245'
        },
        {
          publisherImage: 'optics.png',
          title: 'Laser surgery set to benefit from window to the brain',
          link: 'http://optics.org/news/6/10/36'
        }
      ]
    }
  }
}
</script>