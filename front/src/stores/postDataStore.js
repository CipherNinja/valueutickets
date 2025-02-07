import { defineStore } from "pinia";

export const usePostDataStore = defineStore("postDataStore", {
  state: () => ({
    postdata: null, // This will store the postdata value
  }),
  actions: {
    setPostData(data) {
      this.postdata = data;
    }
  }
});
