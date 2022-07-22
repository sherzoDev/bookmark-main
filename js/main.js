var elItem = document.querySelectorAll(".feature-part__feature-item");
var elLink = document.querySelectorAll(".feature-part__btn");
var elBookmarkWrapper = document.querySelectorAll('.bookmark-wrapper')
elLink.forEach(function (links) {
    links.addEventListener("click", function (evt) {
        evt.preventDefault()
        elItem.forEach(function (item) {
            item.classList.remove("feature-part__feature-item--active")
        })
        links.parentElement.classList.add("feature-part__feature-item--active")

        elBookmarkWrapper.forEach(function(bookmarkWrapper){
            bookmarkWrapper.classList.remove("bookmark-wrapper--active")
        })
        document.querySelector(links.getAttribute("href")).classList.add("bookmark-wrapper--active")
    })

})