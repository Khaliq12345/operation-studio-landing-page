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
			id: "item-4",
			question: "Who owns the code and data, and where is it hosted?",
			answer: "You retain 100% ownership of your data and application code. We deploy solutions using containerized environments (Docker) on reliable cloud hosting like AWS, GCP, Azure or your own private server infrastructure.",
		},
		{
			id: "item-5",
			question: "How does your pricing model work?",
			answer: "We operate on a clear, fixed-scope project basis for initial builds. Unlike SaaS tools that penalize you with higher monthly fees as you add team members, your custom software scales without per-seat penalties.",
		},
		{
			id: "item-6",
			question: "What happens if our internal process changes later?",
			answer: "Because the software is completely custom-built for you, modifying logic or integrating new features is straightforward. We provide ongoing maintenance support so your stack evolves right alongside your operations.",
		},
		{
			id: "item-7",
			question: "What kind of post-launch maintenance or technical skill is needed?",
			answer: "Minimal to none. Because we package our systems using robust containerization (Docker, Coolify), they run smoothly and autonomously. We also handle the technical setup from end to end.",
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
