const router = require('express').Router()
const { check } = require('express-validator')
const { createUrl, getUrl } = require('../controllers/url.js')

router.get(
  '/:slug',
  [check('slug').not().isEmpty().withMessage('El slug no debe estar vacio')],
  getUrl
)
router.post(
  '/',
  [
    check('url')
      .not()
      .isEmpty()
      .withMessage('La url no debe estar vacia')
      .isURL()
      .trim()
      .withMessage('El campo debe ser una url'),
  ],
  createUrl
)

module.exports = router
