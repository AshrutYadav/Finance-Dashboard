const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  updateUser,
  toggleUserStatus
} = require('../controllers/userController');

router.post('/', authorize('admin'), createUser);

router.get('/', getUsers);

router.patch('/:id', authorize('admin'), updateUser);

router.patch('/:id/status', authorize('admin'), toggleUserStatus);




module.exports = router;
