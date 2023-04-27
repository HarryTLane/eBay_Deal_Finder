    



    var elements = document.getElementsByClassName("s-item__info clearfix");
    var arr = [].slice.call(elements);
    for (let i = 1; i< arr.length; i++) {
        element = elements[i].getElementsByClassName("s-item__title")[0];
        
        let x = str_to_price(element.textContent);
        
        if (x != 0)
        {
            let price = x[0];
            let parts = x[1];
            console.log(get_25inch_price(element.textContent));
            var parent = element.parentElement.parentElement;
            parent.insertAdjacentHTML( 'afterbegin', '<p id="partGuide">aprox cost of parts:<br>' + parts +'</p>' );
            parent.insertAdjacentHTML( 'afterbegin', '<p id="priceGuide">aprox refurbished price: £'+ price.toString() + '\n</p>' );
            
            
        }

}