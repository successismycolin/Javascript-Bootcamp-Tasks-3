const studentDatabase = [
    {
        id: 1, 
        firstName: "collin",
        lastName: "buthelezi",
        email: "collin@buthelezi.com",
        course: "computer science", 
        age: 30,
    },
    
    {
        id: 2, 
        firstName: "leo",
        lastName: "messi",
        email: "leo@messi.com",
        course: "sports", 
        age: 25,
    },

    {
        id: 3, 
        firstName: "pep",
        lastName: "guardiola",
        email: "pep@guardiola.com",
        course: "history", 
        age: 35,
    },

    {
        id: 4, 
        firstName: "luis",
        lastName: "suarez",
        email: "luis@suarez.com",
        course: "theology", 
        age: 23,
    },

    {
        id: 5, 
        firstName: "joao",
        lastName: "cancelo",
        email: "joao@cancelo.com",
        course: "science", 
        age: 22,
    },
];

function synchronousExecution() {
    console.log("Step 1 - The function is starting");
    console.log("Step 2 - The process is in action");
    console.log("Step 3 - The function reached the final stage")
}

async function getAllStudents(database) {
    console.log("Fetching student records...");

    // Delay for 3000 milliseconds (3 seconds)
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Display results
    console.log("--- Student Database ---");
    database.forEach(student => {
    console.log(`ID :${student.id}, 
                First Name: ${student.firstName},
                Last Name: ${student.lastName},
                Email: ${student.email},
                Course: ${student.course}, 
                Age: ${student.age}`
    );
  });
}

getAllStudents(studentDatabase);