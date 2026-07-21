<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import HeroIllustration from "./HeroIllustration.svelte";
</script>

<section
	class="w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-slate-100 px-6 py-16 md:px-12 overflow-hidden"
>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto"
	>
		<!-- Left Side: Copywriting Content -->
		<div class="flex flex-col justify-center space-y-8 h-full z-10">
			<div class="space-y-6">
				<h1
					class="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
				>
					Your manual workflows are ruining your
					business.
					<span class="block text-blue-600 mt-2"
						>Let's fix that.</span
					>
				</h1>

				<p
					class="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
				>
					Streamline your media asset pipeline,
					scale your operations, and eliminate
					manual bottlenecks seamlessly.
				</p>
			</div>

			<!-- CTA Block -->
			<div class="flex flex-col sm:flex-row gap-4 pt-2">
				<Button
					href="#traps"
					size="lg"
					class="text-base font-semibold px-8 h-12 shadow-md"
				>
					Get Started
				</Button>
				<Button
					href="https://calendly.com/khaliq-tech2work/30min"
					variant="outline"
					size="lg"
					class="text-base font-semibold px-8 h-12 bg-background"
				>
					Learn More
				</Button>
			</div>
		</div>

		<!-- Right Side: Graphic / Image -->
		<div
			class="flex items-center justify-center w-full h-full relative"
		>
			<!-- Subtle decorative background glow -->
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none"
			></div>

			<div
				class="relative w-full aspect-4/3 lg:aspect-square max-w-lg bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 group"
			>
				<HeroIllustration />
			</div>
		</div>
	</div>
</section>
