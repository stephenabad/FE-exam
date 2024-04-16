var modalOtherCat = document.getElementById("mod-other-categories");
var mocBtn = document.getElementById("other-cat-mod-btn");
var mocCloseBtn = document.getElementById("mocCloseBtn");

mocBtn.onclick = function() {
    modalOtherCat.style.display = "block";
}

mocCloseBtn.onclick = function(){
    modalOtherCat.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modalOtherCat){
        modalOtherCat.style.display = "none";
    }
}

function generateOtherCategories(){
    const categoryDiv = document.getElementById("otherCategoryList");
    const otherCategories = [
        "Abuse (Child, Domestic, Sexual)", "Agencies & Administration", "Automobile (DUI, Crimes, Speeding)",
        "Automobiles (Accidents, Insurance)", "Banking (Business, Consumer)", "Bars & Restaurants",
        "Business Formation & Dissolution", "Children (Adoption, Custody, Support)", "Class Actions (Bad Drugs, Products)",
        "Commercial Law and Contracts", "Commercial Real Estate", "Constitutional Law", "Construction (Disputes, Liens)",
        "Categories Item Here", "Vivamus scelerisque tellus", "Phasellus sed", "Curabitur eu", "Proin sodales",
        "Vestibulum sit amet", "Etiam eleifend", "Cras malesuada nisi", "Aenean", "Nunc eget augue", 
        "Vivamus scelerisque tellus", "Phasellus sed", "Curabitur eu", "Proin sodales",
        "Vestibulum sit amet", "Etiam eleifend", "Cras malesuada nisi", "Aenean", "Nunc eget augue",
        "Vestibulum sit amet", "Etiam eleifend", "Cras malesuada nisi", "Aenean", "Nunc eget augue", 
        "Vivamus scelerisque tellus", "Phasellus sed", "Curabitur eu", "Proin sodales",
        "Vestibulum sit amet", "Etiam eleifend", "Cras malesuada nisi", "Aenean", "Nunc eget augue"
    ];
    for (var i = 0; i < otherCategories.length; i++){
        var newCategory = document.createElement('li');
        newCategory.append(otherCategories[i]);
        categoryDiv.appendChild(newCategory);
    }
}