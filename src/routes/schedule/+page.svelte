<script lang="ts">
  import { writable } from 'svelte/store';

  const schedule = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      sessions: [
        {
          time: "09:00 AM - 10:00 AM",
          topic: "Opening Keynote: The Future of AI",
          speaker: "John Doe",
          role: "CEO, Tech Innovations",
          image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
        },
        {
          time: "10:30 AM - 12:00 PM",
          topic: "Web3 & Decentralized Apps",
          speaker: "Jane Smith",
          role: "CTO, Future Labs",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
        }
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      sessions: [
        {
          time: "09:00 AM - 10:30 AM",
          topic: "Advancements in Cybersecurity",
          speaker: "Emily Davis",
          role: "Cybersecurity Expert",
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop"
        },
        {
          time: "11:00 AM - 12:30 PM",
          topic: "AI-Powered Tools for Developers",
          speaker: "Michael Johnson",
          role: "Lead Engineer, OpenAI",
          image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop"
        }
      ]
    }
  ];

  let selectedDay = writable(schedule[0]);
</script>

<!-- Gradient Header -->
<div class="relative w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-20 text-center overflow-hidden">
  <h1 class="text-4xl font-extrabold">Meet Our <span class="text-yellow-400">Schedule</span></h1>
  <p class="mt-3 text-lg">Explore sessions with leading experts.</p>

  <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
    </svg>
  </div>
</div>

<!-- Tabs for Days -->
<div class="flex justify-center gap-4 my-6">
  {#each schedule as day}
    <button 
      class="px-5 py-2 rounded-lg text-white font-semibold transition duration-300
             bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 
             focus:outline-none focus:ring-2 focus:ring-blue-300"
      on:click={() => selectedDay.set(day)}>
      {day.day}
    </button>
  {/each}
</div>

<!-- Schedule Cards Section -->
<section class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#if $selectedDay}
    {#each $selectedDay.sessions as session}
      <div class="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center
                  transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src={session.image} alt={session.speaker} 
             class="w-24 h-24 object-cover rounded-full border-2 border-blue-500" />
        
        <div class="text-center mt-4">
          <p class="text-sm text-gray-500">{session.time}</p>
          <h3 class="text-lg font-semibold text-gray-900">{session.topic}</h3>
          <p class="text-blue-600 text-sm font-medium">{session.speaker}</p>
          <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mt-2">
            {session.role}
          </span>
        </div>
      </div>
    {/each}
  {/if}
</section>

<!-- Event Location Section -->
<section class="container mx-auto px-6 py-12">
  <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">📍 Event Location</h2>
  <p class="text-lg text-center text-gray-600 mb-8">
    Join us at our venue for an unforgettable experience.
  </p>

  <!-- Location Details -->
  <div class="flex flex-col md:flex-row items-center justify-center gap-8">
    <div class="text-center md:text-left">
      <h3 class="text-xl font-semibold text-gray-800">📍 Tech Conference Venue</h3>
      <p class="text-gray-600">123 Innovation Street, San Francisco, CA</p>
      <p class="text-gray-600">Date: March 15-16, 2025</p>
      <p class="text-gray-600">Time: 9:00 AM - 6:00 PM</p>
    </div>

    <!-- Embedded Google Map -->
    <div class="w-full md:w-[500px] h-[300px] shadow-lg rounded-lg overflow-hidden">
      <iframe
        class="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093685!2d-122.41941548468115!3d37.774929279759554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1b2d2f9d%3A0x41e1e1b14c0c5a41!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1616760976283!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
