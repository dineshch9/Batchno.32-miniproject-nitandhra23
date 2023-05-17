
function init() {
 
    // document.addEventListener('mousedown', onDocumentMouseDown, false);
    
      // document.addEventListener('mousemove', onDocumentMouseMove, false); 
      var scene = new THREE.Scene();
      var stats = initStats();
      var renderer = initRenderer();
      var camera = initCamera();
      
      scene.add(new THREE.AmbientLight(0xffffff));
  
  
      const loader1 = new THREE.CubeTextureLoader();
      const texture = loader1.load([
          '../../assets/models/nitap/stars.png',
          '../../assets/models/nitap/stars.png',
          '../../assets/models/nitap/stars.png',
          '../../assets/models/nitap/stars.png',
          '../../assets/models/nitap/stars.png',
          '../../assets/models/nitap/stars.png',
      ]);
      scene.background= texture;
  
  
  
  
  
  
  
  
     ///axes
      var axes = new THREE.AxisHelper(100);
      scene.add(axes);
  
  
      //resize
      window.addEventListener('resize', onResize, false);
      function onResize(){
      camera.aspect =window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth,window.innerHeight);}
      
     
      var trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
      trackballControls.rotateSpeed = 0.5;
      trackballControls.zoomSpeed =2;
      trackballControls.panSpeed = 2;
      trackballControls.noZoom = false;
      trackballControls.noPan = false;
      trackballControls.staticMoving = false;
      trackballControls.dynamicDampingFactor = 0.3;
      trackballControls.keys = [65, 83, 68];
      var clock = new THREE.Clock();
    
     
    
      var nit;
      var logo;
      var loader = new THREE.ColladaLoader();
      loader.load('../../assets/models/nitap/LOGO/SD/nitlogoOM.dae', function (result) {
    // console.log(result.scene);
    nit = result.scene;
    // console.log(nit.position);
  
    // logo = nit.getObjectByName('nit logo');
    // logo.name ='sd';
    // console.log(logo);
    // logo.translateX(0.16);
   
  
    // render1();
    // function render1() {
    //  logo.rotation.y +=0.1* Math.PI / 23;
  
    // requestAnimationFrame(render1);
    //     renderer.render(scene, camera)}
  
        
  
    // nit.children.forEach(function (child) {
    //   if (child instanceof THREE.Mesh) {
    //     child.receiveShadow = true;
    //     child.castShadow = true;
    //   } else {
    //     // remove any lighting sources from the model
    //     nit.remove(child);
    //   }
    // });
  
  
  
    nit.scale.set(1,1,1);
  //   nit.position.set(scene.position);
        scene.add(result.scene);
        // result.scene.rotateZ(Math.PI);
        nit.rotation.y = Math.PI/2;
       console.log(nit.position);
        
        // result.scene.translateZ(-5);
        result.scene.translateY(4);
        // result.scene.translateX(-0.3);
        // nit.position.set(0.35, -0.9, 0.51);
       
      });
    
  
  
  
  
  
  
    
      render1();
      function render1() {
        
        stats.update();
        var delta = clock.getDelta();
        trackballControls.update(delta);
        requestAnimationFrame(render1);
        renderer.render(scene, camera)
    
      }
      
  
  
      //orbit
        
  // //   //  Create the OrbitControls with the following options
//   let controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.enableRotate = true; // enable rotation
//   controls.enablePan = false; // disable panning
//   controls.enableZoom = false; // disable zooming
//   controls.minPolarAngle = Math.PI / 2; // limit rotation to the XZ plane
//   controls.maxPolarAngle = Math.PI / 2; // limit rotation to the XZ plane
//   controls.addEventListener('change', () => {
//     // prevent camera from moving out of the XZ plane
   
//   //   //  camera.position.set(897987, 0, 10000);
//   });
      
  
  
 
  camera.lookAt(0,0,0);
  
  
  
 
  //link
  
  console.log(scene);
  
  
  
  
  
  
  
  
   }
    
   //// const { Vector3 } = require("../../../libs/three/three");

