import { createStore } from "vuex";

export interface Message {
  id: string;
  sender: Client;
  body: string;
  send_at: string;
}

export interface Client {
  id: string;
  name: string;
}

export default createStore({
  state: {
    messages: [
      {
        id: "4801928312",
        sender: {
          id: "12874",
          name: "Ron",
        },
        body: "Hi Ann",
        sent_at: "30 Oct 07:26",
      },
      {
        id: "09841029830912",
        sender: {
          id: "7634",
          name: "Ann",
        },
        body: "Hi Ronn",
        sent_at: "30 Oct 07:27",
      },
    ],
  },
  getters: {
    messages: (state) => {
      return `${state.messages}`;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
