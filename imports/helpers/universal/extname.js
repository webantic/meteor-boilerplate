export default function(string) {
	var index = string.lastIndexOf('.');
	var ext = string.substring(index, string.length);

	return (index === -1) ? '' : ext;
}