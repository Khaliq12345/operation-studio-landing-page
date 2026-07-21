<script lang="ts">
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{
			label: "Privacy Policy",
			href: "https://tech2work.tech/en/privacy",
			external: true,
		},
		{
			label: "Terms of Service",
			href: "https://tech2work.tech/en/terms",
			external: true,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/khaliq-salawou-b2a90a22b/",
			external: true,
		},
		// { label: "Contact Support", href: "" },
	];
</script>

<footer class="w-full bg-blue-200 py-10 px-6 md:px-12 border-t border-blue-100">
	<div
		class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
	>
		<!-- Left: Brand Logo / Name -->
		<a
			href="/"
			class="text-2xl font-extrabold tracking-tight text-slate-900"
		>
			OpsEngine
		</a>

		<!-- Middle: Links -->
		<nav
			class="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-medium text-slate-700"
		>
			{#each footerLinks as link}
				<a
					href={link.href}
					target={link.external
						? "_blank"
						: undefined}
					rel={link.external
						? "noopener noreferrer"
						: undefined}
					class="hover:text-slate-950 transition-colors"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Right: Copyright -->
		<div
			class="text-xs md:text-sm text-slate-500 font-normal text-center md:text-right"
		>
			© {currentYear} OpsEngine Automation. All rights reserved.
		</div>
	</div>
</footer>
