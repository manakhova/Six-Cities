import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {postComment, fetchComments} from "../../store/api-actions";
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from "../../const";

const NewCommentForm = (props) => {
  const {id, onAddComment} = props;

  const [validity, setValidity] = React.useState({comment: false, rating: false, formIsActive: true});
  const [userForm, setUserReview] = React.useState({comment: ``, rating: null});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddComment(id, {
      comment: userForm.comment,
      rating: userForm.rating
    });

    setUserReview({comment: ``, rating: null});
    setValidity({comment: false, rating: false, formIsActive: true});

    document.querySelector(`.reviews__textarea`).value = ``;
    document.querySelectorAll(`.form__rating-input`).forEach((item) => {
      item.checked = false;
    });
  };

  const handleFormDisableClick = () => {
    // не получилось с блокировкой, я не понимаю как это сделать
    setValidity({...validity, formIsActive: false});
  };

  const handleFieldChange = (evt) => {
    const {value} = evt.target;
    setUserReview({...userForm, comment: `${value}`});
    if (userForm.comment.length >= MIN_COMMENT_LENGTH) {
      setValidity({...validity, comment: true});
    }
  };

  const handleStarClick = (target) => {
    const value = target.checked;
    setValidity({...validity, rating: value});
    setUserReview({...userForm, rating: Number(target.value)});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
          onChange={({target}) => handleStarClick(target)} required/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={({target}) => handleStarClick(target)} required/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={({target}) => handleStarClick(target)} required/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={({target}) => handleStarClick(target)} required/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={({target}) => handleStarClick(target)} required/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea minLength={`${MIN_COMMENT_LENGTH}`} maxLength={`${MAX_COMMENT_LENGTH}`}
        className="reviews__textarea form__textarea" id="review" name="review" onInput={handleFieldChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={validity.formIsActive ? false : true} required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" onClick={handleFormDisableClick} disabled={validity.rating && validity.comment ? false : true}>Submit</button>
      </div>
    </form>
  );
};

NewCommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddComment(id, comment) {
    dispatch(postComment(id, comment));
  },
  onLoadComments(id) {
    dispatch(fetchComments(id));
  },
});

export {NewCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(NewCommentForm);


