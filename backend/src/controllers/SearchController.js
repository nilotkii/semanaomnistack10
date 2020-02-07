const Dev = require("../models/Dev");

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const {latitude, longitude, techs} = request.query;
        
        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);
        // busca todos devs em 10km
        const devs = await Dev.find({
            techs: {
               $in: techsArray, 
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,      
                },
            },
        });
        // filtrar por techs
        return response.json({devs});
    }
}