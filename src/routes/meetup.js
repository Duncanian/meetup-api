import express from 'express';
import MeetupController from '../controllers/MeetupController';

const Router = express.Router();

Router.post(
  '/meetup',
  MeetupController.createMeetUp,
);

Router.get(
  '/meetup/:id',
  MeetupController.getOneMeetUp,
);

export default Router;
