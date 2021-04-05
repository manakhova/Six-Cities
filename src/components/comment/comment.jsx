import PropTypes from 'prop-types';
import React from 'react';
import {getStarRating} from '../../utils';
import dayjs from 'dayjs';

const Comment = (props) => {
  const {comment} = props;
  const {id, commentText, date, user, rating} = comment;
  return (
    <li className="reviews__item" id={`${id}`}>
      <div className="reviews__user user" id={`${user.id}`}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getStarRating(Math.round(rating))}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentText}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format(`YYYY-MM-D`).toString()}>{dayjs(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>);
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    commentText: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired,
};

export default Comment;
