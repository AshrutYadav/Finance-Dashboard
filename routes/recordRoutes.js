const express = require('express');
const router = express.Router();
const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordController');

const { authorize } = require('../middleware/auth');

router.post('/', authorize('admin'), createRecord);
router.get('/', authorize('admin', 'analyst', 'viewer'), getRecords);
router.put('/:id', authorize('admin'), updateRecord);
router.delete('/:id', authorize('admin'), deleteRecord);

module.exports = router;