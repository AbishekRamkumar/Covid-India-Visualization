    $(document).ready(
    function(){
       showGraph();
    }
); 
function showGraph() {
    $.get("https://disease.sh/v2/countries/India?yesterday=false",function(data) {
        var name=['Cases','Deaths','Recovered','Active'];
        var details=[];
        details.push(data.cases);
        details.push(data.deaths);
        details.push(data.recovered);
        details.push(data.active);
        var chartdata={
            labels:name,
            datasets:[
                {
                    backgroundColor:['#95a5a6','#e74c3c','#2ecc71','#3498db'],
                    data:details
                }
            ]
        };
    var options={
        elements:{
      arc:{
          borderWidth:0
      }
        }
    };
        var graphTarget=$("#myChart");
        var graph=new Chart(graphTarget,{
            type:'pie',
            data:chartdata,
            options:options
        });
    });
}