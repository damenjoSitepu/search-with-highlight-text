// Ambil search
const search = document.getElementById("search");

search.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get value input 
    let inputValue = document.getElementById("input");

    // Get All Html Elements
    let allElements = document.querySelectorAll("*:not(script,form,button,input,html,head,meta,title,body,hr)");

    // Foreach
    let convertAllElementsToArray = Array.from(allElements);

    // Find The Highlight text that written in the search box immediately
    convertAllElementsToArray.forEach((data) => {
        const regexSearch = new RegExp(`${inputValue.value}`, "ig");

        const dataSearch = data.textContent;

        data.innerHTML = dataSearch.replace(regexSearch, (mark) => `<mark style='background-color: blue; color: white;'>${mark}</mark>`)
    });
})