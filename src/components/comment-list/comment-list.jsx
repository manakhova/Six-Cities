import PropTypes from 'prop-types';
import React from 'react';
import NewCommentForm from '../new-comment-form/new-comment-form';
import Comment from '../comment/comment';


const Comments = (props) => {
  const {comments} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment, i) => <Comment comment={comment} key={comment + i}/>)}
      </ul>
      <NewCommentForm />
    </section>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
