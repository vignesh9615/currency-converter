fetch("https://api.currencyscoop.com/v1/latest?api_key=6eee243944205f2e1047b97107720fba")
.then(function (resp) {
    return resp.json();
  })
  .then(function (result) {
    displayData(result);
  })
  .catch(function (error) {
    console.log(error);
  });


   function displayData(data) {
    const from_currencys = document.getElementById('from_currency');
    const from_ammounts = document.getElementById('from_ammount');
    const to_currencys = document.getElementById('to_currency');
    const to_ammounts = document.getElementById('to_ammount');
    const rates = document.getElementById('rate');
    const exchange = document.getElementById('exchange');
    
    
    
    /*from_currencys.addEventListener('change', calculate);
    from_ammounts.addEventListener('input', calculate);
    to_currencys.addEventListener('change', calculate);
    to_ammounts.addEventListener('input', calculate);
    
    exchange.addEventListener('click', () => {
        const temp = from_currencys.value;
        from_currencys.value = to_currencys.value;
        to_currencys.value = temp;
        calculate();
       });*/
       data.forEach((values) => {
           console.log(object);
       })
   
      }
   /*function calculate() {
    const from_currency = from_currencys.value;
    const to_currency = to_currencys.value;}*/

