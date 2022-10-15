
// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const body = document.querySelector(".main__wrapper-blue")

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)
	})
	function updateMe() {
		dx = clientX - cx
		dy = clientY - cy
		tiltx = dy / cy * 4
		tilty = dx / cx * 4
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 12
		// gsap.to('.blue-wrapper__animation-elipse', 1, { transform: `rotate3d( ${tiltx}, ${tilty}` })
		gsap.to('.elipse1', 1, { x: tilty, y: tiltx })
		gsap.to('.elipse2', 1, { x: tilty * 8, y: tiltx * 2 })
		gsap.to('.elipse3', 1, { x: tilty * 16, y: tiltx * 4 })
		gsap.to('.elipse4', 1, { x: tilty * 24, y: tiltx * 6 })
		gsap.to('.elipse5', 1, { x: tilty * 32, y: tiltx * 8 })
		gsap.to('.elipse6', 1, { x: tilty * 40, y: tiltx * 10})
	}
})
