document.forms[0].onsubmit = findAnswer;

function findAnswer(e) {
    e.preventDefault();

    let a = e.target.a.value;
    let b = e.target.b.value;
    let c = e.target.c.value;

    let [m1, m2] = findRoots(a, b, c);

    document.getElementById('m1').innerText = m1;
    document.getElementById('m2').innerText = m2;

    return false;
}

function findRoots(a, b, c) {
    return [(((-(b)) + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a)), (((-(b)) - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a))];
}