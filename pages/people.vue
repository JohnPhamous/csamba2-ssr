<template>
  <div>
    <Hero :hero="'/img/hero/Hero-People.png'">WHO WE ARE.</Hero>
    <div class="people section">
      <h3 class="section-title-primary text-center">C-SAMBA Personnel</h3>
      <div class="container py-5">
        <div class="row">

          <div v-for="p in personnel" :key="p.name" class="col-md-4 people text-center">
            <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
              <img :src="`img/people/${p.image}`"
              class="w-100"
              :alt="p.name"
              />
          </div>
          <h5 class="mb-1">{{ p.name }}</h5>
          <h6 class="text-muted d-block mb-3">{{ p.position }}</h6>
          <p class="text-muted">{{ p.abstract }}</p>
          <a v-if="p.externalWebsite"
            :href="p.externalWebsite"
            class="btn btn-primary btn-pill text-white mb-5">
            Website
          </a>
          <a v-else
            :href="p.externalWebsite"
            class="btn btn-primary btn-pill text-white mb-5 disabled">
            No Website
          </a>
        </div>

      </div>
    </div>

    <h3 class="section-title-secondary text-center"><strong>C-SAMBA</strong> Graduate Students</h3>
    <div class="container py-5">
      <div class="row">

        <div v-for="p in graduates" :key="p.name" class="col-md-4 people text-center">
          <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
            <img :src="`img/people/${p.image}`"
            class="w-100"
            :alt="p.name"
            />
        </div>
        <h5 class="mb-1">{{ p.name }}</h5>
        <h6 class="text-muted d-block mb-3">{{ p.position }}</h6>
        <p class="text-muted">{{ p.abstract }}</p>
      </div>

    </div>
  </div>

  <h3 class="section-title-primary text-center">UNDERGRADUATE RESEARCH GROUP</h3>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 mb-5 people text-center">
        <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
          <img src="img/wttb2.png"
          class="w-100"
          />
      </div>
      <a href="/undergraduates" class="btn btn-primary btn-pill">Learn More</a>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 90%;
  }
  .undergrads {
    width: 100px;
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
        people: [
          {
            name: 'Dr. Guillermo Aguilar, PhD',
            position: 'Director of C-SAMBA',
            type: 'personnel',
            abstract: 'Professor and Chair at the Department of Mechanical Engineering at UCR',
            biography: 'Professor Guillermo Aguilar received his Bachelors degree in Mechanical and Electrical Engineering from the National Autonomous University of Mexico (UNAM) in 1993, and his Masters and Doctor of Philosophy degrees in Mechanical Engineering from the University of California, Santa Barbara in 1995 and 1999, respectively. His research focuses on laser-tissue interactions, thermo-mechanical response of human tissue, laser-assisted cryosurgery, and spray/droplet deposition and heat transfer. His most recent interests concentrates around the implementation and laser processing of biocompatible materials for a variety of biomedical applications.',
            externalWebsite: '',
            image: 'guillermo.jpg'
          },
          {
            name: 'Dr. Javier Garay, PhD',
            position: 'PI of Garay Lab',
            type: 'personnel',
            abstract: 'Professor at the Department of Mechanical Engineering at UCSD',
            biography: 'Javier E. Garay received his B.S. in Mechanical Engineering (1999), M.S. in Materials Science and Engineering (2002) and Ph.D. in Materials Science and Engineering (2004) all from the University of California, Davis. He joined the Jacobs School of Engineering at UC San Diego in 2015. Prior to that he was a professor of Materials Science & Engineering and Mechanical Engineering at UC Riverside where he also served as Chair of the Materials Science & Engineering Program from 2012-2015. Professor Garay\'s research focuses on advanced material processing and synthesis with particular emphasis on designing the micro/nanostructure of bulk materials for property optimization.',
            externalWebsite: '',
            image: 'javier.jpg'
          },
          {
            name: 'Dr. Masaru Rao, PhD',
            position: 'PI of Rao Lab',
            type: 'personnel',
            abstract: 'Associate Professor at the Department of Mechanical Engineering at UCR',
            biography: 'Dr. Masaru Rao received his B.S. in Material Science and Engineering from the University of Florida and his Ph.D. in Materials Engineering from the University of California, Santa Barbara. He is a member of ASME, IEEE Electron Devices and Engineering in Medicine & Biology Societies, and MRS. Dr. Rao\'s research interests lie in the development and application of novel micro/nanofabrication methods and materials for MEMS, microfluidics, and biomedical microdevices.',
            externalWebsite: 'https://www.engr.ucr.edu/~mprao/',
            image: 'masaru.jpg'
          },
          {
            name: 'Dr. Huinan Liu, PhD',
            position: 'PI of Liu Lab',
            type: 'personnel',
            abstract: 'Associate Professor at the Department of Bioengineering at UCR',
            biography: 'Dr. Huinan Liu received her B.S. in Materials Science and Engineering from the University of Science and Technology in Beijing, M.S. in Materials Science and Engineering from Purdue University, and Ph.D. in Biomedical Engineering from Brown University. Her research focuses on biomaterials guided tissue regeneration, nanotechnology, ceramic nanoparticles, degradable polymers, nanocomposites, resorbable metals, surface treatment for medical implants and devices, controlled drug delivery, and stem cell therapy.',
            externalWebsite: 'http://www.liugroup.org/',
            image: 'huinan.jpg'
          },
          {
            name: 'Dr. Lorenzo Mangolini, PhD',
            position: 'PI of Mangolini Lab',
            type: 'personnel',
            abstract: 'Assistant Professor at the Department of Mechanical Engineering at UCR',
            biography: 'Dr. Lorenzo Mangolini received his Ph.D. and M.S. in Mechanical Engineering from the University of Minnesota, Minneapolis, and received his B.S. from the Polytechnic University of Milan, Italy. His research focuses on the development of devices based on nanostructured materials for the solution of energy-related issues, characterization of nano-materials, Plasma Enhanced Chemical Vapor Deposition (PECVD) synthesis of nanostructures and semiconductor quantum dots, and advanced process characterization and modeling of gas-phase reactive systems.',
            externalWebsite: 'http://lorenzo.engr.ucr.edu/',
            image: 'lorenzo.jpg'
          },
          {
            name: 'Dr. Devin Binder, MD/PhD',
            position: 'PI of Binder Lab',
            type: 'personnel',
            abstract: 'Associate Professor in Residence at the Department of Surgery at UCR',
            biography: 'Dr. Devin Binder received his M.D. and Ph.D. degrees from Duke University and then undertook an internship in general surgery and a residency in neurological surgery at the University of California, San Francisco. He completed a neurosurgical and neuroscience fellowship at the University of Bonn, as a William P. Van Wagenen Fellow in Germany. His research focuses on applying new discoveries from the basic sciences of glial-neuronal interactions and neurophotonics to create new ways to diagnose and treat neurological diseases, including seizures, traumatic brain injury and spinal cord injury, and cerebral and spinal edema.',
            image: 'devin.jpg'
          },
          {
            name: 'Dr. Santiago Camacho-Lopéz, PhD',
            position: 'PI of Camacho-Lopez Lab',
            type: 'personnel',
            abstract: 'Professor and Chair at the Department of Optics at CICESE',
            biography: 'Dr. Santiago Camacho-Lopez received both his B.Sc. (1992) and M.Sc. (1994) degrees in Physics from Universidad Autonoma Metropolitana-Iztapalapa in Mexico City, and his Ph.D. (2000) degree in Physics from the Imperial College of Science, Technology and Medicine, University of London, UK. He started to work in the ultrashort pulse lasers field at University of Toronto where he was a postdoctoral fellow (2000-2003). He joined the Department of optics in CICESE, Ensenada, Baja California, Mexico, in 2003. Since then he is a full time researcher and has chaired the Department (2010-2016). His research interests include processing of materials using ultrashort pulse lasers, nonlinear optics, and biophotonics. Dr. Camacho-Lopez holds an Adjunct Professor position in the ME Department at UCR.(2013-present)',
            externalWebsite: 'http://l2pupmat.cicese.mx/',
            image: 'santiago.jpg'
          },
          {
            name: 'Dr. Juan Hernández-Cordero, PhD',
            position: 'PI of Hernandez-Cordero Lab',
            type: 'personnel',
            abstract: 'Academic Secretary at the Department of Rheology and Material Mechanics at UNAM',
            biography: 'Juan Hernández-Cordero received his B.Sc. (electrical engineering, 1992) from the National Autonomous University of Mexico (UNAM), followed by a year as a researcher and assistant at the Materials Research Institute (IIM) of the UNAM. He was awarded a full scholarship to Brown University, where he earned a Master’s and Ph.D. degrees from the Division of Engineering in 1996 and 1998, respectively, followed by a year of Postdoctoral research at the Laboratory for Lightwave Technology in Boston University. He is currently a full time tenured researcher at the Materials Research Institute (IIM) of the UNAM, where he has established the Laboratory for Fiber Lasers and Optical Fiber Sensors. His research interests include optical fiber sensors, fiber lasers and fiber devices, random lasers, and optical fiber traps.',
            externalWebsite: '',
            image: 'juan.jpg'
          },
          {
            name: 'Dr. Rubén Ramos-García, PhD',
            position: 'PI of Ramos-Garcia Lab',
            type: 'personnel',
            abstract: 'Professor at the Department of Biophotonics and Optics/Nonlinear Optics at INAOE',
            biography: 'Rubén Ramos-García received his Bachelors degree in Physics and Mathematics from the National Polytechnic Institute in Mexico City (1990), his Masters degree in optics from the Center for Research in Optics in Leon Mexico (1992) and his Doctor of Philosophy in Physics from the Imperial College in London UK (1997). Since 1997 joined the Optics Department at the National Research Center of Astrophysics, Optics and Electronics. His research focuses in biophotonics in particular optical tweezers, optical cavitation and photodynamic therapy.',
            externalWebsite: '',
            image: 'ruben.jpg'
          },
          {
            name: 'David Halaney',
            position: 'C-SAMBA Manager',
            type: 'graduate',
            abstract: 'Department of Mechanical Engineering, UCR',
            biography: 'David Halaney received his B.S. in Biology from Trinity University in 2011, and then spent 4 years as a Research Assistant at the University of Texas Health Science Center at San Antonio, TX, where his research focused on improving light-based diagnosis and treatment of cardiovascular diseases. He joined Dr. Guillermo Aguilar\'s Laboratory of Transport Phenomena for Biomedical Applications in the UCR Department of Mechanical Engineering in September of 2015, where he is working towards his Ph.D. and acting as a Project Manager for the Window to the Brain development under C-SAMBA.',
            externalWebsite: '',
            image: 'david.jpg'
          },
          {
            name: 'Duncan Ashby',
            position: 'Rao Lab',
            type: 'graduate',
            abstract: 'Department of Mechanical Engineering, UCR',
            biography: 'Duncan Z. Ashby received his B.S. in Physics from the University of Redlands in 2012 and his M.S. in Mechanical Engineering from the University of California, Riverside in 2015. He is currently a third year Ph.D. student in Mechanical Engineering and a proud member of the Biomedical Microdevices Laboratory under the advisement of Dr. Masaru Rao. His research projects include optimization of nanoporous titania growth for photocatalytic microreactor applications and diffusion bonding of titanium to YSZ for WttB.',
            externalWebsite: '',
            image: 'duncan.jpg'
          },
          {
            name: 'Dana Rutherford',
            position: 'Liu Lab',
            type: 'graduate',
            abstract: 'Department of Bioengineering, UCR',
            biography: 'Dana Rutherford is grateful to be a second year Ph.D. student in Dr. Liu\'s Biomaterials and Nanomedicine Laboratory, in UCR\'s Bioengineering Department! Aside from working with Dr. Liu and Aaron to develop biocompatibility cell studies for WttB, Dana can be found completing her cardiovascular engineering Ph.D project. Way back in the day, Dana completed her B.S. in Chemical Engineering and minored in Art History at UCSB, just north of beautiful Riverside.',
            externalWebsite: '',
            image: 'dana.jpg'
          },
          {
            name: 'Gottlieb Uahengo, Jr.',
            position: 'Garay Lab',
            type: 'graduate',
            abstract: 'Department of Mechanical Engineering, UCSD',
            biography: 'Gottlieb Uahengo Jr. received his B.Sc. in Physics from Augsburg College in Minneapolis, MN and a M.Sc. in Mechanical Engineering from the University of California, Riverside. He is currently pursuing a Ph.D. in Engineering Physics at the University of California, San Diego conducting his research in the Advanced Materials Processing and Synthesis Laboratory (AMPS Lab). His research focuses on the preparation of rare-earth stabilized nano crystalline zirconia with tunable optical/mechanical properties.',
            externalWebsite: '',
            image: 'gottlieb.jpg'
          },
          {
            name: 'Stephen Exarhos',
            position: 'Mangolini Lab',
            type: 'graduate',
            abstract: 'Department of Mechanical Engineering, UCR',
            biography: 'Stephen Exarhos is a mechanical engineering Ph.D. student in Dr. Lorenzo Mangolini’s group at the University of California, Riverside, where he completed his MS titled “Aerosol Spray Pyrolysis Synthesis of CZTS Nanostructures” in 2015. His primary research focus is the synthesis of copper-zinc-tin-sulfide and other semiconducting nanoparticles and thin films for photovoltaic applications. His expertise lies in material synthesis and characterization.',
            externalWebsite: '',
            image: 'stephen.jpg'
          },
          {
            name: 'Nami Davoodzadeh',
            position: 'Aguilar Lab',
            type: 'graduate',
            abstract: 'Department of Bioengineering, UCR',
            biography: 'Nami Davoodzadeh is a Ph.D. student working in Guillermo Aguilar’s research team at the University of California, Riverside. Prior to beginning the Ph.D. program, his research focused on material fabrication and thermodynamic modeling in IUST department of chemical engineering. Now, Nami works with the C-SAMBA team on the Window to the Brain project. Nami’s research focuses on the development of biocompatible materials.',
            externalWebsite: '',
            image: 'nami.jpg'
          },
          {
            name: 'Cecilia Guerra',
            position: 'Camacho-Lopez Lab',
            type: 'graduate',
            abstract: 'Department of Optics, CICESE',
            biography: 'Cecilia Guerra is a Ph.D. student in the Optics Department at CICESE who works primarily on optical characterization of selected ceramic materials and their interaction with ultra short pulsed lasers. She also aims to demonstrate the formation of waveguide-like structures induced by laser irradiation, which could lead to the fabrication of more complex photonic devices.',
            externalWebsite: '',
            image: 'cecilia.jpg'
          },
          {
            name: 'Nataneal Cuando-Espitia',
            position: 'Aguilar Lab',
            type: 'graduate',
            abstract: 'Post-doc',
            biography: 'Natanael Cuando-Espitia received his B.Sc. in Engineering (2009) from the National Autonomous University of Mexico (UNAM), his Masters (2011) and Ph.D. (2015) degrees in Material Science and Engineering from the Materials Research Institute (IIM) of the UNAM. He is curently working at UCR as a postdoctoral researcher. His research interests include random lasers, interaction light-tissue and light scattering.',
            externalWebsite: '',
            image: 'nataneal.jpg.png'
          },
          {
            name: 'Yryx Luna',
            position: 'C-SAMBA',
            type: 'graduate',
            abstract: 'Visiting Masters Student',
            biography: 'Yryx Y. Luna Palacios received her B.S. in Biotechnology Engineering from the Polytechnic University of the Valley of Toluca in 2014 and her M.S. in Materials Science titled “Study of second harmonic generation and fluorescence in ZnO nanoparticles synthesized by laser ablation” from the Autonomous University of State of Mexico Faculty of Chemistry in 2017. She currently collaborates with UCR on the WttB project. Her research interests includes nonlinear optical effects and the interaction of lasers with nanoparticles and bacteria.',
            externalWebsite: '',
            image: 'yryx.jpg.png'
          },
          {
            name: 'Samantha Corber',
            position: 'Rao Lab',
            type: 'graduate',
            abstract: 'Mechanical Engineering PhD Student',
            biography: 'Samantha received her B.S. in Chemistry from Washburn University, Topeka, KS in 2015. She is currently a second year Ph.D student at the University of California, Riverside in mechanical engineering under advisement of Dr. Masaru Rao. Her research focus is toward the development of hollow, out-of-plane, titanium microneedle devices for the transdermal delivery of optical clearing agents and other medical applications. She was awarded the National Science Foundation Graduate Research Fellowship in 2016.',
            externalWebsite: '',
            image: 'samantha.jpg'
          },
          {
            name: 'Dr. Julio Ramirez-San-Juan, PhD',
            position: 'C-SAMBA',
            type: 'collaborator',
            abstract: 'Department of Optics, INAOE',
            biography: 'Julio Cesar Ramirez-San-Juan received his Bachelors degree in Physics from the National University of Mexico (1997), his Masters degree in optics (1999) and his Ph.D. in optics (2003) from the National Research Center of Astrophysics, Optics and Electronics (INAOE) in Puebla, Mexico. From 2003 to 2005 was a postdoctoral scholar at the Beckman Laser Institute and Medical Clinic, University of California, Irvine, USA. Since 2005 joined the Optics Department at the INAOE. His research are is in biophotonics, focusing his interests in laser speckle imaging and optical tweezers. He works closely with Dr. Rubén Ramos-García on studies related to the Window to the Brain project.',
            externalWebsite: '',
            image: 'julio.jpg'
          }
        ]
      }
    },
    computed: {
      personnel: function () {
        return this.people.filter(person => {
          return person.type === 'personnel'
        })
      },
      graduates: function () {
        return this.people.filter(person => {
          return person.type === 'graduate'
        })
      }
    }
  }
</script>
