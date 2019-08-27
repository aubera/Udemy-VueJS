new Vue({
  el: '#exercise',
  data: {
    isEffectOn: false,
    borderClass: 'border',
    fontClass: 'font',
    classFromInput: '',
    isSquare: false,
    inputClass: '',
    myStyle: {
      width: '100px',
      height: '100px',
      backgroundColor: 'gray'
    },
    barClass: 'bar',
    progress: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      const vm = this;
      setInterval(function(){
        vm.isEffectOn = !vm.isEffectOn;
      }, 300)
    },
    setClass: function(event){
      this.classFromInput = event.target.value;
    },
    startProgress: function() {
      const vm = this;
      let percent = 0;
      let timer = setInterval(() => {
        vm.progress.width = `${percent}px`;
        percent++;
        if (percent >= 200) {
          clearInterval(timer);
        }
      }, 50)
    }
  }
});
