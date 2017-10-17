var QueryString = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();


//Stop propagation inline
var e = e || event;
e.bubbles && e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;

//set Cookie
var setCookie = (name, value, time, path = '/')=>document.cookie = `${name}=${value};expires=${new Date().setTime(new Date().getTime() + time)};path=${path}`
//getCookie
var getCookie = (name)=>decodeURIComponent(document.cookie)
        .split(';')
        .map((c)=>c.charAt(0) === ' ' ? c.substring(1) : c)
        .find((c)=>!c.indexOf(name))
        .substring(name.length + 1)
    ;
[].forEach.call(document.querySelector('*'), function (a) {
    a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24)))
})