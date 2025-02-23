  <svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">
  </svelte:head>
  <script>
    import {Row,Col,Card,CardBody,CardTitle,CardText,} from '@sveltestrap/sveltestrap';
    import "../app.css";
    const keynotes = [
      {
        name: 'John Doe',
        title: 'CEO, Tech Innovations',
        image: 'https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        topic: 'The Future of AI in Enterprise'
      },
      {
        name: 'Jane Smith',
        title: 'CTO, Future Labs',
        image:'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        topic: 'BlockChain Specialisation'
      },
      {
        name:'Michael Jhonson',
        title:'Lead Engineer',
        image:'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        topic:'Gen-Ai'
      },
      {
        name:'Emily Davis',
        title:'Cybersecurity Expert',
        image: 'https://images.unsplash.com/photo-1613186941372-f19da23e373b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        topic:'CyberSecurity'
      }
    ];
    import { onMount } from "svelte";

let days = 0, hours = 0, minutes = 0, seconds = 0;

// Set the event date (YYYY, MM (0-based), DD, HH, MM, SS)
const eventDate = new Date(2025, 2, 28, 9, 0, 0).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft > 0) {
    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  } else {
    days = hours = minutes = seconds = 0;
  }
}

onMount(() => {
  updateCountdown(); // Initial call
  const interval = setInterval(updateCountdown, 1000);
  return () => clearInterval(interval); // Cleanup on destroy
});
  </script>
  
<!-- Hero Section -->
<section class="relative w-full flex flex-col items-center justify-center text-white text-center py-20 overflow-hidden">
  <!-- Background Gradient Animation -->
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600 animate-gradientMove"></div>

  <!-- Main Content -->
  <div class="relative z-10 px-6">
    <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-gray-100">
      Welcome to <span class="text-yellow-300">Tech Conference</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-200 mt-4">
      The biggest conference for tech enthusiasts, developers, and innovators.
    </p>
      
        <!-- Countdown Timer -->
        <div class="mt-6 text-2xl font-semibold bg-white/20 p-4 rounded-lg inline-block shadow-md">
          <span class="mr-4">{days}d</span>
          <span class="mr-4">{hours}h</span>
          <span class="mr-4">{minutes}m</span>
          <span>{seconds}s</span>
      </div>
    <button color="light" size="lg" href="/register"
      class="mt-6  bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded shadow-lg transition duration-300 ring-2 ring-yellow-500 hover:ring-yellow-400">
      Register Now
    </button>
  </div>
  
  <!-- SVG Wave Effect -->
  <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path class="fill-white" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
    </svg>
  </div>


    <!-- Custom Animation for Gradient -->
    <style>
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradientMove {
        background-size: 300% 300%;
        animation: gradientMove 10s ease infinite;
      }
    </style>
  </section>

<!-- Feature Section -->
<section class="speaker mb-5 overflow-hidden">
  <h2 class="text-center mb-4 text-3xl font-bold text-gray-900">Keynote Speakers</h2>
  <Row>
    {#each keynotes as speaker}
      <Col class="mb-3">
        <Card class="card shadow-lg bg-white border-gray-300 transition duration-300">
          <img src={speaker.image} class="card-img-top rounded-t-lg" alt={speaker.name} />
          <CardBody class="p-4">
            <CardTitle tag="h5" class="text-xl font-semibold text-gray-900">
              {speaker.name}
            </CardTitle>
            <CardText>
              <div class="text-gray-800">{speaker.title}</div>
              <div class="text-sm text-gray-700">{speaker.topic}</div>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    {/each}
  </Row>
</section>




