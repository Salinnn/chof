<template>
	<div>
		<navbar :show="true"></navbar>
		<div class="container is-fluid">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import  Home  from './components/Home';
import  Navbar  from './components/Navbar';
import  Top  from './components/Top';
import  Projects  from './components/Projects';

export default {
  components: {
    Home,
	Navbar,
	Top,
	Projects
  }
}
</script>

<style lang="scss">

@import '~bulma';

$fa-font-path: '~font-awesome/fonts/';

@import '~font-awesome/scss/font-awesome';

</style>
