

function isDigit(char)
{
    
    if (char >= '0' && char <= '9') {
        return true;
    } else {
        return false;
    }
}



function get_25inch_price(str)
{

    str = str.replaceAll(" ","")
    str = str.toLowerCase()

    //hdd

    if (str.includes("250gb"))
    {
        return "2.5\" 250GB HDD: £7\n";
    }

    else if (str.includes("320gb"))
    {
        return "2.5\" 320GB HDD: £8\n";
    }

    else if (str.includes("500gb"))
    {
        return "2.5\" 500GB HDD: £10\n";
    }

    else if (str.includes("640gb"))
    {
        return "2.5\" 640GB HDD: £11\n";
    }

    else if (str.includes("750gb"))
    {
        return "2.5\" 750GB HDD: £13\n";
    }

    else if (str.includes("hdd"))
    {
        if (str.includes("1tb"))
        {
            return "2.5\" 1TB HDD: £22\n";
        }
    
        else if (str.includes("2tb"))
        {
            return "2.5\" 2TB HDD: £32\n";
        }
    
        else if (str.includes("3tb"))
        {
            return "2.5\" 3TB HDD: £39\n";
        }
    
        else if (str.includes("4tb"))
        {
            return "2.5\" 4TB HDD: £53\n";
        }
    
        else if (str.includes("5tb"))
        {
            return "2.5\" 5TB HDD: £60\n";
        }
    }


    //ssd

    else if (str.includes("128gb"))
    {
	return "2.5\" 128GB SSD: £15"
    }

    else if (str.includes("256gb"))
    {
	return "2.5\" 256GB SSD: £20"
    }

    else if (str.includes("512gb"))
    {
	return "2.5\" 512GB SSD: £30"
    }

    else if (str.includes("ssd"))
    {
        if (str.includes("1tb"))
        {
            return "2.5\" 1TB HDD: £50\n";
        }
    

    }

    return "";

}


function str_to_price(str)
{

    str = str.toLowerCase();
    var parts = "";

    if (str.includes("air")){
        if (str.includes("2010"))
        {
            parts += "Screen: £50\n"
            parts += get_25inch_price(str);
            return [90, parts];
        }
        else if (str.includes("2011"))
        {
            parts += "Screen: £50\n"
            parts += get_25inch_price(str);
            return [140, parts];
        }

        else if (str.includes("2012"))
        {
            parts += "Screen: £50\n"
            parts += get_25inch_price(str);
            return [150, parts];
        }
        else if (str.includes("2013"))
        {
            parts += "Screen: £60\n"
            parts += get_25inch_price(str);
            return [165, parts];
        }

        else if (str.includes("2014"))
        {
            parts += "Screen: £70\n"
            parts += get_25inch_price(str);
            return [200, parts];
        }

        else if (str.includes("2015"))
        {
            parts += "Screen: £70\n"
            parts += get_25inch_price(str);
            return [240, parts];
        }

        else if (str.includes("2016"))
        {
            parts += "Screen: £70\n"
            return [300, parts];
        }

        else if (str.includes("2017"))
        {
            parts += "Screen: £70\n"
            return [370, parts];
        }

        else if (str.includes("2018"))
        {
            parts += "Screen: £150\n"
            return [490, parts];
        }

        else if (str.includes("2019"))
        {
            parts += "Screen: £180\n"
            return [550, parts];
        }

        else if (str.includes("2020"))
        {
            if (str.includes("m1"))
            {
                parts += "Screen: £215\n"
                return [1000, parts];
            }
            else
            {
                parts += "Screen: £215\n"
                return [600, parts];
            }
        }

        else if (str.includes("2022"))
        {
            parts += "Screen: £350\n"
            return [1100, parts];
        }


        
    }

    else if (str.includes("pro"))
    {
        if (str.includes("2010"))
        {
            parts += get_25inch_price(str);
            return [80, parts];
        }

        else if (str.includes("2011"))
        {
            parts += get_25inch_price(str);
            return [90, parts];
        }

        else if (str.includes("2012"))
        {
            parts += get_25inch_price(str);
            return [180, parts];
        }

        else if (str.includes("2013"))
        {
            parts += get_25inch_price(str);
            return [150, parts];
        }

        else if (str.includes("2014"))
        {
            parts += get_25inch_price(str);
            return [130, parts];
        }

        else if (str.includes("2015"))
        {
            parts += get_25inch_price(str);
            return [230, parts];
        }

        else if (str.includes("2016"))
        {
            return [500, parts];
        }

        else if (str.includes("2017"))
        {
            return [600, parts];
        }

        else if (str.includes("2018"))
        {
            return [650, parts];
        }

        else if (str.includes("2019"))
        {
            return [800, parts];
        }

        else if (str.includes("2020"))
        {
            return [900, parts];
        }


        else if (str.includes("2017"))
        {
            return [1400, parts];
        }
        
    }

    return 0;
}


