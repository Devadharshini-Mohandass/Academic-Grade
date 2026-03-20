function calculate() {
    let name = document.getElementById("name").value;

    let marks = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    // Validation
    if (name === "" || marks.includes(NaN)) {
        alert("Please fill all fields!");
        return;
    }

    for (let m of marks) {
        if (m < 0 || m > 100) {
            alert("Marks should be between 0 and 100");
            return;
        }
    }

    let total = marks.reduce((a, b) => a + b, 0);
    let average = total / 5;

    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F";

    document.getElementById("result").innerHTML = `
        Name: ${name} <br>
        Total: ${total} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade}
    `;
}
