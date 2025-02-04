<template>
  <div>
    <nav>
      <div class="menu-icon" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <router-link to="/">
        <div class="logo">
          <img :src="logo" alt="Logo" />
        </div>
      </router-link>
      <ul :class="['nav-links', { active: isMenuActive }]">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/pay">My Booking</router-link></li>
        <li><router-link to="/blogs">Blogs</router-link></li>
        <li><router-link to="/packages">Packages</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/admin"><button class="login-btn">Login or Signup</button></router-link></li>
      </ul>
      <div class="dropdown" @click.stop="toggleDropdown">
          <div class="dropdown-toggle">
            <img :src="selectedFlag" alt="Flag" />
            <span class="dropdown-icon ml-1" :class="{ rotate: isRotated }">&#9662;</span>
          </div>
          <ul :class="['dropdown-menu', { show: isDropdownActive }]">
            <li
              v-for="(flag, index) in flags"
              :key="index"
              @click="changeFlag(flag.url)"
            >
              <img :src="flag.url" :alt="flag.name" />
              <span>{{ flag.lang }}</span>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import logoPath from "@/assets/logo-nobg.png";

export default {
  data() {
    return {
      logo: logoPath, 
      isMenuActive: false,
      isDropdownActive: false,
      isRotated: false, 
      selectedFlag: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg", 
      flags: [
        { name: "U.S.A.", lang: "English", url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg" },
        { name: "Canada", lang: "English", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
        { name: "Mexico", lang: "Española", url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
      this.isRotated = !this.isRotated;
    },
    changeFlag(flagUrl) {
      this.selectedFlag = flagUrl;
      this.isDropdownActive = false; // Close the dropdown after selecting a flag
      this.isRotated = false; // Reset the rotation
    },
    closeDropdownOnClickOutside(event) {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".menu-icon")
      ) {
        this.isDropdownActive = false;
        this.isRotated = false; // Reset the rotation
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
};
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css);

nav {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 10px 10px;
  background-color: #F9F2F2;
  position: relative;
  height: 82px;
}

.logo img {
  width: 100px;
  position: absolute;
  left: 18px;
  top: 2px;
  z-index: 900;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 5px;
  z-index: 2;
}

.nav-links li {
  margin: 0 5px;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
}

.nav-links a.active {
  background-color: #0056b3;
  color: white;
  text-decoration: underline;
}

.nav-links a:hover {
  text-decoration: underline;
  font-weight: 800;
  padding: 2px 1px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.login-btn {
  padding: 8px 18px;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  background-color: #007bff;
}

.login-btn:hover {
  background-color: #0056b3;
  color: white;
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown {
  position: relative;
  margin-right: 15px;
  margin-left: 10px;
}

.dropdown img {
  width: 50px;
  height: 25px;
  margin-right: 3px;
  margin-left: 3px;
  border: #0056b3;
}

.dropdown img:hover {
  transition: transform 0.3s ease-in-out;
  transform: scale(1.2);
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-icon {
  font-size: 20px;
  font-weight: bolder;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  display: none;
  position: absolute;
  width: 10px !important; 
  top: 38px;
  left: -70px;
  z-index: 900;
  background-color: #F9F2F2;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu li {
  padding-left: 10px;
  padding-top: 5px;
  cursor: pointer;
}

.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  margin-left: 15px;
  cursor: pointer;
}

.menu-icon div {
  width: 100%;
  height: 3px;
  background-color: black;
}

@media (max-width: 770px) {  
  .menu-icon {
    display: flex;
  }


  .nav-links {
    display: none;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    position: absolute;
    gap: 0px;
    top: 70px;
    left: 0;
    background-color: #F9F2F2;
    box-shadow: 0 4px 8px #F9F2F2;
    z-index: 100;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 3px;
  }

  .vertical-bar {
    display: none;
  }
}

@media (min-width: 768px) {
  .nav-links {
    margin-bottom: 0px;
  }

  .nav-links a {
    font-size: 18px;
  }

  .login-btn {
    font-size: 16px;
  }

  .dropdown-icon {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .nav-links a {
    font-size: 16px;
  }
  .login-btn {
    font-size: 14px;
  }
}
</style>