function init() {
  
  // document.addEventListener('mousedown', onDocumentMouseDown, false);
  
    // document.addEventListener('mousemove', onDocumentMouseMove, false); 
    var stats = initStats();
    var renderer = initRenderer();
    var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    var scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xffffff));
    
    const loader1 = new THREE.CubeTextureLoader();
    const texture = loader1.load([
        '../../assets/models/nitap/stars.png',
        '../../assets/models/nitap/stars.png',
        '../../assets/models/nitap/stars.png',
        '../../assets/models/nitap/stars.png',
        '../../assets/models/nitap/stars.png',
        '../../assets/models/nitap/stars.png',
    ]);
    scene.background= texture;








   ///axes
    var axes = new THREE.AxisHelper(100);
    scene.add(axes);


    //resize
    window.addEventListener('resize', onResize, false);
    function onResize(){
    camera.aspect =window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);}
    
   
    var trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
    trackballControls.rotateSpeed = 2;
    trackballControls.zoomSpeed =2;
    trackballControls.panSpeed = 0;
    trackballControls.noZoom = false;
    trackballControls.noPan = false;
    trackballControls.staticMoving = false;
    trackballControls.dynamicDampingFactor = 0.3;
    trackballControls.keys = [65, 83, 68];
    var clock = new THREE.Clock();
  
   
  
    var nit;
    var logo;
    var loader = new THREE.ColladaLoader();
    loader.load('../../assets/models/nitap/NITAPl3.dae', function (result) {
  
  nit = result.scene;


  logo = nit.getObjectByName('nitap_logo');
  // logo1 =nit.getObjectByName();

  console.log(nit);
  logo.translateX(0.16);
  render1();
  function render1() {
   logo.rotation.y +=0.1* Math.PI / 23;

  requestAnimationFrame(render1);
      renderer.render(scene, camera)}

      

  nit.children.forEach(function (child) {
    if (child instanceof THREE.Mesh) {
      child.receiveShadow = true;
      child.castShadow = true;
    } else {
      // remove any lighting sources from the model
      nit.remove(child);
    }
  });


  result.scene.rotateZ(Math.PI);
  nit.rotation.z =  -Math.PI/2+Math.PI/35;
  // nit.rotation.z = Math.PI/4;
 
  
  // result.scene.translateZ(-5);
  // result.scene.translateY(4);
  result.scene.translateX(-0.3);
  nit.position.set(-0.15, 0.392, -0.149);
 
  nit.scale.set(0.1,0.1,0.1);
  var sd = nit.getObjectByName('fountain');

//   nit.position.set(scene.position);
      scene.add(result.scene);
      
    });
  






  
    render();
    function render() {
      
      stats.update();
      var delta = clock.getDelta();
      trackballControls.update(delta);
      requestAnimationFrame(render);
      renderer.render(scene, camera)
  
    }
    


    
      
// OrbitControls
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableRotate = true; 
controls.enablePan = false; 
controls.enableZoom = false; 
controls.minPolarAngle = Math.PI / 2; 
controls.maxPolarAngle = Math.PI / 2; 
controls.addEventListener('change', () => {
  // prevent camera from moving out of the XZ plane
 

});
    


camera.position.set(0,0,2.5);


// define the maximum radius
const maxRadius = 200000;
const minRadius = 0;

// animate function that checks the camera position each frame
function animate() {
  requestAnimationFrame(animate);

  // calculate the distance from the camera to the origin
  const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

  
  if (distance > maxRadius) {
    const direction = new THREE.Vector3().subVectors(camera.position, new THREE.Vector3(0, 0, 0)).normalize();
    const newPos = new THREE.Vector3().addVectors(new THREE.Vector3(0, 0, 0), direction.multiplyScalar(maxRadius));
    camera.position.copy(newPos);
  }
  if (distance < minRadius) {
    const direction = new THREE.Vector3().subVectors(camera.position, new THREE.Vector3(0, 0, 0)).normalize();
    const newPos = new THREE.Vector3().addVectors(new THREE.Vector3(0, 0, 0), direction.multiplyScalar(minRadius));
    camera.position.copy(newPos);
  }

  // render 
  renderer.render(scene, camera);
}

animate();
//link

function onObjectClick(event) {
  event.preventDefault();
  controls.enabled = false;
  const mouse = new THREE.Vector2();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([nit.getObjectByName('nitap_logo')], true);
  if (intersects.length > 0) {
    
    window.location.href = 'https://www.google.com';
  }
  
  
  controls.enabled = true;
}

renderer.domElement.addEventListener('click', onObjectClick, false);
console.log(scene);








 }
  
  
  
  
  
  
  
  
  
  

    
    
    
    
    
    
    
    
    
  