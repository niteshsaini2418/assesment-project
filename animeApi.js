
function home()
{
    document.getElementById("showData").style.display="none";
    document.getElementById("abc").style.display="block";
}



function search()
{

    document.getElementById("abc").style.display="none";

    var type = document.getElementById("selectType").value;;

    var i;
    //var arrData=[];

    var txtSearch = document.getElementById("inputSearch").value;

    if(type=="Anime")
    {
    

    
        $.getJSON("https://cors-anywhere.herokuapp.com/api.jikan.moe/v3/search/anime?q="+txtSearch+"&limit=20",function(data)
        {
            $('#showData').empty();
            console.log(data);
            
        
            for(i=0;i<data.results.length;i++)
            {
                //arrData.push(data.results[i].title);
                var divv = document.createElement('div');
                divv.className="anim";
                
                var img = document.createElement('img'); 
                    img.src =  data.results[i].image_url;
        
                var para = document.createElement('p'); 
                var node = document.createTextNode(data.results[i].title);
                para.appendChild(node);
        
                divv.appendChild(img);
                divv.appendChild(para);
        
                document.getElementById('showData').appendChild(divv);
            }
        
            
        
            //console.log(arrData);
        
        });
    
    }


    else if(type=="TV Shows")
    {
        $.getJSON("https://api.tvmaze.com/search/shows?q="+txtSearch,function(data){
                //console.log(data);


                $('#showData').empty();
            console.log(data);
            
        
            for(i=0;i<data.length;i++)
            {
                //arrData.push(data.results[i].title);
                var divv = document.createElement('div');
                divv.className="tv";
                
                var img = document.createElement('img'); 
                    img.src =  data[i].show.image.original;
        
                var para = document.createElement('h4'); 
                var node = document.createTextNode("Rating: "+data[i].show.rating.average);
                para.appendChild(node);
        
                divv.appendChild(img);
                divv.appendChild(para);
        
                document.getElementById('showData').appendChild(divv);
            }
        });
    }

    else if(type=="Movies")
    {
        $.getJSON("https://www.omdbapi.com/?t="+txtSearch+"&apikey=666248b2",function(data){
                //console.log(data);


                $('#showData').empty();
            console.log(data);
            
            

                var divv = document.createElement('div');
                divv.className="movie";

                var para = document.createElement('h2'); 
                var node = document.createTextNode(data.Title);
                para.appendChild(node);
                
                var img = document.createElement('img'); 
                    img.src =  data.Poster;
        
                var genre = document.createElement('p');
                    node = document.createTextNode("Genre: "+data.Genre)
                    genre.appendChild(node);

                var rating  = document.createElement('p');
                    node = document.createTextNode("IMDB Rating: "+data.imdbRating);
                    rating.appendChild(node);
        
                divv.appendChild(para);
                divv.appendChild(img);
                divv.appendChild(genre);
                divv.appendChild(rating);

                var story = document.createElement('p');
                    node = document.createTextNode("Plot: "+data.Plot);
                    story.appendChild(node);

                    divv.appendChild(story);
        
                document.getElementById('showData').appendChild(divv);
        
        });
    }


    document.getElementById("showData").style.display="flex";
}
