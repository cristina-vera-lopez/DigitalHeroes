const fs = require('fs'); 
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
	index: function (req, res) {
		res.send(heroes)
	},
	heroe: function (req, res) {
		let id = req.params.idHeroe
		let heroe = heroes.filter((heroe) => {
			return heroe.id == id
		});
		let heroeSeleccionado = heroe[0];
		if (heroeSeleccionado == undefined) {
			res.send('Este heroe no fue encontrado, pruebe con otro número de Id')
		} else {
			res.send('Hola, mi nombre es' + heroeSeleccionado.nombre + 'y soy ' + heroeSeleccionado.profesion)
		}
	},
	bio: function (req, res) {
		let id = req.params.id;
		let ok = req.params.ok;
		let heroe = heroes.filter((heroe) => {
			return heroe.id == id
		});
		let heroeSeleccionado = heroe[0];
		if (heroeSeleccionado == undefined) {
			return res.send('No encontramos un héroe para mostrarte en su biografía');
		}
		if (ok == 'ok') {
			return res.send(heroeSeleccionado.nombre + ':' + heroeSeleccionado.resenia)
		} else {
			return res.send(heroeSeleccionado.nombre + '. Lamento en que no desees saber más de mi: ')
		}
	}
}
