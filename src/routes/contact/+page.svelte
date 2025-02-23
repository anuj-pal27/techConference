<script lang="ts">
    let name = "";
    let email = "";
    let message = "";
    let success = false;

  import { Icon } from '@sveltestrap/sveltestrap';

    function handleSubmit() { 
      if (name && email.includes("@") && message) {
        success = true;
        setTimeout(() => {
          name = "";
          email = "";
          message = "";
          success = false;
        }, 3000);
      }
    }
  
    const socialLinks = [
      { platform: "Twitter", url: "https://twitter.com/techconf", icon: "twitter-x" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/techconf", icon: "linkedin" },
      { platform: "Facebook", url: "https://facebook.com/techconf", icon: "facebook" },
      { platform: "Instagram", url: "https://instagram.com/techconf", icon: "instagram" }
    ];
  </script>
  
  <!-- Hero Section -->
  <section class="relative w-full flex flex-col items-center justify-center text-white text-center py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-gradientMove"></div>
    <div class="relative z-10 px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-gray-100">
        Welcome to <span class="text-yellow-300">tech Conf</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mt-4">
       Any question and remarks? just write us a message
      </p>
    </div>
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
      </svg>
    </div>
  </section>
  
  
  <!-- Contact Form Section -->
  <section class="container mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Contact Form -->
      <div class="bg-white shadow-xl rounded-lg p-8">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div>
            <label for="name" class="text-gray-700 font-medium">Name</label>
            <input type="text" id="name" bind:value={name} required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500">
          </div>
  
          <div>
            <label for="email" class="text-gray-700 font-medium">Email</label>
            <input type="email" id="email" bind:value={email} required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500">
          </div>
  
          <div>
            <label for="message" class="text-gray-700 font-medium">Message</label>
            <textarea id="message" bind:value={message} required class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
  
          <button type="submit" class="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Send Message
          </button>
  
          {#if success}
            <p class="text-green-600 font-medium mt-3">Message sent successfully!</p>
          {/if}
        </form>
      </div>
  
      <!-- Social Media Links -->
      <div class="flex flex-col items-center text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Follow Us</h2>
        <p class="text-gray-600 mb-6">Stay connected and get the latest updates.</p>
  
        <div class="flex space-x-6">
          {#each socialLinks as link}
            <a  href={link.url} target="_blank" class="text-gray-600 hover:text-indigo-600 transition text-3xl">
                <Icon name={link.icon} class="w-10 h-10 text-gray-600 hover:text-indigo-600 transition" />
            </a>
          {/each}
        </div>
      </div>                                                
    </div>
  </section>
  
  <style>
    .text-3xl i {
      transition: transform 0.3s;
    }
    .text-3xl:hover i {
      transform: scale(1.2);
    }
  </style>
  