<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">C-SAMBA Events</h3>
    <div class="container">
      <div v-for="e in events"
        :key="e.title"
        class="card mb-3"
      >
        <div class="card-header text-white bg-primary">{{ e.date }}</div>
        <div class="card-body">
          <h4 class="card-title">{{ e.title }}</h4>
          <p class="card-text">{{ e.abstract }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      events: [
        {
          date: '01/28/2018',
          title: 'Antibacterial Studies of ZnO Nanoparticle Coatings on Nanocrystalline YSZ Irradiated with Femtosecond Laser Light.',
          abstract: 'Crysthal Alvarez, Valeria Garcia, Natanael Cuando-Espitia, and Guillermo Aguilar., Optical Imaging, Therapeutics, and Advanced Technology in Head and Neck Surgery and Otolaryngology 2018 Conference in SPIE Photonics West at The Moscone Center in San Francisco, CA',
          externalLink: ''
        },
        {
          date: '01/28/2018',
          title: 'Laser speckle imaging of brain blood flow through a transparent nanocrystalline yttria-stabilized-zirconia cranial implant.',
          abstract: 'Davoodzadeh N, Aminfar H, Halaney D, Jonak C, Cuando N, Binder D, Aguilar G., SPIE BiOS, San Francisco, CA (talk) (2018).',
          externalLink: ''
        },
        {
          date: '01/27/2018',
          title: 'Influence of low temperature ageing on optical and mechanical properties of transparent yttria stabilized-zirconia cranial prosthesis.',
          abstract: 'Davoodzadeh N, Halaney D, Uahengo G, Garay JE, Aguilar G., SPIE BiOS, San Francisco, CA (talk) (2018).',
          externalLink: ''
        },
        {
          date: '11/20/2017',
          title: 'Inland Empire Stem Cell Consortium at Cal State University San Bernardino',
          abstract: 'Dana Rutherford and Huinan Liu, Window To The Brain: Culture of BMSCs With Polished, Unpolished, and Nanopowder 8YSZ',
          externalLink: ''
        },
        {
          date: '06/28/2017',
          title: 'Window to the Brain research presentation (talk/poster) at the UC System Bioengineering Symposium. Los Angeles, CA.',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP. "Progress towards the Fabrication of Hollow, Out-of-Plane, Titanium Microneedles for Transdermal Delivery of Optical Clearing Agents"',
          externalLink: ''
        },
        {
          date: '06/28/2017',
          title: 'Window to the Brain research presentation (talk) at European Conferences on Biomedical Optics, Munich, Germany.',
          abstract: 'Cuando-Espitia N, Luna-Palacios Y, Alvarez C, Aguilar G, Camacho-Lopez S, Halaney DL. “Femtosecond laser assisted antibacterial activity of ZnO nanoparticles.”',
          externalLink: ''
        },
        {
          date: '05/11/2017',
          title: 'Window to the Brain research presentation (talk) at Eta Kappa Nu (IEEE honor society) - Sigma Lamba chapter meeting, Riverside, CA.',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP. "Fabrication of Microneedles for Enhanced Optical Clearing of Tissues."',
          externalLink: ''
        },
        {
          date: '04/20/2017',
          title: 'Window to the Brain research presentation (poster) at the Material Research Society Spring Meeting, Pheonix, AZ.',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP. "Progress towards the Fabrication of Hollow, Out-of-Plane, Titanium Microneedles for Transdermal Delivery of Optical Clearing Agents." ',
          externalLink: ''
        },
        {
          date: '04/07/2017',
          title: 'Window to the Brain research presentation (talk) at the American Society of Laser Medicine and Surgery (ASLMS) Annual Conference, San Diego, CA.',
          abstract: 'Zamora-Romero N, Aguilar G, Devia-Cruz LF, Halaney D, Alvarez-Barragan A, Mangolini L. “Pulsed and CW laser irradiation effects of TiN nanoparticles on cancer cells in vitro.”',
          externalLink: ''
        },
        {
          date: '01/30/2017',
          title: 'Window to the Brain research presentation (talk) at SPIE BiOS, San Francisco, CA.',
          abstract: 'Window to the Brain research presentation (talk) at SPIE BiOS, San Francisco, CA.',
          externalLink: ''
        },
        {
          date: '08/24/2016',
          title: 'Window to the Brain research presentation at the OSA Latin America Optics & Photonics (LAOP) Conference',
          abstract: 'Pimentel-Dominguez R, Hernandez-Cordero J. "Fabrication and applications of optical fiber micro-heaters." OSA Latin America Optics & Photonics Conference, Medellin, Colombia (2016).',
          externalLink: ''
        },
        {
          date: '05/30/2016',
          title: 'Window to the Brain research presentation at the Summer Biomechanics, Bioengineering and Biotransport (SB3C) Conference',
          abstract: 'Halaney DL, Damestani Y, De Howitt N, Garay JE, Camacho-López S, Aguilar G. “Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant.” Summer Biomechanics, Bioengineering and Biotransport Conference, National Harbor, MD (2016).',
          externalLink: ''
        },
        {
          date: '03/05/2016',
          title: 'MESA Day Project Competition: Volunteer Opportunity',
          abstract: 'The MESA Day Competitions are science and engineering events for middle and high school students that focus on student team projects. Hundreds of middle and high school students come to campus and compete in various competitions, from bridge building to math competitions to speech competitions. Volunteers are needed to do everything from judging competitions, to helping greet and host students.',
          externalLink: 'http://mesa.ucop.edu/staff/mesa-day-rules/'
        },
        {
          date: '02/20/2016',
          title: 'MESA Day Project Competition: Volunteer Opportunity',
          abstract: 'The MESA Day Competitions are science and engineering events for middle and high school students that focus on student team projects. Hundreds of middle and high school students come to campus and compete in various competitions, from bridge building to math competitions to speech competitions. Volunteers are needed to do everything from judging competitions, to helping greet and host students.',
          externalLink: 'http://mesa.ucop.edu/staff/mesa-day-rules/'
        }
      ]
    }
  }
}
</script>

