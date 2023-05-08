
const mainWidth = 300;
const mainHeight = 400;

function toMainDisplay(){
    document.body.style.minHeight = mainHeight.toString() + "px";
    document.body.style.maxHeight = "100%";
    document.body.style.minWidth = mainHeight.toString() + "px";
    document.body.style.maxWidth = "100%";
}

document.getElementById("PartFinder").onclick = function() {part_finder_action()};
document.getElementById("SerialLookup").onclick = function() {serial_lookup_action()};
document.getElementById("ChargerAssistant").onclick = function() {charger_assistant_action()};
document.getElementById("ReplacementGuide").onclick = function() {replacement_guide_action()};
document.getElementById("PartFinderSubmit").onclick = function() {part_finder_lookup_action()};
document.getElementById("ChargerAssistantSubmit").onclick = function() {charger_assistant_submit_action()};
document.getElementById("ReplacementGuideSubmit").onclick = function() {replacement_guide_lookup_action()};
for (let el of document.getElementsByClassName("cancel")) el.onclick = function() {back_to_main()};
hide_class("partFinder");
hide_class("replacementGuide");
hide_class("chargerAssistant");

toMainDisplay();