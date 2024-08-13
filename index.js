<script>
document.addEventListener('DOMContentLoaded', function() {
let elements = document.querySelectorAll( '.btn-stickys' );
let popupposts = [ '21118' ]; /* enter your popups IDs here , in the order you want them to show up */
elements.forEach(function(e,i){
e.addEventListener( 'mouseenter', function(){
elementorProFrontend.modules.popup.showPopup( { id: popupposts[i] } );
} );
e.addEventListener( 'mouseleave', function(event){
jQuery('body').click();
});
});
});
</script>
