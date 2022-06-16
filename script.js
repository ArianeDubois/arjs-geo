document.querySelector('a-scene').object3D;
document.querySelector('a-entity').sceneEl.object3D;
AFRAME.registerComponent('pointlight', {
    init: function () {
        this.el.setObject3D('light', new THREE.PointLight());
    }
});
