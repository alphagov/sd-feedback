const Survey = require('../models/survey');
const socketio = require('../socketio');

module.exports = {
  getSurveys: async (req, res) => {
    const dbSurveys = await Survey.find({}).populate('analystId');
    res.send(dbSurveys);
  },
  addSurvey: async (req, res) => {
    const newSurvey = req.body.survey;

    // const io = req.app.get('socketio');

    try {
      const newSurveyCreate = await Survey.create(newSurvey);

      socketio.sockets.emit('NewFeedback', newSurveyCreate);
      return res.status(200).send(newSurveyCreate);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
};
