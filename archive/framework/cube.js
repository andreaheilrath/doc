// define connection with html
var canvasHolder = document.getElementById('canvas-holder');
var width =  canvasHolder.getBoundingClientRect().width;
var height = 0.6180*width; //golden ratio 

// setup for gui
var params = { rpm_x: -0.5, rpm_y: -0.3, rpm_z: 0.15 };
var gui = new dat.GUI({ autoPlace: false });
gui.add(params, "rpm_x", -1, 1).step(0.1);
gui.add(params, "rpm_y", -1, 1).step(0.1);
gui.add(params, "rpm_z", -1, 1).step(0.1);
gui.close();
document.getElementById("dat-gui-holder").appendChild(gui.domElement);


// camera setup
const camera = new THREE.PerspectiveCamera(20, width / height, 1, 100 );
camera.position.z = 8;


// scene with cube
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


// renderer
const renderer = new THREE.WebGLRenderer( { antialias: true} ); //, alpha: true
renderer.setSize( width, height );
renderer.setAnimationLoop( animation );
canvasHolder.appendChild( renderer.domElement );


// animation
function animation( time ) {
	mesh.rotation.x = params["rpm_x"] * time / 1000;
	mesh.rotation.y = params["rpm_y"] * time / 1000;
  mesh.rotation.z = params["rpm_z"] * time / 1000;
	renderer.render( scene, camera );
}


// automatic resize when changing window size
window.addEventListener("resize", onWindowResize);

function onWindowResize() {

  width =  canvasHolder.getBoundingClientRect().width;
  height = 0.5*width;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
