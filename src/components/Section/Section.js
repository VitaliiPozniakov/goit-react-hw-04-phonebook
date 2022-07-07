import PropTypes from 'prop-types';
import { Sect, Label, TitleWraper } from './Section.styled';

function Section({ title, children }) {
  return (
    <Sect>
      <TitleWraper>{title && <Label>{title}</Label>}</TitleWraper>
      {children}
    </Sect>
  );
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
