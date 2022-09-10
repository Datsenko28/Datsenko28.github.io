import React from 'react';
import './index.scss';
import {UserProps} from './../UsersPage'

export const UserItem = (props: UserProps) => {
	const { name, email, id, phone } = props;

	return (
		<div className="user__item">
			<ul className="item__list">
				<li className="item__info">{name}</li>
				<li className="item__info">{email}</li>
				<li className="item__info">{phone}</li>
				<li className="item__info">{id}</li>
			</ul>
			<button className="user__btn" onClick={() => {}}>Watch posts</button>
		</div>
	)
}

