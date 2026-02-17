function verifyNews() {
    let score = 0;
    let reasons = [];

    const headline = document.getElementById("headline").value.toLowerCase();
    const trusted = document.getElementById("trusted").checked;
    const official = document.getElementById("official").checked;
    const recent = document.getElementById("recent").checked;

    if (trusted) score++;
    else reasons.push("News not found on trusted media");

    if (official) score++;
    else reasons.push("No official government reference");

    if (recent) score++;
    else reasons.push("News date is not recent");

    // Pattern analysis (non-AI)
    const fakePatterns = ["breaking", "urgent", "share fast", "must watch"];
    fakePatterns.forEach(word => {
        if (headline.includes(word)) {
            reasons.push("Headline contains sensational words");
        }
    });

    let status = "";
    if (score >= 2) {
        status = "🟡 Partially Verified";
    } else {
        status = "🔴 Not Verified";
    }

    let outputHTML = `<h3>Verification Status: ${status}</h3>`;

    if (status === "🔴 Not Verified") {
        outputHTML += `
        <p class="warning">⚠ Warning: This news is not verified by trusted sources.</p>
        `;
    }

    outputHTML += `<h4>Reasons:</h4><ul>`;
    reasons.forEach(r => {
        outputHTML += `<li>${r}</li>`;
    });
    outputHTML += `</ul>`;

    document.getElementById("output").innerHTML = outputHTML;
}
