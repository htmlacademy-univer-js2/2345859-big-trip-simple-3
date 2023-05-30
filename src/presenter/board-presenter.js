import { render } from '../render';
import TripPointView from '../view/trip-point-view';
import EventFormView from '../view/event-form-view';
import TripPointModel from '../model/trip-point-model';
import { randomInt } from '../framework/utils/random-utils';

export default class BoardPresenter {

  #tripPointsContainer = null;

  constructor({tripPointsContainer}) {
    this.#tripPointsContainer = tripPointsContainer;
  }

  init() {

    render(new EventFormView(TripPointModel.empty), this.#tripPointsContainer);

    for (const el of Array.from({length: Math.floor(Math.random() * 30) + 5}, () => new TripPointView(
      {
        'base_price': randomInt(1000, 100),
        'date_from': '2019-07-10T22:55:56.845Z',
        'date_to': '2019-07-11T11:22:13.375Z',
        'destination': [],
        'id': '0',
        'offers': Array.from({length: Math.floor(Math.random() * 4)}, () => Math.floor(Math.random() * 9)),
        'type': 'bus'
      }
    ))){
      render(el, this.#tripPointsContainer);
    }
  }

}
