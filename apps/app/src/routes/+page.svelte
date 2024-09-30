<script lang="ts">
	import { invoke } from '@tauri-apps/api/core';

	let first = $state('');
	let second = $state('');
	let result = $state('');

	async function sum(e: Event) {
		e.preventDefault();
		result = await invoke('sum', { first, second });
	}
</script>

<div class="h-dvh flex items-center bg-gray-800 text-white">
	<div class="m-auto bg-gray-600 rounded-xl p-4 shadow-xl">
		<h1 class="text-example text-2xl leading-7 text-center mb-4">
			Welcome to Turbo + Tauri + Vite!
		</h1>

		<form onsubmit={sum} class="flex flex-col items-center gap-2 w-full">
			<input
				class="w-full text-black px-2 py-1"
				id="first"
				placeholder="Enter a number"
				type="number"
				bind:value={first}
			/>
			<input
				class="w-full text-black px-2 py-1"
				id="second"
				placeholder="Enter a number"
				type="number"
				bind:value={second}
			/>
			<button class="bg-blue-500 px-4 py-2 rounded-lg w-full" type="submit">Sum</button>
		</form>
		<p class="mt-4">Result is: {result}</p>
	</div>
</div>
