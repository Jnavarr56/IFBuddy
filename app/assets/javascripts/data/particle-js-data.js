let particleConfig = {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 2886.1417095579413
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "https://flaticons.net/icons/Food/Cutlery-Fork-Knife.png",
          "width": 5,
          "height": 5
        }
      },
      "opacity": {
        "value": 0.1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 44.09383167380187,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 40,
          "sync": true
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "bottom-left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 721.5354273894853,
          "rotateY": 0
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
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
    "retina_detect": false
  }