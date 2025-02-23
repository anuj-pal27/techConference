<script lang="ts">
  const speakers = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO, Tech Innovations",
      bio: "An expert in AI and cloud computing with over 20 years of experience.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO, Future Labs",
      bio: "Specialist in Web3 and blockchain technology, working on decentralized apps.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Lead Engineer, OpenAI",
      bio: "Developing next-gen AI tools for enhancing human productivity.",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Emily Davis",
      title: "Cybersecurity Expert",
      bio: "Focusing on securing online platforms against emerging threats.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
</script>

<!-- Hero Section -->
<section class="relative w-full flex flex-col items-center justify-center text-white text-center py-20 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600 animate-gradientMove"></div>
  <div class="relative z-10 px-6">
    <h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-gray-100">
      Meet Our <span class="text-yellow-300">Keynote Speakers</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-200 mt-4">
      Learn from industry-leading experts shaping the future of technology.
    </p>
  </div>
  <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg class="relative block w-full h-[80px] sm:h-[100px] md:h-[120px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32V120H0V96Z"></path>
    </svg>
  </div>
</section>

<!-- Speaker Section -->
<section class="container mx-auto px-6 py-12">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {#each speakers as speaker}
      <div class="bg-white shadow-xl rounded-lg overflow-hidden p-6 transition-transform transform hover:scale-105">
        <div class="relative">
          <img src={speaker.image} alt={speaker.name} class="w-full h-56 object-cover rounded-lg shadow-md" />
          <div class="absolute bottom-2 right-2 bg-white px-3 py-1 text-sm font-semibold text-gray-800 rounded-lg shadow-md">
            {speaker.title}
          </div>
        </div>
        <div class="mt-4 text-center">
          <h2 class="text-xl font-bold text-gray-900">{speaker.name}</h2>
          <p class="text-gray-600 mt-2">{speaker.bio}</p>
        </div>
      </div>
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
