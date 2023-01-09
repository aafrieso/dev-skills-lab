import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/', skillsCtrl.index)

export {
  router
}

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
