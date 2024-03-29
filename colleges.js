function change(key) {
    college = college.slice(0);
    college.sort(function (a, b) {
        if (key == 'fee' || key == 'priority') {
            return a[key] - b[key];

        } else {
            return b[key] - a[key];
        }
    });

    // creating output html
    let html = "<div>"
    for (let i = 0; i < college.length; i++) {
        html += "<hr>"
        html += "<ul>"
        html += i + 1
        let c = college[i];
        for (let key in c) {
            // if (key != "government") { // key != "top15" && 
            html += "<li>"
            html += "<b>"
            html += key
            html += ": </b>"
            html += c[key]
            html += "</li>"
            // }
        }
        html += "</ul>"
        if (((i + 1) % 2 === 0)) {
            html += '<div class="pagebreak"></div>'
        }
    }
    // adding html
    html += "</div>"
    document.getElementById("output").innerHTML = html;
}
change('placement');

document.head.innerHTML += `<link rel="shortcut icon" href="./media/degree.png" type="image/x-icon">`