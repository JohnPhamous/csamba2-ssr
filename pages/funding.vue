<template>
  <div>
    <h2 class="section-title-primary text-center">	
		<span class="flr"> C-SAMBA </span>
	Funding</h2>
    <Hero :hero="'/img/hero/Hero-Misc.png'" class="ttl" style="font-size: 24px; padding-top: 15rem; letter-spacing: 2.75px;">
      <strong>C-SAMBA</strong> is supported in part by research grants from the <strong>National Science Foundation</strong>.
	  <table style="margin-top: 25rem; font-size: 17px; letter-spacing:1.75px">
		<tr>
			<td style="padding-right:15px; font-weight: 800">
				Disclaimer:
				<br></br>
			</td>
			<td style="text-align: left">
				Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
			</td>
		</tr>
	</table>
	</Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero-Small'

export default {
  components: {
    Hero
  }
}
</script>
