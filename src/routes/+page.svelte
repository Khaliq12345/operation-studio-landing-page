<script lang="ts">
	import Approach from "$lib/components/ui/Home/Approach.svelte";
	import Cta from "$lib/components/ui/Home/Cta.svelte";
	import Faq from "$lib/components/ui/Home/Faq.svelte";
	import Footer from "$lib/components/ui/Home/Footer.svelte";
	import Header from "$lib/components/ui/Home/Header.svelte";
	import Hero from "$lib/components/ui/Home/Hero.svelte";
	import Review from "$lib/components/ui/Home/Review.svelte";
	import Steps from "$lib/components/ui/Home/Steps.svelte";
	import TrapSection from "$lib/components/ui/Home/TrapSection.svelte";
	import SEO from "$lib/components/SEO.svelte";
</script>

<!-- OpsEngine Metadata Header Injection -->
<SEO
	title="OpsEngine | Custom Workflow Automation & Database Systems by Tech2Work"
	description="Stop managing broken processes. OpsEngine replaces fragile spreadsheets and manual overhead with custom, database-backed operational software built for how you work."
	url="https://opsengine.tech2work.tech"
	ogImage="https://opsengine.tech2work.tech/og-image.png"
/>

<Header></Header>
<main>
	<Hero></Hero>
	<TrapSection />
	<Approach />
	<Steps />
	<Review />
	<Faq />
	<Cta />
	<Footer />
</main>
