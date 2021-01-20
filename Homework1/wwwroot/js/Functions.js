/*
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
    var percent
    percent = document.getElementById("assignment").value + document.getElementById("project").value + document.getElementById("quizzes").value + document.getElementById("exams").value + document.getElementById("intex").value
    alert(percent)
});
*/

function calculate()
{
    var percent;
    var grade;
    var assignment = parseInt(document.getElementById("assignment").value);
    var project = parseInt(document.getElementById("project").value);
    var quizzes = parseInt(document.getElementById("quizzes").value);
    var exams = parseInt(document.getElementById("exams").value);
    var intex = parseInt(document.getElementById("intex").value);

    if (isNaN(assignment)) {
        alert("The assignment value cannot be null");

    }
    else if (assignment > 50) {
        alert("The assignment value must be inbetween 0 and 50")
    }
    else {
        if (isNaN(project)) {
            alert("The project value cannot be null");

        }
        else if (project > 10) {
            alert("The project value must be inbetween 0 and 50")
        }
        else {
            if (isNaN(quizzes)) {
                alert("The quiz cannot be null");

            }
            else if (quizzes > 10) {
                alert("The quiz value must be inbetween 0 and 50")
            }
            else {
                if (isNaN(exams)) {
                    alert("The exams cannot be null");

                }
                else if (exams > 20) {
                    alert("The exams value must be inbetween 0 and 50")
                }
                else {
                    if (isNaN(intex)) {
                        alert("The intex cannot be null");

                    }
                    else if (intex > 10) {
                        alert("The intex value must be inbetween 0 and 50")
                    }
                    else {
                        percent = assignment += project += quizzes += exams += intex
                        if (percent >= 94) {
                            grade = "A"
                        }
                        else if (percent >= 90 && percent < 94) {
                            grade = "A-"
                        }
                        else if (percent >= 87 && percent < 90) {
                            grade = "B+"
                        }
                        else if (percent >= 84 && percent < 87) {
                            grade = "B"
                        }
                        else if (percent >= 80 && percent < 77) {
                            grade = "B-"
                        }
                        else if (percent >= 77 && percent < 74) {
                            grade = "C+"
                        }
                        else if (percent >= 74 && percent < 70) {
                            grade = "C"
                        }
                        else if (percent >= 70 && percent < 67) {
                            grade = "C-"
                        }
                        else if (percent >= 67 && percent < 64) {
                            grade = "D+"
                        }
                        else if (percent >= 64 && percent < 60) {
                            grade = "D"
                        }
                        else if (percent >= 60 && percent < 94) {
                            grade = "D-"
                        }
                        else {
                            grade = "E"
                        }
                            

                        alert("Your percent is: " + percent + "%" + "\n" + " Your grade in the class is a: " + grade);
                        //alert("Your percent is: " + percent + \n + "Your grade in the class is:" + grade);
                    }
                }       
            }
        }
    }
}