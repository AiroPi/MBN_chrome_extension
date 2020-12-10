if (document.location.href !== "https://www.monbureaunumerique.fr/") {
    document.querySelector("#bouton_connexion").click();
} else {
    document.querySelector("body > div.header > div.dropdown.dropdown--inverted.header__portals.dropdown--right.js-dropdown > button").click()
    document.querySelector("body > div.header > div.dropdown.dropdown--inverted.header__portals.dropdown--right.js-dropdown.dropdown--is-opened > div > ul > li:nth-child(1) > a").click();    
}
