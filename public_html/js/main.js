$(document).ready(function () {


    function parseData(data) {
        if (data[0] !== '[') {
            return
        } else {
            data = data.split("],["); 
            for (var i = 0; i < data.length; i++) {
                data[i] = data[i].replace(/[\[|\]]*/, ''); 
                data[i] = data[i].split(',');
                var date = new Date(data[i][0]);
                console.log(date);
            }
            console.log(data);
        }
    }

    $.get('getData.php?user=athaeryn', function (d){
        parseData(d);
    });


    var paper = new Raphael(document.getElementById("grid"), 634, 82),
        w = 10,
        h = 10,
        pad = 2;

    paper.rect(0, 0, 634, 82).attr({fill: "#fff", stroke: "none"});

    paper.rect(0, 0, 10, 10).attr({fill: "#eee", stroke: "none"});
    paper.rect(12, 0, 10, 10).attr({fill: "#eee", stroke: "none"});
});
