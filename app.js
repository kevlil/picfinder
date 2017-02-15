var app2 = new Vue({
  el: '#picfinder',
  data: {
    title: 'Picture Finder App',
    description: 'Enter the info to update your image path.',
    basepath: './images/',
    imagename: 'picture-',
    which: 1,
    filetype: '.jpg',
    src: './images/picture-1.jpg',
    start: 1,
    end: 'n/a',
    computed: {
      src: function () {
        return this.basepath + this.imagename  + this.which + this.filetype;
      }
    }

  }
})
