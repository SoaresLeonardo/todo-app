import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { BtnTheme } from '../assets/styles/btnContainer';

export default function Theme({ themeToggler, theme }) {
  return (
    <div>
      <BtnTheme onClick={themeToggler}>
        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </BtnTheme>
    </div>
  );
}

Theme.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
