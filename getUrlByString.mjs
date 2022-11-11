export default function(string, lang) {
  const q = string.trim().replace(' ', '+')
  return `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${q}&image_type=photo&lang=${lang}`
}
