<script lang="ts">
  import {Icon} from '@sveltestrap/sveltestrap'
    const highlights = [
      { title: "World-Class Speakers", description: "Join top industry leaders sharing insights on AI, Web3, and emerging technologies.",icon:"globe" },
      { title: "Networking Opportunities", description: "Connect with like-minded professionals, startups, and investors.",icon:"rocket-takeoff" },
      { title: "Hands-on Workshops", description: "Get practical experience through coding sessions and live demos.",icon:"pc-display-horizontal" },
      { title: "Innovation Showcase", description: "Explore cutting-edge solutions and groundbreaking research.",icon:"book" }
    ];
  </script>
  
  <!-- Hero Section -->
  <section class="relative w-full flex flex-col items-center justify-center text-white text-center py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-500 animate-gradientMove"></div>
    <div class="relative z-10 px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-gray-100">
        About <span class="text-yellow-300">Tech Conference 2025</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mt-4">
        A premier event bringing together innovators, developers, and leaders from around the world.
      </p>
    </div>
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
      </svg>
    </div>
  </section>
  
  <!-- About Content Section -->
  <section class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Conference Image -->
      <div class="flex justify-center">
        <img src="/logo.png" alt="Tech Conference" class="w-full max-w-lg rounded-lg shadow-lg">
      </div>
  
      <!-- Text Content -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800">What is Tech Conference 2025?</h2>
        <p class="text-lg text-gray-600 mt-4 leading-relaxed">
          Tech Conference 2025 is a global event where technology enthusiasts, industry pioneers, and startups come together to share ideas, explore new trends, and drive innovation forward. 
        </p>
        <p class="text-lg text-gray-600 mt-4">
          Whether you're a developer, entrepreneur, or investor, this event is designed to inspire, educate, and connect the brightest minds in technology.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Key Highlights Section -->
  <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Why Attend?</h2>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each highlights as highlight}
          <div class="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
            <h3 class="text-xl font-semibold text-indigo-600">{highlight.title}</h3>
            <spn><Icon name={highlight.icon} class="w-10 h-10 text-gray-600 hover:text-indigo-600 transition" /></spn>
            <p class="text-gray-600 mt-2">{highlight.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
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
  