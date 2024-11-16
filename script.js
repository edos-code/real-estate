const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse')

  if (value) {
    navbarLinks.classList.remove('navbar__collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change')
  }
})





const animationDuration = 2000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );


const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );

	const counter = setInterval( () => {
		frame++;
	
		const progress = easeOutQuad( frame / totalFrames );
	
		const currentCount = Math.round( countTo * progress );

	
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

	
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};


const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};