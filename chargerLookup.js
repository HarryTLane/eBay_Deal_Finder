
function matchCharger(modelType, year, screenSize){
    screenSize = parseInt(screenSize);
    year = parseInt(year)

    

    if (modelType === "Macbook Air"){
        
        if (year >= 2018){
            return "30W USB-C";
        }

        else if (year >= 2012){
            return "45W MagSafe 2";
        }

        else if (year >= 2008 && year <= 2011 && screenSize === 13){
            return "45W MagSafe 1";
        }

        else if (year >= 2010 && year <= 2011 && screenSize === 11){
            return "45W MagSafe 1"
        }

    }
    else if (modelType === "Macbook Pro"){

        if (screenSize === 16 && year >= 2021){
            return "140W USB-C Power Adapter and USB-C to MagSafe 3 Cable";
        }

        else if (screenSize === 16 && year >= 2019){
            return "96W USB-C";
        }

        else if (screenSize === 13 && year >= 2016){
            return "61W USB-C";
        }

        else if (screenSize === 15 && year >= 2016){
            return "87W USB-C";
        }

        else if (screenSize === 15 && year >= 2012 && year <= 2015){
            return "85W MagSafe 2";
        }

        else if (screenSize === 13 && year >= 2013 && year <= 2015){
            return "60W MagSafe 2";
        }

        else if (screenSize === 13 && year === 2012){
            return "60W MagSafe 1 or 2";
        }

        else if (screenSize === 13 && year >= 2010 && year <= 2011){
            return "60W MagSafe 1";
        }

        else if (screenSize === 15 && year >= 2010 && year <= 2012){
            return "85W MagSafe 1";
        }

        else if (screenSize === 17 && year >= 2010 && year <= 2011){
            return "85W MagSafe 1";
        }

        else if (screenSize === 15 && year >= 2006 && year <= 2009){
            return "85W MagSafe 1";
        }

        else if (screenSize === 17 && year >= 2006 && year <= 2009){
            return "85W MagSafe 1";
        }

        else if (screenSize === 13 && year >= 2006 && year <= 2009){
            return "60W MagSafe 1";
        }
    }

    else if (modelType === "Macbook"){

        if (year >= 2015){
            return "29W or 30W USB-C";
        }

        else if (year >= 2009 && year <= 2010){
            return "60W MagSafe 1";
        }

        else if (year >= 2006 && year <= 2008){
            return "60W MagSafe 1";
        }

    }

    return "Unkown Charger";
}

