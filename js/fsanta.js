const randomImage = new Array();  
      
    randomImage[0] = "images/card_santa.png";  
    randomImage[1] = "images/card_gman.png"; 
    randomImage[2] = "images/card_raindeer.png"; 
    randomImage[3] = "images/card_sman.png"; 
    randomImage[4] = "images/card_gman.png"; 
    randomImage[5] = "images/card_gman.png"; 
    randomImage[6] = "images/card_sman.png"; 
    randomImage[7] = "images/card_sman.png"; 

const messageLose = new Array();  
      
    messageLose[0] = "images/y.png";  
    messageLose[1] = "images/o.png"; 
    messageLose[2] = "images/u.png"; 
    messageLose[3] = "images/l.png"; 
    messageLose[4] = "images/o.png"; 
    messageLose[5] = "images/s.png"; 
    messageLose[6] = "images/e.png";  

var attempts = 0;

function flip(num)
{          
    var randomNum = Math.floor(Math.random()*randomImage.length);
    if (randomImage[randomNum] == "")
    {
        while (randomImage[randomNum] == "")
        {
            var randomNum = Math.floor(Math.random()*randomImage.length);
        }
    }    
    if (document.getElementById("card"+num).src.endsWith("card_back.png")){
        document.getElementById("card"+num).src = randomImage[randomNum] ;
    }
    randomImage[randomNum] = "";
    
    attempts++;
    
    if (attempts == 8)
    {
        var letterCount = 0;
        for (let i = 1; i < 9; i++) 
        {   
            if (!document.getElementById("card"+i).src.endsWith("card_santa.png"))
            {
                document.getElementById("card"+i).src = messageLose[letterCount]
            }
            letterCount++;
        }
    } 
}

function reset()
{
    for (let i = 1; i < 9; i++) 
    {
        document.getElementById("card"+i).src = "images/card_back.png";
    }
    randomImage[0] = "images/card_santa.png";  
    randomImage[1] = "images/card_gman.png"; 
    randomImage[2] = "images/card_raindeer.png"; 
    randomImage[3] = "images/card_sman.png"; 
    randomImage[4] = "images/card_gman.png"; 
    randomImage[5] = "images/card_gman.png"; 
    randomImage[6] = "images/card_sman.png"; 
    randomImage[7] = "images/card_sman.png"; 
}