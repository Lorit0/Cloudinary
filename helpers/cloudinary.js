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
      folder: 'test/products',
      // public_id: 'gato',
      // transformation: [{ effect: 'background_removal' }],
    })

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
const uploadImage2 = async (route) => {
  try {
    const result = await cloudinary.uploader.upload(route, {
      resource_type: 'image',
      folder: 'test/products',
      // public_id: 'gato',
      // transformation: [{ effect: 'background_removal' }],
      categorization: 'imagga_tagging',
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

const getAllImagesByTags = async (tag) => {
  try {
    const result = await cloudinary.api.resources_by_tag(tag)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const getImageByPublicId = async (prefix) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix,
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const renameImageByPublicId = async (route, id) => {
  try {
    const result = await cloudinary.uploader.rename(route, id, {
      overwrite: true,
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const deleteImageById2 = async (id) => {
  try {
    const result = await cloudinary.api.delete_resources(...id)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const addTagsInImages = async (tag, routes) => {
  try {
    const result = await cloudinary.uploader.add_tag(tag, routes)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
const removeAllTags = async (ids) => {
  try {
    const result = await cloudinary.uploader.remove_all_tags(ids)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const removeTag = async (tag, ids) => {
  try {
    const result = await cloudinary.uploader.remove_tag(tag, ids)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const transformImage = async (id) => {
  try {
    const result = await cloudinary.url(id, {
      transformation: { width: 300, height: 300, quality: 'auto' },
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
const transformImageQuality = async (id) => {
  try {
    const result = await cloudinary.url(id, {
      transformation: { quality: 'auto' },
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
// destroyImage('gato')
// uploadImage('./assets/loro.jpg')
// uploadImage('./assets/carpi.jpg')
// uploadImage('./assets/hipo.webp')
// uploadImage('./assets/sapo.jpg')

// getUrl('./test/products/gato')

// getImage('./test/products/loro')
// getAllImage()
// getImageByPublicId('test/products/loro')

// renameImageByPublicId(
//   'test/products/kvdheehtbdmkg8ibrbkq',
//   'test/products/loro'
// )

// deleteImageById2(['ahgqbtkpnd'])
// addTagsInImages('tiernos', [
//   'test/products/loro',
//   'test/products/qjweiepygsgwyi7g1li1',
//   'test/products/molskmjcajnwgbuxzbs9',
//   'test/products/gato',
// ])

// getAllImagesByTags('gorditos')
// removeAllTags([
//   'test/products/loro',
//   'test/products/qjweiepygsgwyi7g1li1',
//   'test/products/molskmjcajnwgbuxzbs9',
//   'test/products/gato',
// ])

// removeTag('gorditos', [
//   'test/products/loro',
//   'test/products/qjweiepygsgwyi7g1li1',
//   'test/products/gato',
// ])
// uploadImage2('./assets/delfin.jpg')

// transformImage('./test/products/loro')
transformImageQuality('./test/products/loro')
