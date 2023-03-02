import { ArrowUpIcon } from '@heroicons/react/24/solid';
import React, {useState} from 'react';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button>
	<ArrowUpIcon onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</button>
);
}

export default ScrollButton;
