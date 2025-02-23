<script lang="ts">
  import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Button } from '@sveltestrap/sveltestrap';
  import { page } from '$app/stores';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment'; 

  let isOpen = false;

  function toggleMenu(event: Event) {
    event.stopPropagation(); // ✅ Prevents closing immediately
    isOpen = !isOpen;
  }

  function closeMenu(event: Event) {
    const menu = document.getElementById("mobile-menu");
    const toggler = document.getElementById("menu-toggler");

    if (menu && !menu.contains(event.target as Node) && toggler !== event.target) {
      isOpen = false; // ✅ Close only when clicking outside
    }
  }

  // Ensure this runs only in the browser
  onMount(() => {
    if (browser) {
      document.addEventListener("click", closeMenu);
    }
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener("click", closeMenu);
    }
  });
</script>

<Navbar class="py-3 shadow-md sticky top-0 z-50 bg-gray-900">
  <div class="container mx-auto flex justify-between items-center px-4">

    <!-- Logo / Brand -->
    <NavbarBrand href="/" class="text-xl font-bold tracking-wide text-white">
      <span class="text-yellow-400">Tech</span>Conf 2025
    </NavbarBrand>

    <!-- Mobile Menu Toggle (Only for small screens) -->
    <NavbarToggler id="menu-toggler" on:click={toggleMenu} class="md:hidden text-white" />

    <!-- Navbar Content (For Desktop) -->
    <div class="hidden md:flex items-center space-x-6">
      <Nav class="flex gap-6">
        <NavItem>
          <a href="/speakers" 
             class="nav-link transition-colors duration-300 hover:text-yellow-400"
             class:active={$page.url.pathname === "/speakers"}>
             Speakers
          </a>
        </NavItem>
        <NavItem>
          <NavLink href="/schedule" class="hover:text-gradient transition duration-300">Schedule</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/sponsors" class="hover:text-gradient transition duration-300">Sponsors</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" class="hover:text-gradient transition duration-300">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" class="hover:text-gradient transition duration-300">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>

    <!-- Mobile Dropdown Menu (Fix applied here) -->
    {#if isOpen}
      <div id="mobile-menu" class="md:hidden w-full bg-gray-800 p-4 absolute top-full left-0 shadow-lg rounded-lg">
        <Nav class="flex flex-col gap-4 text-center text-white">
          <NavItem><NavLink href="/speakers" class="hover:text-yellow-400">Speakers</NavLink></NavItem>
          <NavItem><NavLink href="/schedule" class="hover:text-yellow-400">Schedule</NavLink></NavItem>
          <NavItem><NavLink href="/sponsors" class="hover:text-yellow-400">Sponsors</NavLink></NavItem>
          <NavItem><NavLink href="/about" class="hover:text-yellow-400">About</NavLink></NavItem>
          <NavItem><NavLink href="/contact" class="hover:text-yellow-400">Contact</NavLink></NavItem>
          <Button href="/register" class="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">Register Now</Button>
        </Nav>
      </div>
    {/if}

  </div>
</Navbar>

<style>
  .hover\:text-gradient:hover {
    background: linear-gradient(90deg, #facc15, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
