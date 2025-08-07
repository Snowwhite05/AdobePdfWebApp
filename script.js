let adobeDCView;

document.addEventListener("adobe_dc_view_sdk.ready", function () {
  adobeDCView = new AdobeDC.View({
    clientId: "db3623c9b1c14e02849c1bf644bb8fe4", // use your real API key
    divId: "adobe-dc-view"
  });

  adobeDCView.previewFile({
    content: {
      location: {
        url: "assets/sample.pdf" // <-- correct path to your PDF
      }
    },
    metaData: {
      fileName: "sample.pdf"
    },
    // ✅ Add this inside previewFile, not above!
    embedMode: "IN_LINE" // <-- move this here
  });

  loadOutline();
  loadSections();
});


// Load Outline and Build Sidebar
async function loadOutline() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "<h3>Outline</h3>";
  const res = await fetch("data/outline.json");
  const data = await res.json();

  data.outline.forEach(item => {
    const el = document.createElement("div");
    el.className = `heading ${item.level}`;
    el.textContent = item.text;
    el.onclick = () => goToPage(item.page);
    sidebar.appendChild(el);
  });
}

// Load Sections (Highlights) and Metadata
async function loadSections() {
  const res = await fetch("data/sections.json");
  const data = await res.json();

  // Metadata (you may manually insert this if not available)
  if (data.metadata) {
    document.getElementById("persona").innerText = "Persona: " + data.metadata.persona;
    document.getElementById("job").innerText = "Job to be done: " + data.metadata.job_to_be_done;
  }

  // Highlight Sections (simulate with markers in sidebar for now)
  if (data.sections) {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML += "<h4 style='margin-top: 20px;'>⭐ Important Sections</h4>";
    data.sections.forEach(section => {
      const div = document.createElement("div");
      div.className = "heading H2";
      div.style.background = "#fff9c4";
      div.innerText = `Page ${section.page}: ${section.matched_keyword}`;
      div.onclick = () => goToPage(section.page);
      sidebar.appendChild(div);
    });
  }
}

// Page Navigation
function goToPage(pageNum) {
  if (!adobeDCView) {
    console.warn("Viewer not ready yet.");
    return;
  }

  adobeDCView.getAPIs().then(api => {
    api.gotoLocation({ pageNumber: pageNum });
  }).catch(err => {
    console.error("gotoLocation failed:", err);
  });
}




 //clientId: "db3623c9b1c14e02849c1bf644bb8fe4",
