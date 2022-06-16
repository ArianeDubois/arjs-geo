// document.querySelector('a-scene').object3D;
// document.querySelector('a-entity').sceneEl.object3D;
// AFRAME.registerComponent('pointlight', {
//     init: function () {
//         this.el.setObject3D('light', new THREE.PointLight());
//     }
// });

require('aframe');
require('aframe-text-geometry-component');

var fontJson = require('cypher.json');
var el = document.createElement('a-entity');
el.setAttribute('text', { font: fontJson });
