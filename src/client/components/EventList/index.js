// Imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Event from '../Event';

// CSS
import './index.scss';

// PropTypes
const propTypes = {
  events: PropTypes.array,
  focusedVenueId: PropTypes.string,
  updateFocusedVenueId: PropTypes.func
};

/*
  EventList
  <EventList/>
*/

function EventList({ events, focusedVenueId, updateFocusedVenueId }) {
  return (
    <div className="event-list">
      <button className="list-toggle">All</button>
      <ul className="list element" id="containerElement">
        <li className="list__item">
          {events.map((event) => {
            return (
              <Event
                event={event}
                focusedVenueId={focusedVenueId}
                key={event._id}
                updateFocusedVenueId={updateFocusedVenueId}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
}

EventList.propTypes = propTypes;

export default EventList;
