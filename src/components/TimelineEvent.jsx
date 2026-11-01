import './TimelineEvent.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const TimelineEvent = ({ person, status, timestamp }) => {
  return (
    <li className="timeline-event">
      <div className="event-person">{person}</div>
      <div className="event-status">{status}</div>
      <div className="event-time">
        <TimeStamp time={timestamp} />
      </div>
    </li>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default TimelineEvent;
