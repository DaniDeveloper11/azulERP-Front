export function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    };
  
    return date.toLocaleString('es-ES', options);
  }