import React, {FC} from 'react';

type Props = {
    title: string
}

export const Header: FC<Props> = (props) => {
    const {title} = props 

	const handleInput = (event: React.FormEvent<HTMLFormElement> & EventTarget) => {
        const target = event.target as HTMLInputElement;
		let value = target.value;
        event.preventDefault();
		target.reset();
	}
    return (
        <div>
            <header className="header">
			<div className="logo">
                {title}
            </div>
			<form className="search" 
                onSubmit={handleInput}>
				<input type="text" className="input" placeholder="Search" name="input" />
				<button className="button" >Find</button>
			</form>
		</header>
        </div>
    );
};

