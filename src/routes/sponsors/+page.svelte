<script lang="ts">
    const sponsors = [
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
        link: "https://www.google.com"
      },
      {
        name: "Microsoft",
        logo: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
        link: "https://www.microsoft.com"
      },
      {
        name: "Amazon Web Services",
        logo:"https://sourcebae.com/blog/wp-content/uploads/2023/08/1_b_al7C5p26tbZG4sy-CWqw.png",
        link:"https://aws.amazon.com"
      },
      {
        name: "IBM",
        logo: "https://dxc.scene7.com/is/image/dxc/ibm_1050x1050?qlt=90&wid=1200&ts=1663565019618&$square_desktop$&dpr=off",
        link: "https://www.ibm.com"
      },
      {
        name: "OpenAI",
        logo: "data:image/png;base64,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",
        link: "https://openai.com"
      },
      {
        name: "Tesla",
        logo: "data:image/png;base64,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",
        link: "https://www.tesla.com"
      }
    ];
  </script>
  
  <!-- Hero Section -->
  <section class="relative w-full flex flex-col items-center justify-center text-white text-center py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 animate-gradientMove"></div>
    <div class="relative z-10 px-6">
      <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-gray-100">
        Our <span class="text-yellow-300">Sponsors</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mt-4">
        We proudly collaborate with leading tech companies.
      </p>
    </div>
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFFFFF" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
      </svg>
    </div>
  </section>
  
  <!-- Sponsors Section -->
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Partners</h2>
    
    <!-- Sponsors Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {#each sponsors as sponsor}
        <a href={sponsor.link} target="_blank" class="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center transition-transform hover:scale-105">
          <img src={sponsor.logo} alt={sponsor.name} class="w-32 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </a>
      {/each}
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
  