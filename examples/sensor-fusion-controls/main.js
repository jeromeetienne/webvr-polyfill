require('./config.js')
window.FusionPoseSensor = require('./../../src/sensor-fusion/fusion-pose-sensor.js');

window.poseSensor = new FusionPoseSensor();

var poseSensor = new FusionPoseSensor();

requestAnimationFrame(function render(){
	requestAnimationFrame(render)

	console.log('position', poseSensor.getPosition())
	console.log('orientation', poseSensor.getOrientation())
})
