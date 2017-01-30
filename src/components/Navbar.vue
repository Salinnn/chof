<template lang="html">
	<nav class="nav has-shadow">
		<div class="nav-left">
			<router-link class="nav-item is-brand" to="/">
				<h1 class="title is-1">Chazy´s Hall of Shame</h1>
			</router-link>
		</div>
		<div class="nav-right">
			<router-link class="nav-item is-tab" to="/top">
				<h3 class="subtitle is-3"><i class="fa fa-dashboard"></i> Top 10<h3>
			</router-link>
			<router-link class="nav-item is-tab" to="/projects">
				<h3 class="subtitle is-3"><i class="fa fa-list-alt"></i> Random</h3>
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
