import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    return (
      <div>
        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="text">
            <p>Essa carta é Super Trunfo ?</p>
            <input
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              name="cardTrunfo"
              onChange={ onInputChange }
            />
          </label>
        )}
      </div>
    );
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Trunfo;
