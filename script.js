// document.querySelector('a-scene').object3D;
// document.querySelector('a-entity').sceneEl.object3D;
// AFRAME.registerComponent('pointlight', {
//     init: function () {
//         this.el.setObject3D('light', new THREE.PointLight());
//     }
// });
//*////
// require('aframe');
// require('aframe-text-geometry-component');

// var fontJson = require('cypher.json');
// var el = document.createElement('a-entity');
// el.setAttribute('text', { font: fontJson });

window.onload = () => {

    // first get current user location
    return navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;

        document.querySelector('a-entity').setAttribute('text', `value: lattitude: ${latitude}, longitude ${longitude}; color: #BBB`);
        console.log(Math.round((latitude) * 10000) / 10000)
        console.log(Math.round((longitude) * 10000) / 10000)
        if (Math.round((latitude) * 10000) / 10000 == 48.8628 && Math.round((longitude) * 10000) / 10000 == 2.4005) {
            alert('youpi')
        }

    })
};


//     // Show a map centered at latitude / longitude.
// });
