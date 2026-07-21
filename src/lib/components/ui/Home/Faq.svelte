<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion/index.js";

	const faqs = [
		{
			id: "item-1",
			question: "How long does it take to build a custom tool?",
			answer: "Most custom tools are designed, built, and deployed in 2–4 weeks. You will typically get to test a working beta version within the first few days.",
		},
		{
			id: "item-2",
			question: "Why not just use Airtable or Monday.com?",
			answer: "No-code platforms are great to start with, but quickly hit performance bottlenecks, strict row limits, and formula bugs as your team grows. We build database-backed custom software that fits your exact workflow without rigid monthly per-seat constraints.",
		},
		{
			id: "item-3",
			question: "What happens if our process changes?",
			answer: "Because the software is completely custom, updating logic or adding new features is simple. We provide ongoing support and maintenance so your tools easily evolve alongside your operations.",
		},
	];
</script>

<section
	class="min-h-[60vh] w-full flex flex-col items-center justify-center md:px-6 py-20 border-t-2"
	id="faq"
>
	<div class="max-w-3xl w-full flex flex-col items-center space-y-12 p-2">
		<!-- Heading -->
		<h2
			class="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground text-center"
		>
			Frequently Asked Questions
		</h2>

		<!-- Accordion List -->
		<Accordion.Root type="single" class="w-full">
			{#each faqs as faq}
				<Accordion.Item
					value={faq.id}
					class="border-b border-slate-200"
				>
					<Accordion.Trigger
						class="flex w-full items-center justify-between py-5 text-left font-bold text-base md:text-lg text-slate-900 transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180"
					>
						<span>{faq.question}</span>
					</Accordion.Trigger>
					<Accordion.Content
						class="pb-5 text-sm md:text-base text-slate-600 leading-relaxed"
					>
						{faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>
