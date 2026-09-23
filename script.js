           function sayHello() {
              alert("You clicked the button!");
           }

           function changeHeading() {
            document.querySelector("h1").textContent = "You changed me!";
           }
           document.getElementById("myButton").addEventListener("click", sayHello);
           

           function handleSubmit() {
            const userInput = document.getElementById("userInput").value;
            if (userInput === "") {
            document.getElementById("output").textContent = "Please enter your name.";
            } else {
            document.getElementById("output").textContent = "Hello, " + userInput + "!";
            }
           }
           document.getElementById("submitButton").addEventListener("click", handleSubmit);

           let count = 0;
           function countclicks() {
            count = count + 1;
            document.querySelector("h1").textContent = "Clicked " + count + " times!";
           }
            document.getElementById("myButton").addEventListener("click", countclicks);

            const travelPackages = ["Beach Getaway", "Mountain Retreat", "City Tour"];
            for (let i = 0; i < travelPackages.length; i++) {
                console.log(travelPackages[i]);
            }

            const package1 = {
                name: "Beach Getaway",
                price: 499.99,
                duration: "5"
            };

            const packages = [
               { name: "Beach Getaway", price: 499.99, duration: "5" },
               { name: "Mountain Retreat", price: 350, duration: "3" },
               { name: "City Tour", price: 275, duration: "2" }
            ];
            console.log(package1.name);

            const pkgButtons = document.querySelectorAll(".pkgBtn");
            const packageResult = document.getElementById("packageResult");

            for (let i = 0; i < pkgButtons.length; i++) {
                pkgButtons[i].addEventListener("click", function() {

                    const index = Number(this.dataset.index);

                    const selectedPackage = packages[index];

                    packageResult.textContent = `You selected ${selectedPackage.name} for $${selectedPackage.price} (${selectedPackage.duration} days).`;
                });
            }

            if (package1.price < 600 && package1.duration === "5") {
            document.getElementById("dealResult").textContent = "Great deal!";
            } else {
            document.getElementById("dealResult").textContent = "Check other options.";
            }

          // === AGE CHECKER ===
          const ageInput = document.getElementById("ageInput");
          const checkButton = document.getElementById("ageButton");
           const result = document.getElementById("ageResult");

        checkButton.addEventListener("click", function () {
            const age = Number(ageInput.value);

        if (age >= 18) {
             result.textContent = "You're eligible!";
            } else {
             result.textContent = "Sorry, you're too young.";
           }
        });

