<script lang="ts">
	let title =
		"OpsEngine | Custom Operations & Workflow Automation by Tech2Work Agency";
	let description =
		"Eliminate fragile spreadsheet traps and scale your operations with database-backed tools built specifically for how you work.";
	let ogImage = "https://opsengine.tech2work.tech/og-image.png";
	let url = "https://opsengine.tech2work.tech";
	let siteName = "OpsEngine by Tech2Work Agency";

	// JSON-LD Structured Data: Software Product developed by Tech2Work Agency
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "OpsEngine",
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web-based",
		url: url,
		image: ogImage,
		description: description,
		author: {
			"@type": "Organization",
			name: "Tech2Work Agency",
			url: "https://tech2work.tech",
		},
		publisher: {
			"@type": "Organization",
			name: "Tech2Work Agency",
		},
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={url} />

	<!-- Open Graph / LinkedIn / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter Preview Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>
