import PropTypes from 'prop-types';

// import styles from './filter.module.scss';

const Filter = ({ handleChange }) => {
  return (
    <div>
      <label>Finde contacts by name</label>
      <input
        name="filter"
        onChange={handleChange}
        placeholder="Find contacts"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
