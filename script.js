//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true); //true refers to Asynchronous.  If there's an error the flow will continue

//send the request
request.send();

//load the response
request.onload = function(){
    let data = JSON.parse(this.response);
    for (let countries in data)
    {
        console.log('Country Name: '+','+ data[countries].name+' Country Flag URL: '+data[countries].flag);
    }
    //console.log(data[0].flag);
}
