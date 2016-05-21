import { SimpleRest } from 'meteor/simple:rest';

SimpleRest.configure({
	methodUrlPrefix: 'api/',
	publicationUrlPrefix: 'api/'
});
