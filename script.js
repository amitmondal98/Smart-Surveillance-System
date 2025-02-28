// Access the webcam
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    document.getElementById("video").srcObject = stream;
  })
  .catch((error) => {
    console.error("Error accessing webcam: ", error);
  });

// Sample data update (to be replaced with real detection logic)
setInterval(() => {
  document.getElementById("human-detect").innerText = Math.floor(
    Math.random() * 5
  );
  document.getElementById("face-recog").innerText = Math.floor(
    Math.random() * 3
  );
  document.getElementById("imposter-detect").innerText = Math.floor(
    Math.random() * 2
  );
}, 3000);
