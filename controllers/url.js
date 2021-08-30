const { generate } = require('shortid')
const { validationResult } = require('express-validator')
const Url = require('../models/Urls.js')

exports.createUrl = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const { url } = req.body
    const slug = generate()
    await Url.create({ slug, url })
    res.status(200).json({ slug })
  } catch (e) {
    res.status(500).json({ error: 'No se pudo crear la url' })
  }
}

exports.getUrl = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const { slug } = req.params
    const url = await Url.findOne({
      where: {
        slug,
      },
    })
    if (!url) return res.status(404).json({ error: 'No se encontro la url' })
    return res.status(200).json({ url: url.url })
  } catch (e) {
    res.status(500).json({ error: 'Error al buscar url' })
  }
}
