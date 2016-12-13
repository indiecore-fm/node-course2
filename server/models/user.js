var mongoose = require('mongoose');

var User = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  email: {
    type:String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User}
