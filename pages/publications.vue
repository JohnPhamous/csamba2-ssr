<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">C-SAMBA Publications</h3>
    <div class="col-md-10 ml-auto mr-auto">
      <table class="table table-striped table-responsive">
        <thead class="bg-primary text-white">
          <tr>
            <th>Citation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in publications" :key="p.link">
            <td>
              <a :href="p.link">{{ p.citation }}</a>
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
  border: 5px;
}
</style>

<script>
export default {
  data: () => {
    return {
      publications: [
        {
          citation: 'M. I. Gutierrez, E. H. Penilla, L. Leija, A. Vera, J. E. Garay, G. Aguilar, Adv. Healthcare Mater. 2017, 6, 1700214.',
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
          link: 'https://www.osapublishing.org/captcha/?guid=BB587CD7-060F-6088-640C-8774F76A1A2C'
        }
      ]
    }
  }
}
</script>
