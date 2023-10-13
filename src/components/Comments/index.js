import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onAddComments = event => {
    event.preventDefault()
    const newList = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevComments => [...prevComments, newList])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComments}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentList.map(eachComment => (
        <CommentItem key={eachComment.id} commentDetails={eachComment} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
