import React from 'react';
import { ThemeContext } from './themeContext';
import pokeball from './img/pokeball.jpg';

export const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	function isDark() {
		return theme === 'dark';
	}

	return (
		<div>
			{theme === 'dark' ? (
				<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className=" cursor-pointer">
					<img className="flex flex-col m-auto items-center w-1/6" src={pokeball} alt="pokeball" />
				</button>
			) : (
				<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className=" cursor-pointer">
					<img className=" flex flex-col m-auto items-center w-1/6" src={pokeball} alt="pokeball" />
				</button>
			)}
		</div>
	);
};

export default Toggle;
