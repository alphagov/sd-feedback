const Analyst = require('../models/analyst');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const keys = require('../config/keys');

let gfs;
const connDb = mongoose.createConnection(keys.mongoURI);
//
connDb.once('open', () => {
  console.log('Database connection for stream successful');
  gfs = Grid(connDb.db, mongoose.mongo);
  gfs.collection('profiles');
});

module.exports = {
  getAnalysts: async (req, res) => {
    try {
      const analDBs = await Analyst.find({}).populate('analystImage');
      res.send(analDBs);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  getAnalystImage: async (req, res) => {
    try {
      const readstream = await gfs.createReadStream({
        _id: req.params.id
      });
      readstream.pipe(res);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  addAnalyst: async (req, res) => {
    // console.log(req.body.analystName, req.file);
    const analystP = {
      firstName: req.body.analystName,
      analystImage: req.file.id
    };

    try {
      const newAnalyst = await Analyst.create(analystP);
      res.send(newAnalyst);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
};
