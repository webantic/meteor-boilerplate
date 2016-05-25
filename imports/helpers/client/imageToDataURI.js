export default function(file, callback) {
	var reader = new FileReader();
	reader.onload = (e) => {
		callback(e.target.result);
	}
	reader.readAsDataURL(file);
};