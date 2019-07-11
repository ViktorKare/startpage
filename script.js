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
      removeLink(x){
        this.shortcuts.splice(x,1);
        this.saveToLocal();
      },
      saveToLocal(){
        localStorage.setItem('shortcuts', JSON.stringify(this.shortcuts));
      }
    }
    
})

function ToggleAddModal(){
  document.getElementById("add-link-modal").classList.toggle("show-flex");
}
function addModalContent(){
    document.getElementById("modal-content-btn-1").classList.add("active");
    document.getElementById("modal-content-1").classList.add("show");
    document.getElementById("modal-content-btn-2").classList.remove("active");
    document.getElementById("modal-content-2").classList.remove("show");
}
function listModalContent(){
    document.getElementById("modal-content-btn-1").classList.remove("active");
    document.getElementById("modal-content-1").classList.remove("show");
    document.getElementById("modal-content-btn-2").classList.add("active");
    document.getElementById("modal-content-2").classList.add("show");
}
