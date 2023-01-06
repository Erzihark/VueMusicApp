<template>
  <div>
    <app-header></app-header>
    
  
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <app-player></app-player>

    <app-auth></app-auth>
    
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppAuth from "./components/AppAuth.vue"
import { mapWritableState } from "pinia";
import useUSerStore from "@/stores/user"
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue"

export default{
  name:"App",
  computed:{
    ...mapWritableState(useUSerStore, ["userLoggedIn"]),
  },
  created(){
    if(auth.currentUser){
      this.userLoggedIn = true;
    }
  },
  components:{
    AppHeader,
    AppAuth,
    AppPlayer
  }
};
</script>

<style>

.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: all 0.3s linear;
}

.fade-leave-to{
  transition: all 0.3s linear;
  opacity: 0;
}

</style>
