
var active_class = "mainPage";

function show_class(c){
    for (let el of document.getElementsByClassName(c)) el.style.display = '';
    
}

function hide_class(c){
    for (let el of document.getElementsByClassName(c)) el.style.display = 'none';
}

function back_to_main(){
    replace_class(active_class, "mainPage");
    toMainDisplay();
}

function replace_class(c1, c2){
    active_class = c2;
    hide_class(c1)
    show_class(c2)
    
}

function part_finder_action(){
    replace_class("mainPage", "partFinder");
}

function serial_lookup_action(){
    window.open("https://everymac.com/ultimate-mac-lookup/");
}

function charger_assistant_action(){
    replace_class("mainPage", "chargerAssistant");
}

function replacement_guide_action(){
    replace_class("mainPage", "replacementGuide");
}

function part_finder_lookup_action(){
    let e = document.getElementById("modelType");
    var modelType = e.options[e.selectedIndex].text;
    
    e = document.getElementById("year");
    var year = e.value;
    
    e = document.getElementById("screenSize");
    var screenSize = e.value;
    

    e = document.getElementById("part");
    var part = e.options[e.selectedIndex].text;


    let s = modelType + " " + year + " " + screenSize + " " + part;
    s = s.replaceAll(" ", "+");


    let url = "https://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=" + s;

    window.open(url);

}

function charger_assistant_submit_action(){
    
    


    let e = document.getElementById("modelTypeC");
    var modelType = e.options[e.selectedIndex].text;
    
    e = document.getElementById("yearC");
    var year = e.value;
    
    e = document.getElementById("screenSizeC");
    var screenSize = e.value;
    

    document.getElementById("ChargerType").textContent = matchCharger(modelType, year, screenSize);

}

function replacement_guide_lookup_action(){



    let e = document.getElementById("modelTypeR");
    var modelType = e.options[e.selectedIndex].text;
    
    e = document.getElementById("yearR");
    var year = e.value;
    
    e = document.getElementById("screenSizeR");
    var screenSize = e.value;
    

    e = document.getElementById("partR");
    var part = e.options[e.selectedIndex].text;


    let s = modelType + " " + year + " " + screenSize + " " + part + " Replacement";
    s = s.replaceAll(" ", "+");


    let url = "https://www.youtube.com/results?search_query=" + s;

    window.open(url);
}