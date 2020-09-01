(function ($) {
	'use strict';

	jQuery(document).ready(function () {

		particlesJS('particlesJs',
		{
			"particles": {
			  "number": {
				"value": 114,
				"density": {
				  "enable": true,
				  "value_area": 789.1600969088593
				}
			  },
			  "color": {
				"value": "#b9a6a6"
			  },
			  "shape": {
				"type": "circle",
				"stroke": {
				  "width": 0,
				  "color": "#000000"
				},
				"polygon": {
				  "nb_sides": 5
				},
				"image": {
				  "src": "img/github.svg",
				  "width": 100,
				  "height": 100
				}
			  },
			  "opacity": {
				"value": 0.5524120678362014,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 1.7581293503712045,
				  "opacity_min": 0.1917959291314041,
				  "sync": false
				}
			  },
			  "size": {
				"value": 1,
				"random": true,
				"anim": {
				  "enable": false,
				  "speed": 40,
				  "size_min": 0.1,
				  "sync": false
				}
			  },
			  "line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			  },
			  "move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
				  "enable": false,
				  "rotateX": 600,
				  "rotateY": 1200
				}
			  }
			},
			"interactivity": {
			  "detect_on": "canvas",
			  "events": {
				"onhover": {
				  "enable": true,
				  "mode": "repulse"
				},
				"onclick": {
				  "enable": true,
				  "mode": "push"
				},
				"resize": true
			  },
			  "modes": {
				"grab": {
				  "distance": 400,
				  "line_linked": {
					"opacity": 1
				  }
				},
				"bubble": {
				  "distance": 400,
				  "size": 40,
				  "duration": 2,
				  "opacity": 8,
				  "speed": 3
				},
				"repulse": {
				  "distance": 200,
				  "duration": 0.4
				},
				"push": {
				  "particles_nb": 4
				},
				"remove": {
				  "particles_nb": 2
				}
			  }
			},
			"retina_detect": true
		  }
		);
	});
})(jQuery);