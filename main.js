    
//gh-tb ui-autocomplete-input

//for (let el of document.getElementsByClassName("cancel")) el.onclick = function() {back_to_main()};

    var search = document.getElementsByClassName("gh-tb ui-autocomplete-input")[0].value.toLowerCase().replaceAll(" ","");

    if (search.includes("logicboard") || search.includes("ram") || search.includes("screen") || search.includes("replacement")){
        
    }

    else{
        var elements = document.getElementsByClassName("s-item__info clearfix");
        var arr = [].slice.call(elements);
        for (let i = 1; i< arr.length; i++) {
            element = elements[i].getElementsByClassName("s-item__title")[0];
            
            let x = str_to_price(element.textContent);
            
            if (x != 0)
            {
                let price = x[0];
                let parts = x[1];
                
                var parent = element.parentElement.parentElement;
                parent.insertAdjacentHTML( 'afterbegin', '<p id="partGuide">aprox cost of parts:<br>' + parts +'</p>' );
                parent.insertAdjacentHTML( 'afterbegin', '<p id="priceGuide">aprox refurbished price: £'+ price.toString() + '\n</p>' );
                
                
            }
    
    }
    }
    

