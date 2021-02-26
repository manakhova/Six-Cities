/* eslint-disable indent */
import React from 'react';

const stars = [1, 2, 3, 4, 5];

const NewCommentForm = () => {
  const [starsChecked, setUserForm] = React.useState([false, false, false, false, false]);
  const [userForm, setUserReview] = React.useState({review: ``});

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setUserReview({...userForm, review: `${value}`});
  };

  const handleStarClick = (target, id) => {
    const value = target.checked;
    setUserForm([...starsChecked.slice(0, id), value, ...starsChecked.slice(id + 1)]);
    // console.log(target, id);
    // console.log(starsChecked);
    // console.log(...starsChecked.slice(0, id));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star, id) => {
            return (
            <React.Fragment key={`${id}${star}`}>
            <input className="form__rating-input visually-hidden" name="rating" value={`${id}`} id={`${star}-stars`} type="radio"
              checked={starsChecked[id]}
              onChange={({target}) => handleStarClick(target, id)}/>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>);
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" onInput={handleFieldChange} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default NewCommentForm;

