import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
  };

  render() {
    const { props } = this;
//     return (
// <ul className="collection">
//   <li className="collection-item avatar">
//     <img src="//robohash.org/107378?set=set2&bgset=bg2&size=70x70" alt="107378" className="circle" />
//     <span className="title">Anonymous robot #107378</span>
//     <p>
//       <i className="prefix mdi-action-alarm" />
//       <span className="message-date">05/19/2016 at 1:55PM</span>
//       <br />
//       <span>Hello World!</span>
//     </p>
//   </li>
// </ul>);
    return (
      <ul className="collection">
        { props.history.map((messageObj) => {
          const imgURL = '//robohash.org/' + messageObj.Who + '?set=set2&bgset=bg2&size=70x70';
          const messageDate = new Date(messageObj.When);
          const messageDateTime = messageDate.toLocaleDateString() +
            ' at ' + messageDate.toLocaleTimeString();
          return (
            <li className="collection-item avatar" key={ messageObj.When }>
              <img src={ imgURL } alt={ messageObj.Who } className="circle" />
              <span className="title">User #{ messageObj.Who }</span>
              <p>
                <i className="prefix mdi-action-alarm" />
                <span className="message-date">{ messageDateTime }</span>
                <br />
                <span>{ messageObj.What }</span>
              </p>
            </li>
          );
        }) }
      </ul>
    );
  }
}
