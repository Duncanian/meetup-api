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
      const message = [201, 'User created successfully', true];
      reqResponses.handleSuccess(res, message, createdMeetup);
    } catch (error) {
      reqResponses.handleError(error.toString(), 500, res);
    }
  }
}
