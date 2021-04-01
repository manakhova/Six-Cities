export const adaptCommentToClient = (comment) => {
  const adaptedComment = {
    ...comment,
    commentText: comment.comment,
    date: comment.date,
    user: {
      avatar: comment.user.avatar_url,
      isPro: comment.user.is_pro,
      id: comment.user.id,
      name: comment.user.name
    }
  };

  return adaptedComment;
};

export const adaptCommentToServer = (comment) => {
  const adaptedComment = {
    ...comment,
    'date': comment.date,
    'id': comment.id,
    'rating': comment.rating,
    // 'user': {
    //   'avatar_url': comment.user.avatar,
    //   'id': comment.user.id,
    //   'is_pro': comment.user.isPro,
    //   'name': comment.user.name
    // }
  };

  return adaptedComment;
};
