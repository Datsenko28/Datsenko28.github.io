import React from 'react';
import './index.scss';
import classNames from 'classnames'
import {UserProps} from './../UsersPage'

type Props =  {
	 handlePost: (id: number) => void
	 withPosts?: boolean
} & UserProps

export const UserItem = (props: Props ) => {
	const { name, email, id, phone, handlePost, withPosts } = props;
	
	return (
		<div className={classNames("user__item", {'user__item-small': withPosts })}>
			<ul className="item__list" >
				<li className="item__info">{name}</li>
				<li className="item__info">{email}</li>
				<li className="item__info">{phone}</li>
				<li className="item__info">{id}</li>
			</ul>
			<button className="user__btn" onClick={()=>handlePost(id)}>Open</button>
		</div>
	)
}

