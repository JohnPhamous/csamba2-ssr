<template>
  <div>
    <Hero :hero="'/img/hero/Hero-Home.png'">
      C-SAMBA Manufacturing
    </Hero>
    <div class="people section">
      <h3 class="section-title-primary text-center">Ceramic Welding</h3>
      <div class="container">
        <div class="research-figure pull-left">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/ceramic-welding1.png" alt="Example of a laser weld bead/joint between 2 pieces of Aluminum Oxide.The toal laser HAZ is approximately 3mm in width and the penetration is ~1mm.">
          <figcaption class="figure-caption">Example of a laser weld bead/joint between 2 pieces of Aluminum Oxide.The toal laser HAZ is approximately 3mm in width and the penetration is ~1mm.</figcaption>
        </div>
        <p>
          Laser processing, micro-machining, and welding have proven to be highly adaptable techniques for locally manipulating the material chemistry, geometry, and properties at sub-micrometer to meter length scales. Laser matter interactions at different wavelengths, duty-cycles, and pulse durations enables a large degree of control over the type of physical and/or chemical processes that materials undergo during a process-flow, resulting in the ability to machine, (remove, add, and join) materials via thermal and non-thermal processes that range from the softest biological tissues all the way to the hardest refractory metals and ceramics.
        </p>
        <div class="research-figure pull-right">
          <img class="research-img figure-img img-fluid rounded" src="/img/research/ceramic-welding2.png" alt="Example of a laser weld bead/joint between 2 pieces of Borrosilicate Glass. Glass has the lowest resistance to thermal shock of any ceramic material and represents a model system for proving the ability to obtain crack free joints in these material systems.">
          <figcaption class="figure-caption">Example of a laser weld bead/joint between 2 pieces of Borrosilicate Glass. Glass has the lowest resistance to thermal shock of any ceramic material and represents a model system for proving the ability to obtain crack free joints in these material systems.</figcaption>
        </div>
        <p>
          One current area of interest to our group is the joining of oxide ceramics and glasses using lasers. Fundamental to this capability, is a strong experimental and theoretical understanding of laser-matter interactions across timescales on the order of minutes down to pulse durations of ~200 fs. 1 femtosecond, i.e. 1 fs is equal to 1*10-15s, which means one millionth of a billionth of a second. Ultimately, understanding how laser light interacts with glasses and oxide ceramics at these timescales results in the ability to couple high peak powers into very small volumes, which gives rise to high temperatures that are required for joining/welding of glasses and ceramics (Tmelt~ 700°C to 3000°C). Moreover, because the time-scales used in these process-flows are short, the heating/cooling cycles are minimized, resulting in an optimal heat-affected-zone (HAZ) near the joint. Under optimized conditions, a crack/defect free joint is achieved, resulting in a joined material with unaltered mechanical properties.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../../components/Hero'

export default {
  components: {
    Hero
  }
}
</script>
