<template>
  <header>
    <h2 class="logo">StuderaMera</h2>
	<div class="logo-mobile">S</div>
  </header>
</template>

<script>
</script>

<style scoped>
header{
	margin-bottom: 3em;
}
.logo {
	color: #868483;
	padding: 1em;
	margin: 0;
}
.logo-mobile {
	display: none;
}
@media (max-width: 600px) {
	.logo {
		display: none;
	}
    .logo-mobile {
		display: flex;
        background: #FFFFFF;
        border-radius: 50px;
        /* height: 75px; */
        justify-content: center;
        align-self: center;
        width: 75px;
		margin: .5em;

        font-family: Viga;
        font-style: normal;
        font-weight: normal;
        font-size: 45px;
        line-height: 75px;

        color: #F8A978;
	}
}
</style>