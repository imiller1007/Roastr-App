particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 48,
			"density": {
				"enable": true,
				"value_area": 721.5354273894853
			}
		},
		"color": {
			"value": "#f3ffa0"
		},
		"shape": {
			"type": "polygon",
			"stroke": {
				"width": 1,
				"color": "#ffe100"
			},
			"polygon": {
				"nb_sides": 6
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 2.679854800594439,
				"opacity_min": 0.04060386061506725,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1.603412060865523,
			"direction": "top",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": true,
				"rotateX": 1202.559045649142,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 60,
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
				"distance": 64.96617698410762,
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
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
	stats.begin();
	stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);;