import ReactPixel from 'react-facebook-pixel';

export const trackWhatsAppClick = (location = 'unknown') => {
  if (typeof window !== 'undefined' && window.fbq) {
    ReactPixel.track('Contact', {
      content_name: 'WhatsApp Redirect',
      content_category: 'Lead Generation',
      location: location
    });
    
    ReactPixel.trackCustom('WhatsAppClick', {
      location: location
    });
  } else {
    console.log("Meta Pixel tidak aktif atau diblokir browser. Event dilewati.");
  }
};