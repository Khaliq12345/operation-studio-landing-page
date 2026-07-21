<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<section
	class="w-full flex items-center justify-center md:px-6 py-20 bg-slate-100 p-2"
>
	<!-- Main Callout Box -->
	<div
		class="relative w-full max-w-5xl bg-secondary-foreground rounded-2xl p-10 md:p-20 text-center flex flex-col items-center space-y-6 overflow-hidden border border-slate-800 shadow-2xl"
	>
		<!-- Content Area -->
		<div class="relative z-10 max-w-2xl space-y-4">
			<h2
				class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
			>
				Stop managing broken processes.
			</h2>

			<p
				class="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto"
			>
				15-minute call, no obligation. We'll tell you
				honestly if we can solve your problem or if
				you're better off sticking with what you have.
			</p>
		</div>

		<!-- CTA Button -->
		<div class="relative z-10 pt-2">
			<Button
				href="https://calendly.com/khaliq-tech2work/30min"
				variant="secondary"
				class="bg-white hover:bg-slate-100 text-slate-950 font-semibold px-8 py-6 rounded-md text-base transition-colors shadow-sm"
			>
				Book a call
			</Button>
		</div>
	</div>
</section>
