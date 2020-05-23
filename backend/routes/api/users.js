//routes/api/users.js

const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route GET api/users/test
// @description test users route
// @access public
router.get('/test',(req,res) => res.send('users route testing!'));

//@route GET api/users
//@description Get all users
//@access Public
router.get('/',(req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});

// @route GET api/users/:username
// @description Get single user by username
// @access Public
router.get('/:username', (req, res) => {
    User.findById(req.params.id)
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
  });
  
// @route GET api/users
// @description add/save user
// @access Public
router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ msg: 'User added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

// @route GET api/users/:username
// @description Update book
// @access Public
router.put('/:username', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/users/:username
// @description Delete user by username
// @access Public
router.delete('/:username', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({ mgs: ' User deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such user' }));
});

module.exports = router;