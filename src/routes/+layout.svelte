<script>
  import Navbar from '$lib/Navbar.svelte';
  import "../app.css"; // Ensure global styles are loaded
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  
  <!-- Page content fills the available space -->
  <main class="flex-grow">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300 text-center py-4">
    <p>© 2025 TechConf. All rights reserved.</p>
  </footer>
</div>
