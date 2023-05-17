
function init() {
    var scene = new THREE.Scene();
    scene.visible = false;
    var load = new THREE.LoadingManager();
      // document.addEventListener('mousedown', onDocumentMouseDown, false);
      
        // document.addEventListener('mousemove', onDocumentMouseMove, false); 
        var stats = initStats();
        var renderer = initRenderer();
        var camera = initCamera();
        
        var lig =new THREE.AmbientLight(0xffffff);
        scene.add(lig);
        lig.intensity = 0.9;
    
    
        const loader1 = new THREE.CubeTextureLoader();
        const texture = loader1.load([
            '../../assets/models/nitap/stars3.png',
            '../../assets/models/nitap/stars3.png',
            '../../assets/models/nitap/stars3.png',
            '../../assets/models/nitap/stars3.png',
            '../../assets/models/nitap/stars3.png',
            '../../assets/models/nitap/stars3.png',
        ]);
        scene.background= texture;
       ///axes
        // var axes = new THREE.AxisHelper(100);
        // scene.add(axes);
    
    
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
        var logo1;
        var logo2;
        var logo3;
        var logo4;
        var loader = new THREE.ColladaLoader();
        
        loader.load('../../assets/models/nitap/lightmod.dae', function (result) {
      console.log(result.scene);
      
      nit = result.scene;
      
      
    
      logo = nit.getObjectByName('nitap_logo');
      logo1 = nit.getObjectByName('nit logo');
    logo1.visible = false;
    // logo2 = nit.getObjectByName('Light');
    // // nit.remove(logo2);
    // logo2.intensity =0.6;
    
    // logo3 = nit.getObjectByName('Light.002');
    // // nit.remove(logo3);//ref
    // logo3.intensity =0.3;
    // logo4 = nit.getObjectByName('Light.001');
    // // nit.remove(logo4);
    // logo2.intensity =0.6;
      // logo.translateX(0.16);
    
    
    
    
    
      render1();
      function render1() {
       logo.rotation.y +=0.1* Math.PI / 18;
    
      requestAnimationFrame(render1);
          renderer.render(scene, camera)}
    
          
    
      nit.children.forEach(function (child) {
        if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        } else {
          // remove any lighting sources from the model
          // console.log(child);
          // nit.remove(child);
        }
      });
    
    logo.receiveShadow =false;
    logo.castShadow =false;
    console.log(logo);
    // logo.
      nit.scale.set(0.1,0.1,0.1);
    //   nit.position.set(scene.position);
          scene.add(result.scene);
          result.scene.rotateZ(Math.PI);
          nit.rotation.z = -Math.PI/2+Math.PI/19;
         
          
          // result.scene.translateZ(-5);
          // result.scene.translateY(4);
          // result.scene.translateX(-0.3);
          nit.position.set(-0.16,0.32,-0.1);
         
        },onProgress);
    var par;
        function onProgress(xhr) {
          if (xhr.lengthComputable) {
            per = xhr.loaded / xhr.total * 100;
            document.getElementById('line').style.width = per+'%';
           
          }
        }
    
        document.getElementById('mjs').style.display = 'block';
      
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
    const maxRadius = 2.8;
    const minRadius = 0.5;
    
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
      const intersects = raycaster.intersectObjects([nit.getObjectByName('nitap_logo' )], true);
      if (intersects.length > 0) {
        
        window.location.href = 'http://127.0.0.1:5502/src/main-src/login_main.html';
      }
      
      
      controls.enabled = true;
    }
    
    renderer.domElement.addEventListener('click', onObjectClick, false);
    
    
    var event = new Event('modelLoaded');
    document.addEventListener('modelLoaded', function() {
      document.getElementById('mjs').style.visibility = 'visible';
      document.getElementById('bod').style.visibility = 'hidden';
      
      
      
    });
    
    
    loader.onLoadComplete = document.dispatchEvent(event) ;
    
    
    
    
    
     }
      
      
      
      
      
      
      
      
      
      
    