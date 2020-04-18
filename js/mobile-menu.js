var navPos = jQuery( '#tab-bar-container' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#tab-bar-container' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#tab-bar-container' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#tab-bar-container' ).removeClass( 'm_fixed' );
  }
});