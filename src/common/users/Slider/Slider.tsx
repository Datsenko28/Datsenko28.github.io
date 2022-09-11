import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 

import './index.scss';
type Props = {
	handlerNext: ()=> {},
	handlerPrev: ()=> {},
	disableNext?: boolean
	disablePrev?: boolean
}


export const Slider = (props: Props) => {
	const {handlerNext, handlerPrev, disablePrev, disableNext} = props
	const classCustom = disablePrev ? "slider slider-next" : "slider"
    return (
            <section className={classCustom}>
				{ !disablePrev && (
				<div className="row__item" onClick={handlerPrev}>
				    <ArrowBackIosIcon/>
					<button className="item__btn" >Previous</button>
				</div>
				)} 
				{!disableNext && (
				<div className="row__item next" onClick={handlerNext}>
					<button className="item__btn" >Next</button>
					<ArrowForwardIosIcon/>
				</div>
				)}
		
		</section>
    );
};

