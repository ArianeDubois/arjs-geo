// window.onload = () => {
//     let places = staticLoadPlaces();
//     renderPlaces(places);
// };

// function staticLoadPlaces() {
//     return [
//         {
//             location: {
//                 lat: 48.8628025474,
//                 lng: 2.4004587061,
//             }
//         },
//     ];
// }
// var arToolkitSource = new THREEx.ArToolkitSource({

//     sourceType: 'webcam',
// })


AFRAME.registerComponent('cypher-mesh', {
    init: function () {
        var materials = [new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            metalness: 1, roughness: 0
        }), new THREE.MeshBasicMaterial({
            color: 0x000000,
        })]

        this.el.addEventListener("loaded", e => {
            this.material = this.el.getObject3D('mesh').material = materials
        });
    },
})
