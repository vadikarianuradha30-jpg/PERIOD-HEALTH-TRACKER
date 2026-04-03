function calculate() {
    let lastDate = document.getElementById("lastDate").value;
    let cycle = parseInt(document.getElementById("cycle").value);

    if (!lastDate || !cycle) {
        alert("Please enter all details");
        return;
    }

    let date = new Date(lastDate);

    // Next period
    let nextPeriod = new Date(date);
    nextPeriod.setDate(date.getDate() + cycle);

    // Fertile window
    let fertileStart = new Date(date);
    fertileStart.setDate(date.getDate() + (cycle - 14));

    let fertileEnd = new Date(fertileStart);
    fertileEnd.setDate(fertileStart.getDate() + 5);

    document.getElementById("result").innerHTML =
        "Next Period: " + nextPeriod.toDateString() + "<br>" +
        "Fertile Window: " + fertileStart.toDateString() + " to " + fertileEnd.toDateString();
}