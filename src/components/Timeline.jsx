import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = ({ data }) => {
  return (
    <ul className="timeline">
      {data.map((event, index) => (
        <TimelineEvent
          key={index}
          person={event.person}
          status={event.status}
          timestamp={event.timestamp}
        />
      ))}
    </ul>
  );
};

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Timeline;
