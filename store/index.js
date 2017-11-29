import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      researchThemes: [
        {
          name: 'Manufacturing',
          link: '/research/manufacturing',
          external: false
        },
        {
          name: 'Nanopowder Synthesis',
          link: '/research/nanopowdersynthesis',
          external: false
        },
        {
          name: 'Material Fabrication',
          link: '/research/materialfabrication',
          external: false
        },
        {
          name: 'Material Characterization',
          link: '/research/materialcharacterization',
          external: false
        },
        {
          name: 'Fiber Development and Coupling',
          link: '/research/fiber',
          external: false
        },
        {
          name: 'Laser-Written Photonic Structures',
          link: '/research/laser',
          external: false
        },
        {
          name: 'Biocompatibility',
          link: '/research/biocompatability',
          external: false
        },
        {
          name: 'Optical Imaging and Therapy',
          link: '/research/opticalimagingandtherapy',
          external: false
        },
        {
          name: 'Ceramic Welding',
          link: '/research/ceramicwelding',
          external: true
        },
        {
          name: 'Optical Cavitation',
          link: '/research/opticalcavitation',
          external: true
        },
        {
          name: 'Laser Processing',
          link: '/research/laserprocessing',
          external: true
        }
      ]
    },
    mutations: {
    }
  })
}

export default createStore
