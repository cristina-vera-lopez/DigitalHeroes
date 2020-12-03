module.exports = {
    index: (req, res) => {
        res.send(' <br> Ni superman, Iron Mam o La Mujer Maravilla son tan importantes como las y los Heroes de carne  y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!')
    },
    creditos: (req,res) => {
        res.send('Página creada por la comisión 5')
    },
    error: (req,res) =>{
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')
    }
}
