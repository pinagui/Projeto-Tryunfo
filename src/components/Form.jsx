import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Atributtes from './Atributtes';
import Trunfo from './Trunfo';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <label htmlFor="text">
          Nome da Carta
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="text">
          Descrição da Carta
          <input
            data-testid="description-input"
            type="textarea"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>

        <Atributtes
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />

        <label htmlFor="text">
          Insira a Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="text">
          Raridade da Carta
          <select
            data-testid="rare-input"
            type="select"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <Trunfo
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
          hasTrunfo={ hasTrunfo }
        />

        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />

      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
