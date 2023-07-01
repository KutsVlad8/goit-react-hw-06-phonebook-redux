// !=============redux============

import { useDispatch } from 'react-redux';
import { filter } from '../../redux/actions';
import { Input } from './Filter.styled';

export const FilterRedux = () => {
  const dispatch = useDispatch();
  const handleChangeFilterInput = event => {
    dispatch(filter(event.target.value));

    // console.log(event.target.value);
  };

  return (
    <Input
      type="text"
      onChange={handleChangeFilterInput}
      placeholder="find contact"
    />
  );
};

// import PropTypes from 'prop-types';
// export const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name
//     <Input type="text" value={value} onChange={onChange} />
//   </label>
// );

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
