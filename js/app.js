var modalOtherCat = document.getElementById("mod-other-categories");
var mocBtn = document.getElementById("other-cat-mod-btn");
var mocCloseBtn = document.getElementById("mocCloseBtn");

var modalReadReview = document.getElementById("mod-review-details");
var rdCloseBtn = document.getElementById("rdCloseBtn");

mocBtn.onclick = function() {
    modalOtherCat.style.display = "block";
}

mocCloseBtn.onclick = function(){
    modalOtherCat.style.display = "none";
}

rdCloseBtn.onclick = function(){
    modalReadReview.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modalOtherCat){
        modalOtherCat.style.display = "none";
    } else if (event.target == modalReadReview){
        modalReadReview.style.display = "none";
    }
}

function generateCategories(){
    const categoryDiv = document.getElementById("otherCategoryList");
    const otherCategoriesArr = [
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
    for (var i = 0; i < otherCategoriesArr.length; i++){
        var newCategory = document.createElement('li');
        newCategory.append(otherCategoriesArr[i]);
        categoryDiv.appendChild(newCategory);
    }

    const legalCategoryElem = document.getElementById("legalCategories");
    const legalCategoriesArr = [
        "Family", "Criminal Defense", "Business", "Personal Injury", "Bankruptcy & Finances",
        "Products & Services", "Employement", "Real Estate", "Immigration", "Wills, Trusts & Estates",
        "Government", "Intellectual Property"
    ]

    for (var i = 0; i < legalCategoriesArr.length; i++){
        var newCategory = document.createElement('option');
        newCategory.className = "selected-items";
        newCategory.append(legalCategoriesArr[i]);
        legalCategoryElem.appendChild(newCategory);
    }
}

function readReview(lawyer) {
    if(lawyer === 'Mitchell'){
        document.getElementById('lawyerImage').src = "./assets/images/Mitchell.png";
        document.getElementById('reviewLawyerName').innerText = 'Mitchell M.';
        document.getElementById('reviewLawyerLoc').innerText = 'Cherry Hill, NJ';
        document.getElementById('reviewLawyerPrac').innerText = 'Family Law';
    } else if (lawyer === 'Joel'){
        document.getElementById('lawyerImage').src = "./assets/images/Joel.png";
        document.getElementById('reviewLawyerName').innerText = 'Joel C.';
        document.getElementById('reviewLawyerLoc').innerText = 'Little Rock, AK';
        document.getElementById('reviewLawyerPrac').innerText = 'Job & Employment Law';
    } else if (lawyer === 'Brigida'){
        document.getElementById('lawyerImage').src = "./assets/images/Brigida.png";
        document.getElementById('reviewLawyerName').innerText = 'Brigida R.';
        document.getElementById('reviewLawyerLoc').innerText = 'Dallas, TX';
        document.getElementById('reviewLawyerPrac').innerText = 'Family Law';
    }
    

    modalReadReview.style.display = "block";
}