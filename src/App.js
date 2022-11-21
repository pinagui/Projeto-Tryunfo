import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validationSaveButton());
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const newCardPack = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prev) => ({
      saveCards: [...prev.saveCards, newCardPack],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  validationSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const empty = 0;
    const maxPoints = 90;
    const allMaxPoints = 210;
    const PointsCardAttr1 = cardAttr1 >= empty && cardAttr1 <= maxPoints;
    const PointsCardAttr2 = cardAttr2 >= empty && cardAttr2 <= maxPoints;
    const PointsCardAttr3 = cardAttr3 >= empty && cardAttr3 <= maxPoints;
    const sumPoinstCards = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);
    const sumAllPoinstCards = sumPoinstCards <= allMaxPoints;
    const emptyCardName = cardName.length > 0;
    const emptyCardDescription = cardDescription.length > 0;
    const emptyCardImage = cardImage.length > 0;

    const result = PointsCardAttr1
    && PointsCardAttr2
    && PointsCardAttr3
    && sumAllPoinstCards
    && emptyCardName
    && emptyCardDescription
    && emptyCardImage;

    this.setState({
      isSaveButtonDisabled: !result,
    });
  };

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
      isSaveButtonDisabled,
      saveCards } = this.state;

    const trunfoTrue = saveCards.some((item) => item.cardTrunfo === true);
    return (
      <div>
        <h1>Tryunfo</h1>
        <form>
          <fieldset>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ trunfoTrue }
            />
          </fieldset>
        </form>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />

        {saveCards.map((item) => (
          <div key={ item.cardName }>
            <Card
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
              onInputChange={ this.onInputChange }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
