new Vue({
  el: '#exercise',
  data: {
    name: 'Andor',
    age: 30,
    imageLink: 'https://frontendmasters.com/assets/Vue.jpg'
  },
  methods: {
    getAgeMultiplied: function() {
      return this.age * 3;
    },
    getRandomNumber: function() {
      return Math.random();
    }
  }
})