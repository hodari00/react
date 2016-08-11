import * as React from 'react';

export default class UsersBlock extends React.Component {

	static propTypes = {
	    userID: React.PropTypes.number
	  };

	render() {
		const { props } = this;
		const imgURL = '//robohash.org/' + props.userID + '?set=set2&bgset=bg2&size=70x70';
		return (
			<div id="users">
				<p>ONLINE USERS</p>
				<br />
				<span className="chip left">
	                <img src={ imgURL } />
	                <span>User #{ props.userID }</span>
	              </span>
			</div>
		)
	}
}