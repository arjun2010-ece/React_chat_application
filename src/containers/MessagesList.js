import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'
// import { addMessage } from '../actions'


const mapStateToProps = state =>({
  messages: state.messages
})

export const MessagesList = connect(mapStateToProps, null)(MessagesListComponent)