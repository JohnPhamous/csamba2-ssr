<template>
  <div>
    <div class="events people section">
      <h2 class="section-title-primary text-center">C-SAMBA Events</h2>
      <table class="table table-responsive">
        <tbody>
          <tr v-for="e in events"
            :key="e.title"
            >
            <td><strong>{{ e.date }}</strong></td>
            <td>{{ e.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      events: [
        {
          date: 'February 3, 2018',
          title: 'Window to the Brain research presentation (poster) at the CAMP Symposium, UC Irvine, Irvine, CA',
          abstract: 'Alvarez C, Garcia V,  Exarhos S., Fernandez K., Alvarez A.,  Cuando-Espitia N, Mangolini L., and Aguilar G, "Antibacterial Studies of Zinc Oxide Nanoparticle Coatings on Nanocrystalline Yttria Stabilized Zirconia Irradiated with Femtosecond Laser Light."',
          externalLink: ''
        },
        {
          date: 'January 28, 2018',
          title: 'Window to the Brain research presentation (talk) at SPIE Photonics West, San Francisco, CA.',
          abstract: 'Alvarez C, Garcia V, Cuando-Espitia N, Aguilar G, "Antibacterial studies of ZnO nanoparticle coatings on nanocrystalline YSZ irradiated with femtosecond laser light."',
          externalLink: ''
        },
        {
          date: 'January 28, 2018',
          title: 'Window to the Brain research presentation (talk) at SPIE Photonics West, San Francisco, CA.',
          abstract: 'Davoodzadeh N, Aminfar H, Halaney D, Jonak C, Cuando N, Binder D, Aguilar G. ”Laser speckle imaging of brain blood flow through a transparent nanocrystalline yttria-stabilized-zirconia cranial implant.”',
          externalLink: ''
        },
        {
          date: 'January 27, 2018',
          title: 'Window to the Brain research presentation (talk) at SPIE Photonics West, San Francisco, CA.',
          abstract: 'Davoodzadeh N, Halaney D, Uahengo G, Garay JE, Aguilar G. ”Influence of low temperature ageing on optical and mechanical properties of transparent yttria stabilized-zirconia cranial prosthesis.”',
          externalLink: ''
        },
        {
          date: 'December 6, 2017',
          title: 'Ventanas al Cerebro Conferencia at CEART, Ensenada, Mexico',
          abstract: 'Co-Project Investigators Aguilar and Camacho-Lopez discussed the basic ideas that allowed them to conceive the Window to the Brain project as well as the advantages that this platform offers both patients and doctors in the diagnosis and optimal treatment of brain injuries.',
          externalLink: ''
        },
        {
          date: 'November 20, 2017',
          title: 'Window to the Brain research presentation (poster) at the Inland Empire Stem Cell Consortium at Cal State University San Bernardino, San Bernardino, CA',
          abstract: 'D. Rutherford, H Liu. “Window To The Brain: Culture of BMSCs With Polished, Unpolished, and Nanopowder 8YSZ.” ',
          externalLink: ''
        },
        {
          date: 'October 24-25, 2016',
          title: 'First Binational USA-Mexico Symposium of Laser-Induced Cavitation and its Applications at La Casa de la Universidad de California, Mexico City',
          abstract: 'A dozen UC Riverside faculty, postdoctoral researchers, and graduate and undergraduate students joined representatives from more than 15 Mexican academic institutions to discuss the latest advancements of laser-induced cavitation, the method of using lasers to create bubbles within solid objects or liquids. The event featured keynote speeches by UCLA Distinguished Professor Gary A. Williams and UCI Professor and Chair Vasan Venugopalan as well as 20 talks and poster sessions related to thermocavitation, biomedical applications, fiber-assisted cavitation, and femtosecond laser cavitation.',
          externalLink: ''
        },
        {
          date: 'October 18, 2017',
          title: 'Window to the Brain research presentation (talk) at Kappa Lamba Nu/IEEE Tech Talk at UC Riverside, Riverside, CA.',
          abstract: 'Corber S.R., Rao, M.P. "Development of plasma-etched microneedles for drug delivery applications."',
          externalLink: ''
        },
        {
          date: 'October 18, 2017',
          title: 'Window to the Brain research presentation (talk) at the Kappa Lamba Nu/IEEE Tech Talk, Riverside, CA',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP, “Fabrication of Microneedles for Enhanced Optical Clearing of Tissues.”',
          externalLink: ''
        },
        {
          date: 'September 25-27, 2017',
          title: 'PIRE SOMBRERO Summer Optics Seminar at UC Riverside, Riverside, California',
          abstract: 'Three project Co-PIs from Mexico visited UCR to speak at a seminar focused on optics, a topic for which UCR does not offer upper level courses. UCR undergraduate and graduate students had the opportunity to attend up of nine, 75-minute lectures highlighting such topics as electromagnetism for optics, Fresnel equations, optical fibers and laser ablation.',
          externalLink: ''
        },
        {
          date: 'August 6-9, 2017',
          title: 'Biophotonics School at INAOE near Puebla, Mexico',
          abstract: 'Six graduate students and one postdoc traveled from UCR to attend a 3.5-day biophotonics school, which provided further optics education that is not available at UCR.',
          externalLink: ''
        },
        {
          date: 'August 1, 2017',
          title: 'Window to the Brain research presentation (poster) at the ISPC23 Conference in Montreal, Canada',
          abstract: 'Exarhos S, Woodard A, Alvarez A, Mangolini L. “Non-thermal plasma synthesis of plasmonic zirconium nitride nanoparticles.”',
          externalLink: ''
        },
        {
          date: 'June 28, 2017',
          title: 'Window to the Brain research presentation (talk/poster) at the UC System Bioengineering Symposium. Los Angeles, CA',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP, “Progress towards the Fabrication of Hollow, Out-of-Place, Titanium Microneedles for Transdermal Delivery of Optical Clearing Agents.” *Received best poster award.*',
          externalLink: ''
        },
        {
          date: 'June 28, 2017',
          title: 'Window to the Brain research presentation (talk) at the European Conferences on Biomedical Optics, Munich, Germany',
          abstract: 'Zamora-Romero N, Aguilar G, Devia-Cruz L, Halaney D. “Laser-excited gold nanoparticles for treatment of cancer cells in vitro.”',
          externalLink: ''
        },
        {
          date: 'June 28, 2017',
          title: 'Window to the Brain research presentation (talk) at the European Conferences on Biomedical Optics, Munich, Germany',
          abstract: 'Cuando-Espitia N, Luna-Palacios Y, Alvarez C, Aguilar G, Camacho-Lopez S, Halaney DL. “Femtosecond laser assisted antibacterial activity of ZnO nanoparticles.”',
          externalLink: ''
        },
        {
          date: 'June 28, 2017',
          title: 'Window to the Brain research presentation (poster) at the European Conferences on Biomedical Optics, Munich, Germany',
          abstract: 'Camacho-Lopez S, Rocha-Mendoza I, Luna-Palacios YY, Esqueda-Barron Y, Camacho-Lopez MA, Camacho-Lopez M, Aguilar G. “Study of SHG from ZnO nanoparticles synthesized by laser ablation of solids in liquids.”',
          externalLink: ''
        },
        {
          date: 'May 19, 2017',
          title: 'Window to the Brain research presentation (poster) at the UCR MEGSA Symposium, Riverside, CA',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP, “Progress towards the Fabrication of Hollow, Out-of-Place, Titanium Microneedles for Transdermal Delivery of Optical Clearing Agents.”',
          externalLink: ''
        },
        {
          date: 'May 19, 2017',
          title: 'Window to the Brain research presentation (talk) at the UCR MEGSA Symposium, Riverside, CA',
          abstract: 'Halaney DL, Aguilar G. “Window to the Brain: A platform for biophotonic neuro-procedures.”',
          externalLink: ''
        },
        {
          date: 'May 11, 2017',
          title: 'Window to the Brain research presentation (talk) at the Eta Kappa Nu (IEEE Honor Society)  - Sigma Lamba chapter meeting, Riverside, CA',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP, “Fabrication of Microneedles for Enhanced Optical Clearing of Tissues.”',
          externalLink: ''
        },
        {
          date: 'April 20, 2017',
          title: 'Window to the Brain research presentation (poster) at the Material Research Society Spring Meeting, Phoenix, AZ',
          abstract: 'Corber SR, Ashby DZ, Khandan O, Cuando N, Aguilar G, Rao MP, “Progress towards the Fabrication of Hollow, Out-of-Place, Titanium Microneedles for Transdermal Delivery of Optical Clearing Agents.”',
          externalLink: ''
        },
        {
          date: 'April 7, 2017',
          title: 'Window to the Brain research presentation (talk) at Ann. Conf. ASLMS, San Diego, CA',
          abstract: 'Zamora-Romero N, Aguilar G, Devia-Cruz LF, Halaney DL, Alvarez-Barragan A, Mangolini L. “Pulses and CW laser irradiation effects of TiN nanoparticles on cancer cells in vitro.”',
          externalLink: ''
        },
        {
          date: 'April 7, 2017',
          title: 'Window to the Brain research presentation (poster) at Ann. Conf. ASLMS, San Diego, CA',
          abstract: 'Davoodzadeh N. “Low-Temperature Aging of Transparent Nanocrystallie Yttria-Stabilized-Zirconia Calvarium Prosthesis.”',
          externalLink: ''
        },
        {
          date: 'January 27, 2017',
          title: 'Window to the Brain research presentation (talk) at SPIE Photonics West, San Francisco, CA.',
          abstract: 'Zamora-Romero N, Aguilar G, Devia-Cruz LF, Banks D, Zhang B, Halaney DL. “Photothermal technique to damage cancer cells: in vitro studies of simultaneous pulsed and cw irradiation.”',
          externalLink: ''
        },
        {
          date: 'November 12, 2016',
          title: 'Window to the Brain research presentation (poster) at the Southern California Conferences for Undergraduate Research, Riverside, CA',
          abstract: 'Amatayakul K, Halaney DL, Aguilar G. “Autopolishing Yttria-Stabilized Zirconia with Diamond.”',
          externalLink: ''
        },
        {
          date: 'November 12, 2016',
          title: 'Window to the Brain research presentation (poster) at the Southern California Conferences for Undergraduate Research, Riverside, CA',
          abstract: 'McInnis M, Davoodzadeh N. “Low temperature degradation of Yttria-Stabilized-Zirconia.”',
          externalLink: ''
        },
        {
          date: 'November 12, 2016',
          title: 'Window to the Brain research presentation (poster) at the Southern California Conferences for Undergraduate Research, Riverside, CA',
          abstract: 'Alvarez C, Luna-Palacios Y, Cuando-Espitia N, Aguilar G, Camacho-Lopez M. “Antibacterial studies of ZnO nanoparticles irradiated with femtosecond laser light.”',
          externalLink: ''
        },
        {
          date: 'November 8, 2016',
          title: 'Window to the Brain research presentation (poster) at the 5th Annual Stem Cell Consortium symposium at Loma Linda University, Loma Linda, CA',
          abstract: 'Rutherford D, Liu H. “Direct culture of bone marrow derived mesenchymal stem cells on 8YSZ.”',
          externalLink: ''
        },
        {
          date: 'October 24, 2016',
          title: 'Window to the Brain research presentation (poster) at the First Binational USA-Mexico Symposium of Laser-Induced Cavitation and its Applications, Mexico City, Mexico',
          abstract: 'Amatayakul K, Halaney DL, Aguilar G. “Cavitation through yttria-stabilized zirconia requires fine surface polish.”',
          externalLink: ''
        },
        {
          date: 'October 24, 2016',
          title: 'Window to the Brain research presentation (poster) at the First Binational USA-Mexico Symposium of Laser-Induced Cavitation and its Applications, Mexico City, Mexico',
          abstract: 'Hirbawi J, Cuando-Espitia N, Aguilar G. “Design and calibration of a portable optical setup for Enhanced Backscattering measurements.”',
          externalLink: ''
        },
        {
          date: 'October 24, 2016',
          title: 'Window to the Brain research presentation (poster) at the First Binational USA-Mexico Symposium of Laser-Induced Cavitation and its Applications, Mexico City, Mexico',
          abstract: 'McInnis M, Davoodzadeh N, Aguilar G. “Low-temperature aging of transplant nanocrystalline yttria-stabilized-zirconia calvarium prosthesis.”',
          externalLink: ''
        },
        {
          date: 'October 24, 2016',
          title: 'Window to the Brain research presentation (poster) at the First Binational USA-Mexico Symposium of Laser-Induced Cavitation and its Applications, Mexico City, Mexico',
          abstract: 'Alvarez C, Luna-Palacios Y, Cuando-Espitia N, Aguilar G, Camacho-Lopez M. “Antibacterial studies of ZnO nanoparticles irradiated with femtosecond laser light.”',
          externalLink: ''
        },
        {
          date: 'August 24, 2016',
          title: 'Window to the Brain research presentation at the OSA Latin America Optics & Photonics (LAOP) Conference, Medellin, Colombia',
          abstract: 'Pimentel-Dominguez R, Hernandez-Cordero J. "Fabrication and applications of optical fiber micro-heaters."',
          externalLink: ''
        },
        {
          date: 'May 30, 2016',
          title: 'Window to the Brain research presentation (talk) at the Summer Biomechanics, Bioengineering and Biotransport (SB3C) Conference, National Harbor, MD',
          abstract: 'Halaney DL, Damestani Y, De Howitt N, Garay JE, Camacho-López S, Aguilar G. “Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant.”',
          externalLink: ''
        },
        {
          date: 'April 14, 2016',
          title: 'Window to the Brain research presentation (poster) at the UCSD Research Expo, San Diego, CA',
          abstract: 'Uahengo G, Kodera Y, Garay J. “Preparation of rare-earth stabilized nano-crystalline zirconia with tunable optical/mechanical properties.”',
          externalLink: ''
        },
        {
          date: 'February 15, 2016',
          title: 'Window to the Brain research presentation (poster) at the TMS Annual Research Conference, Nashville, TN',
          abstract: 'Uahengo G, Kodera Y, Garay J. “Preparation of rare-earth stabilized nano-crystalline zirconia with tunable optical/mechanical properties.”',
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

<style scoped>
tr:nth-child(odd) {
  padding: 2rem 1rem;
  color: white;
  background: linear-gradient(to right, #1a1a1a, #007bff);
  border: none;
}
tr:nth-child(even) {
  padding: 2rem 1rem;
  color: white;
  background: linear-gradient(to right, #1a1a1a, #003d7e);
  border: none;
}
td {
  border: none;
  padding: 3em;
}
td a {
  color: white;
}
.table {
  margin-bottom: 0;
}
p {
  margin-bottom: 0px;
}
</style>
