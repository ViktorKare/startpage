Vue.component('link-item', {
    props: ['link'],
    template: '<div class="link-box-wrapper"><a :href="link.target"><div class="link-box"><div class="box-image-wrapper"><img :src="link.img"></div><h3 class="name">{{ link.name }}</h3></div></a></div>'
})

var app = new Vue({
    el: '#app',
    data: {
      shortcuts:[],
      newLinkName:null,
      newLinkUrl:null
      
    },
    mounted() {
      if (localStorage.getItem('shortcuts')) {
        try {
          this.shortcuts = JSON.parse(localStorage.getItem('shortcuts'));
        } catch(e) {
          localStorage.removeItem('shortcuts');
        }
      }
    },
    methods: {
      addNewLink(){
        
          this.shortcuts.push({
            name: this.newLinkName,
            target: this.newLinkUrl,
            img: 'https://www.google.com/s2/favicons?domain=' + this.newLinkUrl
          }),
          this.newLinkName = '';
          this.newLinkUrl = '';
          
          this.saveToLocal();
          ToggleAddModal();
          
        
   
        
      },
      saveToLocal(){
        localStorage.setItem('shortcuts', JSON.stringify(this.shortcuts));
      }
    }
    
})

function ToggleAddModal(){
  var modal = document.getElementById("add-link-modal");
  modal.classList.toggle("show-flex");

}