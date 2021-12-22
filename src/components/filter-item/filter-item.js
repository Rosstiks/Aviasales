import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { bool } from 'prop-types';
import classes from './filter-item.module.css';
import { changeFilter } from '../../actions';

function FilterItem({ name, filter, changeFilter }) {
  const titleCheckbox = {
    ALL: 'Все',
    '0_TRANS': 'Без пересадок',
    '1_TRANS': '1 пересадка',
    '2_TRANS': '2 пересадки',
    '3_TRANS': '3 пересадки',
  };
  const toggleCheck = () => {
    changeFilter(name);
  };

  return (
    <li className={classes.container}>
      <label className={classes.filterItem}>
        <div className={classes.contentContainer}>
          <input
            name={name}
            onChange={toggleCheck}
            className={classes.checkInput}
            type="checkbox"
            checked={filter[name]}
          />
          <span className={classes.checkBox} />
          {titleCheckbox[name]}
        </div>
      </label>
    </li>
  );
}

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(bool).isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
