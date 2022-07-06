import PropTypes from 'prop-types';
import { Wraper, Text } from './Notification.styled';

function Notification({ message }) {
  return (
    <Wraper>
      <Text>{message}</Text>
    </Wraper>
  );
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;