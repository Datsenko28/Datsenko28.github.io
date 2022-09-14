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
				<li className="about__item">
					{name}
				</li>
				<li className="about__item">
					{email}
				</li>
				<li className="about__item">
					{phone}
				</li>
				<li className="about__item">
					{id}
				</li>
			</ul>
			<button className="user__btn" onClick={()=>handlePost(id)}>Open post</button>
		</div>
	)
}

