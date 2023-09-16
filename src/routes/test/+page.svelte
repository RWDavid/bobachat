<script>
	export let data;
</script>

<h1>This is a test page.</h1>

<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
