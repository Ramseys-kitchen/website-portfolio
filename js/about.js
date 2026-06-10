const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    alert("Mock PDF download – in a real site this would generate a PDF or link to your CV.");
  });
}