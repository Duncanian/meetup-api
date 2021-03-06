import MeetUp from '../models/meetup';
import reqResponses from '../helpers/Responses';

export default class MeetupController {
  static async createMeetUp(req, res) {
    try {
      const { title, description, venue, time } = req.body;
      const createdMeetup = await MeetUp.create({
        title,
        description,
        venue,
        time,
      });
      const message = [201, 'Meetup created successfully', true];
      reqResponses.handleSuccess(res, message, createdMeetup);
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }

  static async getOneMeetUp(req, res) {
    try {
      const { id } = req.params;
      const oneMeetup = await MeetUp.findOne({
        _id: id
      });
      const message = [200, 'Meetup retrieved successfully', true];
      reqResponses.handleSuccess(res, message, oneMeetup);
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }

  static async getAllMeetUps(req, res) {
    try {
      const meetups = await MeetUp.find({});
      const message = [200, 'Meetups retrieved successfully', true];
      reqResponses.handleSuccess(res, message, meetups);
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }

  static async updateOneMeetUp(req, res) {
    try {
      const { id } = req.params;
      const { title, description, venue, time } = req.body;
      const meetup = await MeetUp.findOne({ _id: id });
      if(meetup) {
        meetup.title = title;
        meetup.description = description;
        meetup.venue = venue;
        meetup.time = time;
      }
      const updatedMeetup = await meetup.save();
      const message = [200, 'Meetup updated successfully', true];
      reqResponses.handleSuccess(res, message, updatedMeetup);
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }
}
