const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generatejoke)

generatejoke()

//USING ASYNC/AWAIT
async function generatejoke() {
    const config = {
      headers: {
          Accept: "application/json",
      },
  }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

//USING .then()
// function generatejoke() {
//     const config = {
//       headers: {
//           Accept: "application/json",
//       },
//   }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {jokeEl.innerHTML = data.joke})
// }


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );



// <p>Click the radio button to toggle between password visibility:</p>

// Password: <input type="password" value="FakePSW" id="myInput"><br><br>
// <input type="checkbox" onclick="myFunction()">Show Password

// <script>
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
// </script>