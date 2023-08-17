const output = document.getElementById("output");

const createPromises = [
  getRandom('Promise 1'),
  getRandom('Promise 2'),
  getRandom('Promise 3')
];

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandom(solve) {
  return new Promise((resolve) => {
    const time = randomTime(1, 3) * 1000; // Convert to milliseconds
    setTimeout(() => {
      resolve({ promiseName: solve, timeTaken: time / 1000 }); // Resolve with an object containing promiseName and timeTaken
    }, time);
  });
}

Promise.all(createPromises)
  .then((results) => {
    const totalTime = results.reduce((total, result) => total + result.timeTaken, 0);

    output.innerHTML = "";
    output.innerHTML = `
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
    output.innerHTML = `
      <tr>
        <td colspan="2">Error occurred</td>
      </tr>
    `;
  });
