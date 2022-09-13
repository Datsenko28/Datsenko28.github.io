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
			postText?.current?.classList?.toggle("open-text");
		}
	}
	return (
		<div>
			<div className="post--box">
				<ul className="post--list">
					<li className="post--item">
						<div className="post--title" onClick={openText}>
							Title {id}
						</div>
						<div>
							userid: {userId}
						</div>
						<div className="post--text"
							ref={postText}>{body}
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

