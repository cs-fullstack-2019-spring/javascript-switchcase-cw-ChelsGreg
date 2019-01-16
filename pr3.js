


//Put the start of your program in a main function.
// Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose.
// Repeat this five times.






function main() {


        var attendanceClass = [expr];

        attendanceClass.push(expr);

        while (expr !== "q") {
            var expr = prompt("Who is checking in: Teacher,Student, or Parent?");



            switch (expr) {
                case "Teacher":
                    console.log("Teacher");
                    break;
                case "Student":
                    console.log("Student");
                    break;
                case "Parent":
                    console.log("Parent");
                    break;
                default:
                    console.log("N/A");
                    break;
            }
        }


        console.log(attendanceClass);

}

main();
