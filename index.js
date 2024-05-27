function like(elementId) {
    var countElement = document.getElementById(elementId);
    var count = parseInt(countElement.innerHTML);
    count++;
    countElement.innerHTML = count;
}

function dislike(elementId) {
    var countElement = document.getElementById(elementId);
    var count = parseInt(countElement.innerHTML);
    count--;
    countElement.innerHTML = count;
}
