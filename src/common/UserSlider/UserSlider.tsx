import React, {FC} from "react"
import "./index";

type Props = {
	btnNext: string
	btnPrev: string
}
export const UserSlider:FC<Props> = (props) => {
	const {btnNext, btnPrev} = props
	return (
		<footer className="slider">
			<div className="slider__line">
				<div className="slider__item">
					<button className="slider__btn" onClick={() => {
					}}>{btnPrev}</button>
				</div>
				
                <div className="slider__item" >
				    <button className="slider__btn" onClick={() => {
				    }}>{btnNext}</button>
				</div>
			</div>
		</footer>
	)
}

