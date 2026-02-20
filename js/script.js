function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Simple check (In real life, this happens on a server!)
    if (user === "admin" && pass === "1234") {
        
      // THIS IS THE REDIRECT CODE
      window.location.href = "personal.html"; 
      
    } else {
      document.getElementById('error-message').style.display = "block";
    }
  }
  //Personal Info
  // 1. Initialize the array (the stack)
    let peopleStack = [];
    const MAX_PEOPLE = 5;

    const form = document.getElementById('personForm');
    const tableBody = document.querySelector('#dataTable tbody');
    const submitBtn = document.getElementById('submitBtn');
    const countDisplay = document.getElementById('count');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (peopleStack.length < MAX_PEOPLE) {
            // 2. Create an object for the person
            const person = {
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                birthday: document.getElementById('birthday').value,
                birthplace: document.getElementById('birthplace').value
            };

            // 3. Push the object to the array (The "Stack" logic)
            peopleStack.push(person);

            // 4. Update the UI Table
            renderTable();

            // 5. Reset form and check limits
            form.reset();
            updateUI();
        }
    });

    function renderTable() {
        // Clear table first to prevent duplicates
        tableBody.innerHTML = "";

        // Loop through the array and create rows
        peopleStack.forEach(person => {
            const row = `<tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.birthday}</td>
                <td>${person.birthplace}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    function updateUI() {
        countDisplay.innerText = peopleStack.length;
        if (peopleStack.length >= MAX_PEOPLE) {
            submitBtn.disabled = true;
            submitBtn.innerText = "Stack Full";
        }
    }