$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
  ]
});
function processData(allText) {
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
//            alert(headings[j] );
        }
        lines.push(tarr);
    }
//    for(var i=1; i<allText.length; i++){
//        var item = allText[i];
//        html += '<tr><td>'+item[0].substring(1)+'</td><td>'+item[1].substring(1)+'</td><td>'+item[2].substring(1)+'</td><td>'+item[3].substring(1)+'</td></tr>';
//    }
//    $('#table').append(html);
    
    alert(lines);
    document.getElementById("data").innerHTML = allText;
}



