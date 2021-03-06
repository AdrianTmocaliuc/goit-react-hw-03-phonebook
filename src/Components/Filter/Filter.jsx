import { PropTypes } from "prop-types";

export const Filter = ({ title, onChange }) => {
  return (
    <div>
      <h4>{title}</h4>
      <input type="text" name="filter" onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
