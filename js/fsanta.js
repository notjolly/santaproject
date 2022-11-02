const randomImage = new Array();  
      
    randomImage[0] = "images/card_santa.png";  
    randomImage[1] = "images/card_gman.png"; 
    randomImage[2] = "images/card_raindeer.png"; 
    randomImage[3] = "images/card_sman.png"; 
    randomImage[4] = "images/card_gman.png"; 
    randomImage[5] = "images/card_gman.png"; 
    randomImage[6] = "images/card_sman.png"; 
    randomImage[7] = "images/card_sman.png"; 

const lettersLose = new Array();  
      
    lettersLose[0] = "images/card_y.png";  
    lettersLose[1] = "images/card_o.png"; 
    lettersLose[2] = "images/card_u.png"; 
    lettersLose[3] = "images/card_l.png"; 
    lettersLose[4] = "images/card_o.png"; 
    lettersLose[5] = "images/card_s.png"; 
    lettersLose[6] = "images/card_e_loss.png";  

const lettersWin = new Array();  
      
    lettersWin[0] = "images/card_w.png";  
    lettersWin[1] = "images/card_i.png"; 
    lettersWin[2] = "images/card_n.png"; 
    lettersWin[3] = "images/card_n.png"; 
    lettersWin[4] = "images/card_e_win.png"; 
    lettersWin[5] = "images/card_r.png"; 
    lettersWin[6] = "images/card_trophy.png";  

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
        document.getElementById("card"+num+"_message").hidden = true;
    }
    
    
    attempts++;
    
    if (attempts == 8 && randomImage[randomNum].endsWith("card_santa.png"))
    {
        messageLose();
    } 
    else if (randomImage[randomNum].endsWith("card_santa.png"))
    {
        messageWin();
    }
    randomImage[randomNum] = "";
}

function messageWin()
{
    var letterCount = 0;
        for (let i = 1; i < 9; i++) 
        {   
            if (!document.getElementById("card"+i).src.endsWith("card_santa.png"))
            {
                document.getElementById("card"+i).src = lettersWin[letterCount];
                document.getElementById("card"+i+"_message").hidden = true;
                letterCount++;
            }
        }
}

function messageLose()
{
    var letterCount = 0;
        for (let i = 1; i < 9; i++) 
        {   
            if (!document.getElementById("card"+i).src.endsWith("card_santa.png"))
            {
                document.getElementById("card"+i).src = lettersLose[letterCount];
                document.getElementById("card"+i+"_message").hidden = true;
                letterCount++;
            }
        }
}

function reset()
{
    for (let i = 1; i < 9; i++) 
    {
        document.getElementById("card"+i).src = "images/card_back.png";
        document.getElementById("card"+i+"_message").hidden = false;
    }
    randomImage[0] = "images/card_santa.png";  
    randomImage[1] = "images/card_gman.png"; 
    randomImage[2] = "images/card_raindeer.png"; 
    randomImage[3] = "images/card_sman.png"; 
    randomImage[4] = "images/card_gman.png"; 
    randomImage[5] = "images/card_gman.png"; 
    randomImage[6] = "images/card_sman.png"; 
    randomImage[7] = "images/card_sman.png"; 
    attempts = 0;
}