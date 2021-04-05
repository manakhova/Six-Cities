export const adaptCommentToClient = (comment) => {
  return {
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
};

