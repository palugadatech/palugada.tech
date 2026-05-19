import ReactPixel from 'react-facebook-pixel';

export const trackWhatsAppClick = (location = 'unknown') => {
  if (typeof window !== 'undefined') {
    ReactPixel.track('Contact', {
      content_name: 'WhatsApp Redirect',
      content_category: 'Lead Generation',
      location: location
    });
    
    // Also track as custom event for more specific data
    ReactPixel.trackCustom('WhatsAppClick', {
      location: location
    });
  }
};
