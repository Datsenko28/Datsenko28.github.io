import React, {FC} from "react"
import "./footer.scss";

type Props = {
	btnNext: string
	btnPrev: string
}
export const UserSlider:FC<Props> = (props) => {
	const {btnNext, btnPrev} = props
	return (
		<footer className="slider">
			<div className="slider--line">
				<div className="line--item">
					<button className="item--el" onClick={() => {
					}}>{btnPrev}</button>
				</div>
				
                <div className="line--item" >
				    <button className="item--el" onClick={() => {
				    }}>{btnNext}</button>
				</div>
			</div>
		</footer>
	)
}

