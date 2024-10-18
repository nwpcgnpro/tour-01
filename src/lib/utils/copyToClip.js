function copyToClip(text) {
	// const text = "Example text to appear on clipboard";
	return navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copying to clipboard was successful!', text.length)
		},
		function (err) {
			console.error('Async: Could not copy text: ', err)
		}
	)
}
export default copyToClip
