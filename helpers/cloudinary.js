const { apiKey, apiSecret, cloudName } = require('../config')

const cloudinary = require('cloudinary').v2

cloudinary.config({
  api_key: apiKey,
  api_secret: apiSecret,
  cloud_name: cloudName,
})

// cloudinary.uploader
//   .upload('./assets/gato.png', { resource_type: 'image' })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

const uploadImage = async (route) => {
  try {
    const result = await cloudinary.uploader.upload(route, {
      resource_type: 'image',
      // folder: 'test/products',
      // public_id: 'gato',
      // transformation: [{ effect: 'background_removal' }],
    })

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// const searchImage = async (name) => {
//   try {
//     const result = await cloudinary.search.name.includes(name)
//     console.log(result)
//   } catch (error) {
//     console.log(error)
//   }
// }
// searchImage('gato')

const destroyImage = async (id) => {
  try {
    const result = await cloudinary.uploader.destroy(id)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const updateImage = async (id) => {
  const { result } = destroyImage()
  if (result === 'ok') {
  }
}

const getUrl = async (route) => {
  try {
    const result = await cloudinary.url(route)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const getImage = async (route) => {
  try {
    const result = await cloudinary.image(route)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const getAllImage = async () => {
  try {
    const result = await cloudinary.api.resources()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// destroyImage('gato')
// uploadImage('./assets/loro.jpg')
// uploadImage('./assets/carpi.jpg')
// uploadImage('./assets/hipo.webp')

// getUrl('./test/products/gato')

// getImage('./test/products/gato')
getAllImage()
