import React, { useRef } from 'react';

export const PostItem = (props) => {
    const { body, id } = props;
	const postText = useRef
	const openText = () => {
		postText.current.classList.toggle("open-text");
	}
    return (
        <div>
            <div className="posts__box">
			<ul className="posts__list">
				<li className="list__item">
					<div className="item__title" onClick={() => {
						openText()}}>Title {id}</div>
					<div className="item__text" ref={postText}>{body}</div>
				</li>
			</ul>
		</div>
        </div>
    );
};

