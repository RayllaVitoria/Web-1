
window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top > 300 ) {
       console.log('Maior que 300');
       document.getElementById("MeuMenu").classList.add('fixar');
   }
}
