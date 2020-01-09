// db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declaring collection schema property and names

let Order = new Schema(
  {
    // schema property: values
    username: { type: String },
    address: { type: String },
    mobile: { type: String },
    orderinfo: { type: Array },
    total: {type: Number },
    orderstatus: { type: String },
    orderdate: { type: String }
  },
  {
    collection: 'order'
  }
);

module.exports = mongoose.model('Order',Order);
