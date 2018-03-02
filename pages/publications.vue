<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Publications.png'">WHAT WE'VE DONE.</Hero>
    <div class="people section">
    <h2 class="section-title-primary text-center">	
		<span class="flr"> C-SAMBA </span>
	Publications</h2>
	<div>
        <table class="table table-responsive" >
          <tbody>
            <tr v-for="p in publications" :key="p.link">
              <td style="padding:25px">
                <a v-if="p.link.includes('http')" :href="p.link">{{ p.citation }}</a>
                <p v-else>{{ p.citation }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
tr:nth-child(odd) {
  padding: 2rem 1rem;
  color: white;
  background: linear-gradient(to right, #1a1a1a, #0078D7);
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

<script>
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },
  data: () => {
    return {
      publications: [
        {
          citation: 'Hernandez-Cordero J, Ramos-Garcia R, Camacho-Lopez S, Aguilar G (2018), A  New Window for Photonics in the Brain. IEEE Photonics Newsletter (accepted)',
          link: '#'
        },
        {
          citation: 'M. I. Gutierrez, E. H. Penilla, L. Leija, A. Vera, J. E. Garay, G. Aguilar (2017), Novel Cranial Implants of Yttria-Stabilized Zirconia as Acoustic Windows for Ultrasonic Brain Therapy. Adv. Healthcare Mater. 6: 1700214',
          link: 'http://onlinelibrary.wiley.com/doi/10.1002/adhm.201700214/abstract'
        },
        {
          citation: 'Damestani Y, De Howitt N, Halaney DL, Garay JE, Aguilar GA (2016), Evaluation of laser bacterial anti-fouling of transparent nanocrystalline yttria-stabilized-zirconia cranial implant. Lasers Surg Med, 48: 782-789.',
          link: 'http://onlinelibrary.wiley.com/doi/10.1002/lsm.22558/abstract'
        },
        {
          citation: 'Damestani Y, Galan-Hoffman DE, Oritz D, Cabrales P, Aguilar G (2016), Inflammatory response to implantation of transparent nanocrystalline yttria-stabilized zirconia using a dorsal window chamber model. Nanomed Nanotech Biol Med, 12: 1757-1763.',
          link: 'http://www.sciencedirect.com/science/article/pii/S1549963416300417'
        },
        {
          citation: 'Damestani Y, Melakeberhan B, Rao MP, Aguilar G (2014), Optical clearing agent perfusion enhancement via combination of microneedle poration, heating and pneumatic pressure. Lasers Surg Med, 46: 488–498.',
          link: 'http://onlinelibrary.wiley.com/doi/10.1002/lsm.22258/abstract'
        },
        {
          citation: 'Damestani Y, Reynolds CL, Szu J, Hsu MS, Kodera Y, Binder DK, Park BH, Garay JE, Rao MP, Aguilar G (2013), Transparent nanocrystalline yttria-stabilized-zirconia calvarium prosthesis. Nanomed Nanotech Biol Med, 9: 1135-1138.',
          link: 'http://www.nanomedjournal.com/article/S1549-9634(13)00361-4/abstract'
        },
        {
          citation: 'Castillo-Vega GR, Penilla EH, Camacho-Lopez S, Aguilar G, Garay JE (2012), Waveguide-like structures written in transparent polycrystalline ceramics with an ultra-low fluence femtosecond laser. Opt Mater Express, 2: 1416-1424.',
          link: 'https://www.osapublishing.org/ome/abstract.cfm?uri=ome-2-10-1416'
        }
      ]
    }
  }
}
</script>
