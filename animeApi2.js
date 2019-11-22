function search()
{
    var i;
    var data=[];
    
    var txtSearch = document.getElementById("inputSearch").value;

    $.getJSON("https://danbooru.donmai.us/tags.json?search%5Bname_matches%5D="+txtSearch+"*",function(data)
{
    console.log(data);
    

});
}
