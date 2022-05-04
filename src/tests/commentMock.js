const comTest = (commentsArr) => {
  document.body.innerHTML = '<ul id ="comments-ul"> </ul>';
  const commentsUl = document.getElementById('comments-ul');

  const commentList = document.createElement('li');
  const commentArr = Array.from(document.querySelectorAll('#comments-ul li'));
  commentsArr.forEach((element) => {
    commentList.innerHTML = `${element.name}: ${element.comment}`;
    commentsUl.appendChild(commentList);
    commentArr.push(commentList);
  });
  return commentArr;
};

const Mock = (id, name, userComment) => {
  const commentsArr = [
    {
      id: '1',
      name: 'Lekan',
      userComment: 'new Comment',
    },
    {
      id: '2',
      name: 'Didier',
      userComment: 'new Comment',
    },
  ];
  const comment = {
    id,
    name,
    userComment,
  };
  commentsArr.push(comment);
  comTest(commentsArr);
  return commentsArr;
};

export { Mock, comTest };
