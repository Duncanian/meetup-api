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
}
