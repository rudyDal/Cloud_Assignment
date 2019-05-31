module.exports = {


    friendlyName: 'BMI',


    description: 'Calculate BMI.',


    inputs: {
        height: {
            type: 'string',
            description: 'Height of user',
            required: true
        },
        weight: {
            type: 'string',
            description: 'Weight of the User',
            required: true
        },

    },


    exits: {
        success: {
            statusCode: 200,
            description: 'BMI'
        },
        err: {
            statusCode: 400,
            description : 'Error in inputs'
        },
    },


    fn: async function (inputs, exits) {
        var height = inputs.height;
        var weight = inputs.weight;

        var message = "";

        if(height < 0 || weight <0){
            message = "Height and Weight should have a positive value.";
            return exits.err({bmi: 0, message: message});
        }else{
            var bmi = ((weight)/(height*height));
            message = "BMI successfully calculated."
            return exits.success({bmi: bmi, message: message});
        
        }

        
    }


};
