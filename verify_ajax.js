//Submit button clicked
document.getElementById("submitButton").addEventListener("click", function() {
    // Get the username input value
    const username = document.getElementById("username").value;
  
    // Check if the username is empty
    if (username.trim() === "") {
      document.getElementById("result").textContent = "Key in username and click submit"; // Error message when no input
      document.getElementById("result").style.color = "green"; // Change the color to green
      return;
    }
  
    // Send an AJAX request to info.php
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "info.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = xhr.responseText;
        if (response === "Verified") {
          // Display verified message in green
          document.getElementById("result").textContent = "Verified!";
          document.getElementById("result").style.color = "green";
        } else {
          // Display error message in red
          document.getElementById("result").textContent = "Error";
          document.getElementById("result").style.color = "red";
        }
      } else {
        // Display "Error" message in red
        document.getElementById("result").textContent = "Error";
        document.getElementById("result").style.color = "red";
      }
    };
    xhr.send("username=" + encodeURIComponent(username));
  });
  