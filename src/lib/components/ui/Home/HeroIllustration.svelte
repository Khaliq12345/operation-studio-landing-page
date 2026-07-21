<svg
	viewBox="0 0 600 500"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class="w-full h-full text-blue-600"
>
	<defs>
		<!-- Gradients -->
		<linearGradient
			id="bgGlow"
			x1="0"
			y1="0"
			x2="600"
			y2="500"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#3B82F6" stop-opacity="0.08" />
			<stop
				offset="1"
				stop-color="#10B981"
				stop-opacity="0.04"
			/>
		</linearGradient>

		<linearGradient
			id="primaryCard"
			x1="120"
			y1="100"
			x2="480"
			y2="380"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#FFFFFF" />
			<stop offset="1" stop-color="#F8FAFC" />
		</linearGradient>

		<linearGradient id="accentBlue" x1="0" y1="0" x2="1" y2="1">
			<stop stop-color="#2563EB" />
			<stop offset="1" stop-color="#3B82F6" />
		</linearGradient>

		<!-- Soft Shadow Filter -->
		<filter
			id="softShadow"
			x="0"
			y="0"
			width="600"
			height="500"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feDropShadow
				dx="0"
				dy="12"
				stdDeviation="16"
				flood-color="#0F172A"
				flood-opacity="0.08"
			/>
		</filter>
		<filter
			id="badgeShadow"
			x="0"
			y="0"
			width="600"
			height="500"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feDropShadow
				dx="0"
				dy="6"
				stdDeviation="10"
				flood-color="#0F172A"
				flood-opacity="0.12"
			/>
		</filter>
	</defs>

	<!-- Outer Ambient Glow -->
	<rect width="600" height="500" rx="24" fill="url(#bgGlow)" />

	<!-- Connecting Workflow Lines (Dotted / Dashed) -->
	<path
		d="M 120 250 C 200 150, 300 150, 380 220"
		stroke="#94A3B8"
		stroke-width="3"
		stroke-dasharray="6 6"
		opacity="0.6"
	/>
	<path
		d="M 220 340 C 320 380, 420 320, 480 250"
		stroke="#94A3B8"
		stroke-width="3"
		stroke-dasharray="6 6"
		opacity="0.6"
	/>

	<!-- Central Dashboard Card -->
	<g filter="url(#softShadow)">
		<rect
			x="120"
			y="90"
			width="360"
			height="280"
			rx="16"
			fill="url(#primaryCard)"
			stroke="#E2E8F0"
			stroke-width="2"
		/>

		<!-- Header Bar -->
		<rect
			x="120"
			y="90"
			width="360"
			height="48"
			rx="16"
			fill="#F1F5F9"
		/>
		<circle cx="150" cy="114" r="6" fill="#EF4444" />
		<circle cx="170" cy="114" r="6" fill="#F59E0B" />
		<circle cx="190" cy="114" r="6" fill="#10B981" />
		<rect
			x="220"
			y="106"
			width="120"
			height="16"
			rx="8"
			fill="#CBD5E1"
		/>

		<!-- Dashboard Content Elements -->
		<!-- Chart Lines -->
		<rect
			x="150"
			y="160"
			width="180"
			height="12"
			rx="6"
			fill="#0F172A"
		/>
		<rect
			x="150"
			y="184"
			width="120"
			height="10"
			rx="5"
			fill="#94A3B8"
		/>

		<!-- Stat Blocks -->
		<rect
			x="150"
			y="214"
			width="90"
			height="60"
			rx="10"
			fill="#EFF6FF"
		/>
		<rect
			x="165"
			y="230"
			width="40"
			height="8"
			rx="4"
			fill="#3B82F6"
		/>
		<rect
			x="165"
			y="246"
			width="60"
			height="12"
			rx="6"
			fill="#1D4ED8"
		/>

		<rect
			x="255"
			y="214"
			width="90"
			height="60"
			rx="10"
			fill="#ECFDF5"
		/>
		<rect
			x="270"
			y="230"
			width="40"
			height="8"
			rx="4"
			fill="#10B981"
		/>
		<rect
			x="270"
			y="246"
			width="60"
			height="12"
			rx="6"
			fill="#047857"
		/>

		<!-- Automation Pipeline Nodes -->
		<rect
			x="150"
			y="294"
			width="200"
			height="8"
			rx="4"
			fill="#E2E8F0"
		/>
		<rect
			x="150"
			y="294"
			width="140"
			height="8"
			rx="4"
			fill="url(#accentBlue)"
		/>
		<circle
			cx="290"
			cy="298"
			r="8"
			fill="#2563EB"
			stroke="#FFFFFF"
			stroke-width="3"
		/>
	</g>

	<!-- Floating Node 1: Top Left (Input Spreadsheet / Trigger) -->
	<g filter="url(#badgeShadow)">
		<rect
			x="60"
			y="140"
			width="110"
			height="70"
			rx="12"
			fill="#FFFFFF"
			stroke="#CBD5E1"
			stroke-width="1.5"
		/>
		<rect
			x="75"
			y="155"
			width="30"
			height="30"
			rx="8"
			fill="#DBEAFE"
		/>
		<!-- Sheet Icon Representation -->
		<path
			d="M 85 165 H 95 M 85 170 H 95 M 85 175 H 91"
			stroke="#2563EB"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<rect
			x="115"
			y="162"
			width="40"
			height="8"
			rx="4"
			fill="#334155"
		/>
		<rect
			x="115"
			y="176"
			width="28"
			height="6"
			rx="3"
			fill="#94A3B8"
		/>
	</g>

	<!-- Floating Node 2: Bottom Right (Success Automation Badge) -->
	<g filter="url(#badgeShadow)">
		<rect
			x="390"
			y="300"
			width="150"
			height="80"
			rx="14"
			fill="#1E293B"
		/>
		<circle
			cx="425"
			cy="340"
			r="18"
			fill="#10B981"
			fill-opacity="0.2"
		/>
		<circle cx="425" cy="340" r="12" fill="#10B981" />
		<!-- Checkmark -->
		<path
			d="M 420 340 L 423 343 L 430 336"
			stroke="#FFFFFF"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="455"
			y="330"
			width="65"
			height="8"
			rx="4"
			fill="#FFFFFF"
		/>
		<rect
			x="455"
			y="344"
			width="45"
			height="6"
			rx="3"
			fill="#64748B"
		/>
	</g>

	<!-- Floating Node 3: Top Right (Database Engine) -->
	<g filter="url(#badgeShadow)">
		<rect
			x="440"
			y="70"
			width="90"
			height="90"
			rx="16"
			fill="#FFFFFF"
			stroke="#E2E8F0"
			stroke-width="1.5"
		/>
		<rect
			x="465"
			y="90"
			width="40"
			height="50"
			rx="6"
			fill="#F8FAFC"
			stroke="#94A3B8"
			stroke-width="2"
		/>
		<line
			x1="465"
			y1="106"
			x2="505"
			y2="106"
			stroke="#94A3B8"
			stroke-width="2"
		/>
		<line
			x1="465"
			y1="122"
			x2="505"
			y2="122"
			stroke="#94A3B8"
			stroke-width="2"
		/>
		<circle cx="495" cy="98" r="2" fill="#10B981" />
		<circle cx="495" cy="114" r="2" fill="#10B981" />
		<circle cx="495" cy="130" r="2" fill="#10B981" />
	</g>

	<!-- Decorative Sparks/Nodes -->
	<circle cx="90" cy="90" r="4" fill="#3B82F6" />
	<circle cx="520" cy="220" r="6" fill="#10B981" opacity="0.6" />
	<circle cx="100" cy="380" r="5" fill="#F59E0B" opacity="0.8" />
</svg>
