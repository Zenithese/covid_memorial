import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/store'
import Root from '../components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // if (window.currentUser) {
  //     const preloadedState = {
  //         session: { id: window.currentUser.id },
  //         entities: {
  //             users: { [window.currentUser.id]: window.currentUser }
  //         }
  //     };
  //     store = configureStore(preloadedState);
  //     delete window.currentUser;
  // } else {
  //     store = configureStore();
  // }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getProps = store.getProps;
  ReactDOM.render(
    // React.createElement(Root, {store: store}),
    <Root store={store} />,
    document.body.appendChild(document.createElement('div')),
  )
})

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
