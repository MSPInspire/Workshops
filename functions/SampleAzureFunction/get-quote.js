const fs = require('fs');

class Quote{
    
    constructor(){
        this.getRandomNumber = (maxNumber) => {
            return Math.floor(Math.random() * Math.floor(maxNumber));
        }
    };


    getQuote(){
        let quotes_binary = fs.readFileSync("SampleAzureFunction/quotes.json");
        let quotes_json = JSON.parse(quotes_binary);
        let random_number = this.getRandomNumber(quotes_json.length);
        return quotes_json[random_number];
    }

    
}

module.exports = Quote;