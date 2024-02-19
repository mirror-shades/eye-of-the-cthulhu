import { writable } from 'svelte/store';

// Attempt to parse stored data, default to an empty array if none exists or on error.
const storedPlayerData = localStorage.getItem('data');
let parsedData;
try {
    parsedData = storedPlayerData ? JSON.parse(storedPlayerData) : [];
} catch (e) {
    console.error('Failed to parse data from localStorage:', e);
    parsedData = [];
}

// Initialize the Svelte store with the parsed data
export let currentPlayerData = writable(parsedData);

// Subscribe to the store changes and update localStorage
// Ensure to stringify the value when saving to localStorage
currentPlayerData.subscribe((value) => {
    localStorage.setItem('data', JSON.stringify(value));
});