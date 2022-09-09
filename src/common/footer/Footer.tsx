import "./footer.scss";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer--line">
				<div className="line--item">
					<button className="item--el" onClick={() => {
					}}>Previous</button>
				</div>
				
                <div className="line--item" >
				    <button className="item--el" onClick={() => {
				    }}>Next</button>
				</div>
			</div>
		</footer>
	)
}

