// !=============redux============

import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const FilterRedux = () => {
  const dispatch = useDispatch();

  const handleChangeFilterInput = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <Input type="text" placeholder="name" onChange={handleChangeFilterInput} />
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
