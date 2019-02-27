import express from 'express';
import MeetupController from '../controllers/MeetupController';

const Router = express.Router();

Router.post(
  '/meetup',
  MeetupController.createMeetUp,
);

export default Router;
