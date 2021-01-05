"use strict";


// idName elementas kuriame bus ideti elementai su tagName 
function populateCart(idName, tagName, limit) {
    fetch(`https://simutis.dev/api/generate-shopping-cart?${limit ? `limit=${limit}` : ''}`)
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById(idName);
            data.forEach((item) => {

                //______________________
                const tableRow = document.createElement('tr');
                const elementName = document.createElement(tagName);
                const elementPrice = document.createElement(tagName);
                const elementVegan = document.createElement(tagName);
                elementName.className = "name";
                elementPrice.className = "price";
                elementVegan.className = "vegan";
                elementName.innerText = item.name;
                elementPrice.innerText = item.price;
                elementVegan.innerText = item.vegan ? "Yes" : "No";
                tableRow.appendChild(elementName);
                tableRow.appendChild(elementPrice);
                tableRow.appendChild(elementVegan);
                container.appendChild(tableRow);
                //______________________
            });
        })
}

populateCart('container', 'td', 10)

/**
 * Sukurti lentele  [name price vegan]
 *                  [asdasd, 10.15, taip]
 * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
 */
