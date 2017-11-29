<template>
  <div class="people section py-4">
    <h3 class="section-title text-center m-5">The Window to the Brain Undergraduate Research Club</h3>
    <div class="container">
      <p>
        The Window to the Brain - Undergraduate Research Club was founded to provide undergraduates with a community with a shared interest in participating in research.  We strive to build and strengthen confidence and knowledge in the STEM fields while readying undergraduates for research.  We promote connections with professors here on the UCR campus as well as with national leaders in the STEM fields.
      </p>
    </div>
    <div class="container py-5">
      <div class="row">

        <div v-for="b in board" :key="b.name" class="col-md-4 people text-center">
            <div class="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                <img :src="`img/people/${b.image}`"
                  class="w-100" 
                  :alt="b.name"
                />
            </div>
            <h5 class="mb-1">{{ b.name }}</h5>
            <h6 class="text-muted d-block mb-3">{{ b.position }}</h6>
            <p class="text-muted">{{ b.abstract }}</p>
            <a
              :href="`mailto:${b.email}`"
              class="btn btn-primary btn-pill text-white mb-5">
                Email
            </a>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 90%;
}
</style>

<script>
export default {
  data: () => {
    return {
      board: [
        {
          name: 'Melissa Mcinnis',
          position: 'President',
          image: 'melissa.jpg',
          email: 'mmcin001@ucr.edu'
        },
        {
          name: 'Andre Nanni Mendes',
          position: 'Vice President of Administration',
          image: 'andre.jpg',
          email: 'anann001@ucr.edu'
        },
        {
          name: 'Eric Ong',
          position: 'Secretary',
          image: 'eric.jpg',
          email: 'eong001@ucr.edu'
        },
        {
          name: 'Crysthal Alvarez',
          position: 'Vice President of Research',
          image: 'crysthal.jpg',
          email: 'calva021@ucr.edu'
        },
        {
          name: 'Sami Khan',
          position: 'Vice President of Internal Affairs',
          image: 'sami.jpg',
          email: 'skhan031@ucr.edu'
        },
        {
          name: 'Spyridon Catechis',
          position: 'Webmaster',
          image: 'spyridon.png',
          email: 'scate002@ucr.edu'
        },
        {
          name: 'Anita Chowdhury',
          position: 'Vice President of Membership Development and Education',
          image: 'anita.jpg',
          email: 'achow001@ucr.edu'
        },
        {
          name: 'Melanie Beltran',
          position: 'Vice President of Outreach',
          image: 'melanie.jpg',
          email: 'mbelt002@ucr.edu'
        },
        {
          name: 'Stephanie Kim',
          position: 'Vice President of Finance',
          image: 'stephanie.jpg',
          email: 'skim002@ucr.edu'
        }
      ]
    }
  }
}
</script>