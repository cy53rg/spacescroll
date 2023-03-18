import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Setup



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(5,0.05, 16, 200);
const material = new THREE.MeshStandardMaterial({ color: 0x7f7979 });
const torus = new THREE.Mesh(geometry, material);


const geometry1 = new THREE.TorusGeometry(5.1,0.05, 16, 200);
const material1= new THREE.MeshStandardMaterial({ color: 0x575b6bb });
const torus1 = new THREE.Mesh(geometry1, material1);


const geometry2 = new THREE.TorusGeometry(5.2,0.05, 16, 200);
const material2 = new THREE.MeshStandardMaterial({ color: 0xfff7f8 });
const torus2 = new THREE.Mesh(geometry2, material2);

scene.add(torus,torus1,torus2);


// const innerRadius = 3;
// const outerRadius = 7;
// const thetaSegments = 32;

// const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
// const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
// const ring = new THREE.Mesh(ringGeometry, ringMaterial);
// scene.add(ring);


//custom load 
// const loader = new GLTFLoader();


// loader.load( 'exp.gltf', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );





// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(25, 35, 35);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 15, 15);
  const material = new THREE.MeshStandardMaterial({ color: 0x4cc9f0 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(300));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);


function addStar1() {
  const geometry = new THREE.SphereGeometry(0.25, 15, 15);
  const material = new THREE.MeshStandardMaterial({ color: 0x407076 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}



Array(200).fill().forEach(addStar1);

function addStar2() {
  const geometry = new THREE.SphereGeometry(0.15,5,5);
  const material = new THREE.MeshStandardMaterial({ color: 0xff9f1c});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(200));

star.position.set(x,y,z);
scene.add(star);

function animate() {
  requestAnimationFrame(animate);
  star.rotation.x +=0.01
  star.rotation.y +=0.005
  star.rotation.z +=0.009
}
animate();


const gometry = new THREE.SphereGeometry(0.15,5,5);
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  star.rotation.x +=0.01
  star.rotation.y +=0.005
  star.position.z +=0.09
}
document.body.onscroll = moveCamera;
moveCamera();

}


function addStar3() {
  const geometry = new THREE.SphereGeometry(0.15,5,5);
  const material = new THREE.MeshStandardMaterial({ color: 0xd4e09b});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(200));

star.position.set(x,y,z);
scene.add(star);

function animate() {
  requestAnimationFrame(animate);
  star.rotation.x +=0.01
  star.rotation.y +=0.005
  star.rotation.z +=0.009
}
animate();


const gometry = new THREE.SphereGeometry(0.15,5,5);
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  star.rotation.x +=0.01
  star.rotation.y +=0.005
  star.position.z +=0.09
}
document.body.onscroll = moveCamera;
moveCamera();

}


Array(200).fill().forEach(addStar3);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('jeff.png');

const jeff = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshBasicMaterial({ map: jeffTexture }));

// scene.add(jeff);

// Moon

const moonTexture = new THREE.TextureLoader().load('planet7.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);


// plante 1
const planet1Texture = new THREE.TextureLoader().load('Planet.jpg');
const normTexture = new THREE.TextureLoader().load('planet1.jpg');

const planet1 = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshStandardMaterial({
    map: planet1Texture,
    normalMap: normalTexture,
  })
);


//planet 2 last
const planet2Texture = new THREE.TextureLoader().load('Planet15.jpg');
const norm1Texture = new THREE.TextureLoader().load('planet1.jpg');

const planet2 = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: planet2Texture,
    normalMap: normalTexture,
  })
);

//planet 3
const planet3Texture = new THREE.TextureLoader().load('Planet11.jpg');
const norm3Texture = new THREE.TextureLoader().load('planet1.jpg');

const planet3 = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: planet3Texture,
    normalMap: normalTexture,
  })
);


//planet 4
const planet4Texture = new THREE.TextureLoader().load('Planet16.jpg');
const norm4Texture = new THREE.TextureLoader().load('planet1.jpg');

const planet4 = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: planet4Texture,
    normalMap: normalTexture,
  })
);



scene.add(moon, planet1,planet2, planet3, planet4);

moon.position.z = 30;
moon.position.setX(-10);

planet1.position.z = 40;
planet1.position.setX(-20);

planet2.position.z = 63;
planet2.position.setX(-10);


planet3.position.z = 60;
planet3.position.setX(10);
planet3.position.y = 10;

planet4.position.z = 60;
planet4.position.setX(-40);

jeff.position.z = -5;
jeff.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.003;
  moon.rotation.y += 0.0035;
  moon.rotation.z += 0.003;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;
  jeff.rotation.z += 0.01;


  planet1.rotation.x += 0.004;
  planet1.rotation.y += 0.035;
  planet1.rotation.z += 0.04;


  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;


  planet2.rotation.x += 0.002;
  planet2.rotation.y += 0.002;
  planet2.rotation.z += 0.005;

  planet4.rotation.x += 0.005;
  planet4.rotation.y += 0.005;
  planet4.rotation.z += 0.005;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;


  torus1.rotation.x += 0.015;
  torus1.rotation.y += 0.0055;
  torus1.rotation.z += 0.015;


  torus2.rotation.x += 0.02;
  torus2.rotation.y += 0.006;
  torus2.rotation.z += 0.02;



   

  moon.rotation.x += 0.002;
  moon.rotation.y += 0.002;
  moon.rotation.z += 0.003;


  planet1.rotation.x += 0.001;
  planet1.rotation.y += 0.001;
  planet1.rotation.z += 0.001;

  planet2.rotation.x += 0.0002;
  planet2.rotation.y += 0.0002;
  planet2.rotation.z += 0.0005;

  planet4.rotation.x += 0.005;
  planet4.rotation.y += 0.005;
  planet4.rotation.z += 0.005;


  // controls.update();

  renderer.render(scene, camera);
}

animate();



gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".text1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text1", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".tex",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".tex", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".tex1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".tex1", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".text1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text1", { opacity: 1 });
    },
  }
);
gsap.fromTo(
  ".ball-text3",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".ball-text3", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".ball-text2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "100%",
    },
    onComplete: () => {
      gsap.to(".ball-text2", { opacity: 1 });
    },
  }
);


gsap.fromTo(
  ".text4",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "40%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text4", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".text2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "30%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text2", { opacity: 1 });
    },
  }
);

gsap.fromTo(
  ".text3",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "25%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text3", { opacity: 1 });
    },
  }
);



gsap.fromTo(
  ".bb",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "70%",
      end: "90%",
    },
    onComplete: () => {
      gsap.to(".bb", { opacity: 1 });
    },
  }
);



gsap.fromTo(
  ".c",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "70%",
    },
    onComplete: () => {
      gsap.to(".c", { opacity: 1 });
    },
  }
);




gsap.fromTo(
  ".cc",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "70%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);



