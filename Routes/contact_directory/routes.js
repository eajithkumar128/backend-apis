var contact_list =  require("../../contact_list");

module.exports = function(app){

    app.get('/contact_list', function(req, res){
        res.send({ message: "fetched contact details", val: contact_list })
    });
}
