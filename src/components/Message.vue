<template>
  <div
    v-if="!isCurrentClientMessage()"
    class="col-start-1 col-end-8 p-3 rounded-lg"
  >
    <div class="flex flex-row items-center">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
      >
        {{ message.sender.name }}
      </div>
      <div class="relative ml-3 text-sm py-2 px-4 shadow rounded-xl bg-gray250">
        <div>{{ message.body }}</div>
      </div>
    </div>
  </div>
  <div
    v-if="isCurrentClientMessage()"
    class="col-start-6 col-end-13 p-3 rounded-lg"
  >
    <div class="flex items-center justify-start flex-row-reverse">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
      >
        {{ message.sender.name }}
      </div>
      <div class="relative mr-3 text-sm py-2 px-4 shadow rounded-xl bg-gray200">
        <div>{{ message.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    message: {
      id: String,
      sender: {
        id: String,
        name: String,
      },
      body: String,
      sent_at: String,
    },
  },
})
export default class Message extends Vue {
  isCurrentClientMessage() {
    return this.message.sender.id === "7634";
  }
}
</script>
<style scoped></style>
