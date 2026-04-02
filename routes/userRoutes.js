const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  updateUser,
  toggleUserStatus
} = require('../controllers/userController');

router.post('/', createUser);

router.get('/', getUsers);

router.patch('/:id', updateUser);

router.patch('/:id/status', toggleUserStatus);




module.exports = router;