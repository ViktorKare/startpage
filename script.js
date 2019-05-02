Vue.component('link-item', {
    props: ['link'],
    template: '<div class="link-box-wrapper"><a :href="link.target"><div class="link-box"><div class="box-image-wrapper"><img :src="link.img"></div><h3 class="name">{{ link.name }}</h3></div></a></div>'
})

var app = new Vue({
    el: '#app',
    data: {
      shortcuts: [
        { id: 0, name: 'Netflix', img: 'https://stickeroid.com/uploads/pic/0/thumb/stickeroid_5bf5461d4e179.png', target: 'https://www.netflix.com/' },
        { id: 1, name: 'Youtube', img: 'https://cdn.freebiesupply.com/logos/large/2x/youtube-icon-logo-png-transparent.png', target: 'https://www.youtube.com/' },
        { id: 2, name: 'Reddit', img: 'https://i.imgur.com/sdO8tAw.png', target: 'https://www.reddit.com/' }
      ]
    }
})

function ToggleAddModal(){
  var modal = document.getElementById("add-link-modal");
  modal.classList.toggle("show-flex");

}