import AbstractView from '../framework/abstract-view';

const SORT_HEADERS = {
  'day': 'Day',
  'event': 'Event',
  'time': 'Time',
  'price': 'Price',
  'offer': 'Offers'
};

const createSortItemElement = (sortType) => `
  <div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}">
    <label class="trip-sort__btn" for="sort-${sortType}">${SORT_HEADERS[sortType]}</label>
  </div>`;

const createSortElementTemplate = (sortTypes) => {
  const sortItems = sortTypes.map((type) => createSortItemElement(type)).join('');
  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${sortItems}
  </form>`;
};

/**
 * Sort element view
 *
 * @class SortView
 * @extends {AbstractView}
 */

export default class SortView extends AbstractView{

  constructor(sortTypes) {
    super(createSortElementTemplate(sortTypes));
  }

}
