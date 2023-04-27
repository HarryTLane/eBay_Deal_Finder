    
    
function str_to_price(str)
{

    str = str.toLowerCase()
    if (str.includes("air")){
        if (str.includes("2010"))
        {
            return 90;
        }
        else if (str.includes("2011"))
        {
            return 140;
        }

        else if (str.includes("2012"))
        {
            return 150;
        }
        else if (str.includes("2013"))
        {
            return 165;
        }

        else if (str.includes("2014"))
        {
            return 200;
        }

        else if (str.includes("2015"))
        {
            return 240;
        }

        else if (str.includes("2016"))
        {
            return 300;
        }

        else if (str.includes("2017"))
        {
            return 370;
        }

        else if (str.includes("2018"))
        {
            return 490;
        }

        else if (str.includes("2019"))
        {
            return 550;
        }

        else if (str.includes("2020"))
        {
            if (str.includes("m1"))
            {
                return 1000;
            }
            else
            {
                return 600;
            }
        }

        else if (str.includes("2022"))
        {
            return 1100;
        }


        
    }

    else if (str.includes("pro"))
    {
        if (str.includes("2010"))
        {
            return 80;
        }

        else if (str.includes("2011"))
        {
            return 90;
        }

        else if (str.includes("2012"))
        {
            return 180;
        }

        else if (str.includes("2013"))
        {
            return 150;
        }

        else if (str.includes("2014"))
        {
            return 130;
        }

        else if (str.includes("2015"))
        {
            return 230;
        }

        else if (str.includes("2016"))
        {
            return 500;
        }

        else if (str.includes("2017"))
        {
            return 600;
        }

        else if (str.includes("2018"))
        {
            return 650;
        }

        else if (str.includes("2019"))
        {
            return 800;
        }

        else if (str.includes("2020"))
        {
            return 900;
        }


        else if (str.includes("2017"))
        {
            return 1400;
        }
        

        
        

    }

    return 0;
}


    var elements = document.getElementsByClassName("s-item__info clearfix");
    var arr = [].slice.call(elements);
    for (let i = 1; i< arr.length; i++) {
        element = elements[i].getElementsByClassName("s-item__title")[0];
        
        let x = str_to_price(element.textContent)

        if (x != 0)
        {
            var parent = element.parentElement.parentElement;
            parent.insertAdjacentHTML( 'afterbegin', '<p id="priceGuide">aprox refurbished price: £'+ x.toString() +'</p>' );
            
        }

}