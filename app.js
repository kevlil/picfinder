var app2 = new Vue({
  el: '#picfinder',
  data: {
    title: 'Picture Finder App',
    description: 'Enter the info to update your image path.',
    basepath: './images/',
    imagename: 'picture-',
    which: 1,
    filetype: '.jpg',
    start: 1,
    end: null,
  },
  computed: {
    src: function() {
      return this.basepath + this.imagename + this.which + this.filetype;
    }
  },
  methods: {
    next: function(event) {
      var which = this.which + 1;

      if(this.end != null && which > this.end) {
        this.which = (this.start !== null)? this.start : this.end;
      } else {
        this.which = which;
      }

    },
    previous: function(event) {
      var which = this.which - 1;

      if(this.start != null && which < this.start) {
          this.which = (this.end != null)? this.end : this.start;
      } else {
        this.which = which;
      }
    }
  }
})
