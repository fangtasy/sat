<template>
 <canvas id="canvas-three">您的浏览器不支持canvas</canvas>
</template>

<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue'
onMounted(() => {
  initScene();
})

const initScene = () => {
  const canvas = document.getElementById('canvas-three');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.set(0,20,100)
  scene.add(camera)
  const renderer = new THREE.WebGLRenderer({canvas}); // antialias:true
  renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 10, 10, 10 );
  const material = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
  const cube = new THREE.Mesh( geometry, material );
  cube.rotation.y += 3;
  cube.rotation.x += 1;
  scene.add( cube );

  scene.add(new THREE.AmbientLight(0xadadad))
  const pointLight = new THREE.PointLight(0xf8f8f8, 1);
  camera.add(pointLight);

      // 添加卫星
      const satelliteGeometry = new THREE.SphereGeometry(4, 32, 32);
      const satelliteMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      satellite.position.y = 20
      // satellite.position.x = -20
      scene.add(satellite);

      // 添加信号接收设备
      const signalReceiverGeometry = new THREE.BoxGeometry(4, 2, 2);
      const signalReceiverMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const signalReceiver = new THREE.Mesh(signalReceiverGeometry, signalReceiverMaterial);
      signalReceiver.position.x = 10;
      scene.add(signalReceiver);

      // 添加机房交换机
      const switchGeometry = new THREE.BoxGeometry(4, 4, 4);
      const switchMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
      const switchMesh = new THREE.Mesh(switchGeometry, switchMaterial);
      switchMesh.position.x = -10;
      scene.add(switchMesh);

      // 添加路由器
      const routerGeometry = new THREE.BoxGeometry(2, 2, 2);
      const routerMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff });
      const router = new THREE.Mesh(routerGeometry, routerMaterial);
      router.position.z = 10;
      scene.add(router);

      // 添加信号传递线
      const signalLineGeometry = new THREE.BufferGeometry().setFromPoints([satellite.position, signalReceiver.position]);
      const signalLineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const signalLine = new THREE.Line(signalLineGeometry, signalLineMaterial);
      scene.add(signalLine);

      const signalLine2Geometry = new THREE.BufferGeometry().setFromPoints([signalReceiver.position, switchMesh.position]);
      const signalLine2Material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const signalLine2 = new THREE.Line(signalLine2Geometry, signalLine2Material);
      scene.add(signalLine2);

      const signalLine3Geometry = new THREE.BufferGeometry().setFromPoints([switchMesh.position, router.position]);
      const signalLine3Material = new THREE.LineBasicMaterial({ color: 0xff00ff });
      const signalLine3 = new THREE.Line(signalLine3Geometry, signalLine3Material);
      scene.add(signalLine3);

  const start = () => {
    // controls.update();
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(start);
  }

  start();

  window.addEventListener('resize', ()=> {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
} 

</script>

<style>
.cube-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/* styles.css */
.cube {
  position: relative;
  transform-style: preserve-3d; /* 启用 3D 变换 */
  perspective: 800px; /* 透视效果：增加此值会增加立方体的弯曲程度 */
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

</style>
