export const getTimeAgo = (date) => {
  const Seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

  if (Seconds < 60) return "Just Now";

  const minutes = Math.floor(Seconds / 60);

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 30) {
    return `${days} days ago`;
  }

  return new Date(date).toLocaleDateString();
};
