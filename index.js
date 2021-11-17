
{

let firstAnswer = window.prompt('Do you head left or right?');

        if(firstAnswer === 'left') 

        {
         let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?')

        if (secondAnswer === 'follow') {
            let thirdAnswer = window.prompt('You follow the cat down the hole, and find an ever expanding cave system. Do you stay in the cave, or do you leave?')
        if (thirdAnswer === "stay") {
            let fourthAnswer = window.prompt('you decide to stay inside the cave.')
        }    
        if(thirdAnswer === 'leave') {
            let fourthAnswer = window.prompt('You leave the cave. Back on the path now, you notice it is getting dark. Do you make camp for the night, or do you continue in the darkness?')
        }

        

    }
        

    if (secondAnswer === 'continue') {
        let thirdAnswer = window.prompt('You ignore the cat, and continue down the path.')
        }
            
        
    }          

                


    {
        // start of right options
        if(firstAnswer === 'right') {
            let secondAnswer = window.prompt('You go right, and follow a winding path to a river. Do you cross, or stay on your side?')
        if(secondAnswer === 'cross') {
        let thirdAnswer = window.prompt('You cross the river. Soaking wet, you are startled by a talking bird. It asks if you are hungry. Do you answer yes, or no?')
        if(thirdAnswer === 'yes') {
        let fourthAnswer = window.prompt('The bird offers you a delicious home-cooked meal. you are surprised, but very gratetful.')
        }
        else if(thirdAnswer === 'no') {
        let fourthAnswer = window.prompt('The bird seems slightly upset by your choice, but wishes you well on your journey regardless.')
        }
    }
        
  
    



    
    }
    }
    


}      
    
    




    


 






