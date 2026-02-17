function checkNews() {

    let score = 0;

    if (document.getElementById("trusted").checked) {
        score += 30;
    }

    if (document.getElementById("multiple").checked) {
        score += 20;
    }

    if (document.getElementById("recent").checked) {
        score += 10;
    }

    if (document.getElementById("official").checked) {
        score += 5;
    }

    let status = "";
    let reason = "";

    if (score >= 60) {
        status = "Partially Verified";
        reason =
            "• Found on limited trusted sources<br>" +
            "• Official reference missing<br>" +
            "• Further verification required";
    } else {
        status = "Not Verified";
        reason =
            "• Not found on trusted media<br>" +
            "• No official reference<br>" +
            "• High risk of misinformation";
    }

    document.getElementById("result").innerHTML =
        "<b>Verification Status:</b> " + status + "<br>" +
        "<b>Trust Score:</b> " + score + "%<br><br>" +
        "<b>Reason:</b><br>" + reason +
        "<br><br><span style='color:red;'>⚠ This website does not declare news as fake or real.</span>";
}
