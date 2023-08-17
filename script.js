//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const outputTable = document.getElementById("output");

  // Helper function to generate a random time between min and max seconds
  function getRandomTime(min, max) {
    return Math.random() * (max - min) * 1000 + min * 1000;
  }

  // Helper function to create a Promise that resolves after a random time
  function createRandomPromise(promiseName) {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const randomTime = getRandomTime(1, 3);
      setTimeout(() => {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;
        resolve({ promiseName, timeTaken });
      }, randomTime);
    });
  }

  // Create an array of Promises
  const promises = [
    createRandomPromise("Promise 1"),
    createRandomPromise("Promise 2"),
    createRandomPromise("Promise 3"),
  ];

  // Display "Loading..." initially
  outputTable.innerHTML = 

  // Wait for all promises to resolve using Promise.all
  Promise.all(promises)
    .then((results) => {
      // Calculate the total time taken
      const totalTime = results.reduce((total, result) => total + result.timeTaken, 0);

      // Update the table with the results
		outputTable.innerHTML = "";
      outputTable.innerHTML = `
        <tr>
          <td>${results[0].promiseName}</td>
          <td>${results[0].timeTaken.toFixed(3)}</td>
        </tr>
        <tr>
          <td>${results[1].promiseName}</td>
          <td>${results[1].timeTaken.toFixed(3)}</td>
        </tr>
        <tr>
          <td>${results[2].promiseName}</td>
          <td>${results[2].timeTaken.toFixed(3)}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>${totalTime.toFixed(3)}</td>
        </tr>
      `;
    })
    .catch((error) => {
      console.error("Error:", error);
      outputTable.innerHTML = `
        <tr>
          <td colspan="2">Error occurred</td>
        </tr>
      `; 
    });
});
