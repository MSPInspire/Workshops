const quotes_lib = require('./get-quote');

module.exports = async function (context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');

    let quotes = new quotes_lib();
    let random_quote = quotes.getQuote();

    context.res.set('content-type', 'application/json')
    context.res = {
        code: 200,
        body: random_quote,
        headers : {
            "Content-Type":'application/json'
        }
    }
};