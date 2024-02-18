<script lang="ts">
//@ts-ignore
import Papa from "papaparse";

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvA8rKI3WxuAwE3ZxncrV9btR7UX0na-4xUc7QAu_RXSvvU9GJpt74qIgY4i_epojVMLWydwHmANKt/pubhtml?gid=0&single=true'; // Replace it with the URL to your published CSV file

// Function to fetch and parse the CSV data
function fetchAndParseCSV(url:string) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.text();
    })
    .then(csvText => {
      // Parse the CSV data
      const data = Papa.parse(csvText, {
    complete: function(results: any) {
        console.log("Parsed results:", results.data);
    }
});
    })
    .catch(error => {
      console.error('Error fetching and parsing CSV:', error);
    });
}

// Call the function
fetchAndParseCSV(csvUrl);

</script>