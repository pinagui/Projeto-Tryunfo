import React from 'react';
import PropTypes from 'prop-types';

class Atributtes extends React.Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      onInputChange,
    } = this.props;
    return (
      <div>
        <label htmlFor="text">
          Atributo da Carta 1
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="text">
          Atributo da Carta 2
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="text">
          Atributo da Carta 3
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Atributtes.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Atributtes;
