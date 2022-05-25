// internal
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Testing';
import main from '../assets/images/main.svg';
import navLogo from '../assets/images/logo.svg';

// external
import { Link } from 'react-router-dom';

export const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo logo={navLogo} />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						Job <span>tracking</span> app
					</h1>
					<p>
						I'm baby fixie freegan four dollar toast taxidermy sustainable shabby chic green juice vegan letterpress direct trade kinfolk hell of
						mlkshk fingerstache adaptogen. Authentic chia aesthetic, cornhole typewriter put a bird on it irony health goth. Fam PBR&B blog mixtape.
						Tacos hella williamsburg wayfarers selvage. Keytar literally activated charcoal lo-fi retro woke irony knausgaard. Plaid truffaut copper
						mug, yuccie ennui kickstarter helvetica cray unicorn tbh pug lomo glossier. Tumblr disrupt taxidermy church-key pok pok tousled cornhole
						etsy slow-carb.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<img src={main} alt='Job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};
