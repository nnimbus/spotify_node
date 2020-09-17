
var controller = {
    test: function(rew,res){
        return res.status(200).send({
            message: 'Funcion de controlador cargada'
        })
    }
};
module.exports = controller;