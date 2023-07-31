    function updateClock() {
      const now = new Date();
      const clockElement = document.getElementById('clock');
      clockElement.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const usernameInput = document.getElementById('usernameInput').value;
      const passwordInput = document.getElementById('passwordInput').value;

      localStorage.setItem('username', usernameInput);

      alert(`Welcome, ${usernameInput}! You are now logged in.`);
    });


    const todoList = document.getElementById('todoList');
    const todoInput = document.getElementById('todoInput');

    function addTodo() {
      const todoText = todoInput.value;
      if (todoText.trim() === '') return;

      const li = document.createElement('li');
      li.textContent = todoText;
      todoList.appendChild(li);

      todoInput.value = '';
    }

    function loadTodos() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.forEach(todoText => {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
      });
    }

    function saveTodos() {
      const todos = Array.from(todoList.children).map(li => li.textContent);
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    todoInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTodo();
        saveTodos();
      }
    });

    const bgImage = document.getElementById('bgImage');
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
    ];

    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    bgImage.src = getRandomImage();

    // Weather and Location
    const weatherContainer = document.getElementById('weatherContainer');
    const locationElement = document.getElementById('location');
    const weatherElement = document.getElementById('weather');

    function showWeatherAndLocation(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch weather data using the latitude and longitude
      // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
          const location = data.name;
          const weatherDescription = data.weather[0].description;
          const temperature = data.main.temp;

          locationElement.textContent = `Location: ${location}`;
          weatherElement.textContent = `Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });
    }

    function showError(error) {
      console.log('Error getting geolocation:', error.message);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeatherAndLocation, showError);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }

    // Load todos from local storage when the page loads
    loadTodos();
