const imagesPath = [
  {
    path: '/test.jpg',
    alt: 'test',
    text: 'This is a test image'
  },
  {
    path: '/another.jpg',
    alt: 'another',
    text: 'This is another image'
  }
]

const resetImage = {
  path: '/questionmark.jpg',
  alt: 'questionmark',
  text: 'Click the button to get a random image'
}

export function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imagesPath.length)
  return imagesPath[randomIndex]
}

export function resetRandomImage() {
  return resetImage
}
