
const analyse = document.getElementById('analyserStock')

analyse.addEventListener('click', function() {

    let stockPrice = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value
    let todaysStock = document.getElementById('currentPrice').value

    let error = document.getElementById('error')
    
    if(stockPrice == ''){
        error.innerHTML='Please Enter the Stock Price Value'
    }else if(quantity == ''){
        error.innerHTML='Please Enter the Quantity of Shares Brought'
    }else if(todaysStock == ''){
        error.innerHTML="Please Enter Today's stock price for the Stock"
    }
    else{

    error.innerHTML=" "
    let stockDisplay = document.getElementById('stockInput')
    let quanityDisplay = document.getElementById('quanityInput')
    let todaysDisplay = document.getElementById('todaysInput')

    stockDisplay.textContent = `The Stock Price When you Brought the Stock : ${stockPrice}`;
    quanityDisplay.textContent = `The Quantity of Share Brought : ${quantity}`;
    todaysDisplay.textContent = `Today's Stock Price for the Stock Brought: ${todaysStock}`;

    value1 = stockPrice*quantity
    value2 = quantity*todaysStock

    absolute = value2 - value1
    percentage = Math.round(((value2 - value1)/value1)*100)

    let absoluteInput = document.getElementById('absoluteValueInput')
    let percentInput = document.getElementById('percentValueInput')
    let comment = document.getElementById('comment')
    let resultBlock = document.getElementById('result')
    let heading = document.getElementById('title2')


    resultBlock.setAttribute('class', 'animate__animated animate__fadeIn animate__delay-0.7s')
    heading.innerHTML = 'Analysis'

    if(absolute && percentage > 0){
        absoluteInput.innerHTML = "Absloute Profit: " +'<b>'+ absolute;
        percentInput.innerHTML = "Percentage of Profit: "+ '<b>' + percentage + '%';
        comment.innerHTML = 'Congratulations!! You are in Profit <br> <br>' + ' <i class="far fa-laugh-beam"></i>'
        resultBlock.style.padding = '50px';
        resultBlock.style.backgroundColor= '#0DCD44'
    }else{
        absoluteInput.innerHTML = "Absloute Loss: "+'<b>' +Math.abs(absolute)+'</b>'
        percentInput.innerHTML = "Percentage of Loss: " +'<b>'+ Math.abs(percentage) + '%'
        comment.innerHTML = 'Ooops, Unfortunately You are in Loss  <br> <br>' +  ' <i class="fas fa-sad-tear"></i>'
        resultBlock.style.padding = '50px';
        resultBlock.style.backgroundColor= '#ff943b'
    }
}
})
