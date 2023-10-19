const imagesPath = [
  {
    path: '/debs.jpg',
    alt: 'debs',
    text: 'Debs'
  },
  {
    path: '/murilo.jpg',
    alt: 'murilo',
    text: 'Murilo'
  },
  {
    path: '/paulo.jpg',
    alt: 'paulo',
    text: 'Paulo'
  },
  {
    path: '/pedro.jpg',
    alt: 'pedro',
    text: 'Pedro'
  },
  {
    path: '/petra.jpg',
    alt: 'petra',
    text: 'Petra'
  },
  {
    path: '/rafael.jpg',
    alt: 'rafael',
    text: 'Rafael'
  },
  {
    path: '/valeska.jpg',
    alt: 'valeska',
    text: 'Valeska'
  },
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
