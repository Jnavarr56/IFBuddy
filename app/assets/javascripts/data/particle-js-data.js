

let particleConfig = {
  "particles": {
    "number": {
      "value": 25,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://flaticons.net/icons/Food/Cutlery-Fork-Knife.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 40.08530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 7.308694910712106,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom-right",
      "random": false,
      "straight": true,
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
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
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
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
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



let particleConfig2 = {
  "particles": {
    "number": {
      "value": 25,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "https://flaticons.net/icons/Miscellaneous/Clock-01.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 40.08530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 7.308694910712106,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom-right",
      "random": false,
      "straight": true,
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
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
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
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
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

function cycleBackground() {

  if (location.href !== onPage){ 

    window.pJSDom[0].pJS.fn.particlesRefresh();
    
    return;

  }

  setTimeout(()=> {

    if (location.href !== onPage){ 

      window.pJSDom[0].pJS.fn.particlesRefresh();
    
      return;
  
    }

      $("#particles-js").fadeOut(1000);

      if (pJSDom[0].pJS.particles.shape.image.src === "https://flaticons.net/icons/Food/Cutlery-Fork-Knife.png") {

        pJSDom[0].pJS.particles.shape.image.src = "https://flaticons.net/icons/Miscellaneous/Clock-01.png";

      }

      else {

        pJSDom[0].pJS.particles.shape.image.src = "https://flaticons.net/icons/Food/Cutlery-Fork-Knife.png";
    
      }

      setTimeout(()=> {

        if (location.href !== onPage){ 

          window.pJSDom[0].pJS.fn.particlesRefresh();
    
          return;
      
        }

        window.pJSDom[0].pJS.fn.particlesRefresh();

        $("#particles-js").fadeIn(1000);

        setTimeout(()=> {

          if (location.href !== onPage){ 
    
            return;
        
          }
            cycleBackground();

        }, 1000);

      }, 1000);
      
  }, 7000);

}


