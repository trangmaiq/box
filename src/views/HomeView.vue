<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <Conversation msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Conversation from "@/components/Conversation.vue"; // @ is an alias to /src

@Options({
  components: {
    Conversation,
  },
})
export default class HomeView extends Vue {}
</script>
