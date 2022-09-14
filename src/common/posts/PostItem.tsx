import React, { useRef } from 'react';
import './index.scss';

type Props = {
	body: any,
	id: number
	userId: number
}
export const PostItem = (props: Props) => {
	const { body, id, userId } = props;
	const postText = useRef<HTMLDivElement & HTMLElement>(null)
	const openText = () => {
		if (postText.current) {
			postText?.current?.classList?.toggle("text");
		}
	}
	return (
		<div>
			<div className="post__container">
				<ul className="post__list-elements">
					<li className="post__item">
						<div className="post__title" onClick={openText}>
							Title {id}
						</div>
						{/* <div>
							userid: {userId}
						</div> */}
						<div className="post__text"
							ref={postText}>{body}
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

