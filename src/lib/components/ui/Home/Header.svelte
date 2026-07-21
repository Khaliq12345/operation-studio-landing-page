<script lang="ts">
	import * as NavigationMenu from "$lib/components/ui/navigation-menu";
	import { Button } from "$lib/components/ui/button";
	import { navigationMenuTriggerStyle } from "../navigation-menu/navigation-menu-trigger.svelte";
	import Menu from "@lucide/svelte/icons/menu";
	import X from "@lucide/svelte/icons/x";

	const navigationMenus = [
		{ name: "Solution", value: "#solution" },
		{ name: "Process", value: "#process" },
		{ name: "Case Studies", value: "#studies" },
		{ name: "FAQ", value: "#faq" },
	];

	let isMobileMenuOpen = $state(false);

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="relative w-full border-b border-muted bg-background z-50">
	<nav
		class="flex w-full items-center justify-between px-6 py-4 mx-auto max-w-7xl"
	>
		<!-- Left: Logo / Business Name -->
		<div class="flex items-center gap-2 relative z-50">
			<span class="font-bold text-xl tracking-tight">
				OpsEngine
			</span>
		</div>

		<!-- Middle: Desktop Navigation Menu -->
		<div class="hidden md:flex">
			<NavigationMenu.Root>
				<NavigationMenu.List>
					{#each navigationMenus as menu}
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a
										href={menu.value}
										class={navigationMenuTriggerStyle()}
									>
										{menu.name}
									</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/each}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>

		<!-- Right: Desktop Action Button -->
		<div class="hidden md:block relative z-50">
			<Button
				href="https://calendly.com/khaliq-tech2work/30min"
				>Book a call</Button
			>
		</div>

		<!-- Mobile: Hamburger Toggle -->
		<Button
			class="md:hidden relative z-50 p-2"
			onclick={toggleMenu}
			aria-label="Toggle navigation menu"
		>
			{#if isMobileMenuOpen}
				<X class="h-6 w-6" strokeWidth={2} />
			{:else}
				<Menu class="h-6 w-6" strokeWidth={2} />
			{/if}
		</Button>
	</nav>

	<!-- Mobile Dropdown Menu -->
	{#if isMobileMenuOpen}
		<div
			class="absolute top-full left-0 w-full bg-background border-b border-muted shadow-lg flex flex-col p-6 gap-6 md:hidden z-40 slide-down"
		>
			<nav class="flex flex-col gap-4 text-center">
				{#each navigationMenus as menu}
					<a
						href={menu.value}
						class="text-lg font-medium text-foreground hover:text-primary transition-colors"
						onclick={toggleMenu}
					>
						{menu.name}
					</a>
				{/each}
			</nav>
			<Button
				class="w-full mt-2"
				size="lg"
				href="https://calendly.com/khaliq-tech2work/30min"
				>Book a call</Button
			>
		</div>
	{/if}
</header>

<style>
	/* Optional: Simple animation for mobile menu */
	.slide-down {
		animation: slideDown 0.2s ease-out forwards;
		transform-origin: top;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: scaleY(0.95);
		}
		to {
			opacity: 1;
			transform: scaleY(1);
		}
	}
</style>
