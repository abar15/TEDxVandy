
function height_change()
{
    var offsetHeight = document.getElementById('left_side').offsetHeight;
    document.getElementById('right_side').style.height = offsetHeight+'px';
}

height_change();

window.addEventListener('resize', function(event) 
{
    height_change();
    
}, true);