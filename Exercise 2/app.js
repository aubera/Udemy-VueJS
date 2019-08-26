new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    showAlert: function() {
      alert('something');
    },
    storeValue: function(event) {
      this.value = event.target.value;
    }
  }
});
