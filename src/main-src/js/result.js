
function init() {
 
    // document.addEventListener('mousedown', onDocumentMouseDown, false);
    
      // document.addEventListener('mousemove', onDocumentMouseMove, false); 
      var stats = initStats();
      var renderer = initRenderer();
      var camera = initCamera();
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
      // scene.background= texture;
  
  
  
  
  
  
  
  
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
      trackballControls.rotateSpeed = 0;
      trackballControls.zoomSpeed =1;
      trackballControls.panSpeed = 0;
      trackballControls.noZoom = false;
      trackballControls.noPan = false;
      trackballControls.staticMoving = false;
      trackballControls.dynamicDampingFactor = 1;
      trackballControls.keys = [65, 83, 68];
      var clock = new THREE.Clock();
    
     
    
      var nit;
      var logo;
      var loader = new THREE.ColladaLoader();
      loader.load('../../assets/models/nitap/NITAPl3.dae', function (result) {
    console.log(result.scene);
    nit = result.scene;
    // console.log(nit.position);
  
    logo = nit.getObjectByName('nit logo');
    // logo.name ='sd';
    // console.log(nit);
    // logo.translateX(0.16);
  //  var k = nit.getObjectByName('pilalrs');
  //  console.log(k);
  //  k.fog = false;
  //  k.castShadow = false;
  // //  k.material.transparent = false;
  //  k.material.opacity = 10;
  //  k.translateY(2);
  //  k.material = 
  // k.scale.set(0.5,0.5,0.5);
    render1();
    function render1() {
    //  logo.rotation.y +=0.1* Math.PI / 23;
  
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
  
  
  
    nit.scale.set(0.1,0.1,0.1);
  //   nit.position.set(scene.position);
        scene.add(result.scene);
        result.scene.rotateZ(Math.PI);
        nit.rotation.z = Math.PI;
       
        
        result.scene.translateZ(-5);
        result.scene.translateY(4);
        result.scene.translateX(-0.3);
        nit.position.set(0,0,0);
       
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
   
  //   //  camera.position.set(897987, 0, 10000);
  });
      
  
  
  camera.position.set(0,0,2.5);
  
  
  // define the maximum radius
  const maxRadius = 87498314;
  const minRadius = 0;
  
  // animate function that checks the camera position each frame
  function animate() {
    requestAnimationFrame(animate);
  
    // calculate the distance from the camera to the origin
    const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
  
    // if the distance is greater than the max radius, move the camera back to the max radius
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
  
    // render the scene
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
    const intersects = raycaster.intersectObjects([nit.getObjectByName('nit logo')], true);
    if (intersects.length > 0) {
      
      window.location.href = 'https://www.google.com';
    }
    
    
    controls.enabled = true;
  }
  
  renderer.domElement.addEventListener('click', onObjectClick, false);
  console.log(scene);
  
  
  
  
  
  
  
  
   }
    
    
    
    
    
    
    
    
    
    
  