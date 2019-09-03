(function(){
    window.onload = function(){
        let teamOneShootButtonElement = document.querySelector("#teamone-shoot");
        let teamOneShotCountElement = document.querySelector("#teamone-numshots");
        let teamOneGoalCountElement = document.querySelector("#teamone-numhits");

        let teamOne = prompt("what is team one's name?")
        let teamTwo =  prompt("what is team two's name?")

        document.querySelector("#teamOneName").innerHTML = teamOne;
        document.querySelector("#teamTwoName").innerHTML = teamTwo;

        let teamOneShotCount = 0;
        let teamOneGoalCount = 0;

        teamOneShootButtonElement.addEventListener("click", function(){
            teamOneShotCount = teamOneShotCount + 1
            teamOneShotCountElement.innerHTML = teamOneShotCount

            // if shot was successful, increment goalcount by one
            // after incrementing goalcount, set goalcount element.innerHTML
            // equal to goalcount
           
            if(Math.random() < .50){
                teamOneGoalCount = teamOneGoalCount + 1
                teamOneGoalCountElement.innerHTML = teamOneGoalCount
            }
            


        });
        
        let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot");
        let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots");
        let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits");

        let teamTwoShotCount = 0;
        let teamTwoGoalCount = 0;

        teamTwoShootButtonElement.addEventListener("click", function(){
            teamTwoShotCount = teamTwoShotCount +1 
            teamTwoShotCountElement.innerHTML = teamTwoShotCount

            if(Math.random() <.25){
                teamTwoGoalCount = teamTwoGoalCount + 1
                teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
            }
        });

       let resetButtonElement = document.querySelector("#reset")
       let resetButtonCountElement = document.querySelector("#num-resets")
       
       let resetButtonCount = 0;

       resetButtonElement.addEventListener("click", function(){
        resetButtonCount = resetButtonCount + 1
        resetButtonCountElement.innerHTML = resetButtonCount
        teamTwoGoalCountElement.innerHTML = 0;
        teamOneGoalCountElement.innerHTML = 0;
        teamTwoShotCountElement.innerHTML = 0;
        teamOneShotCountElement.innerHTML = 0; 
       })

       

       

    };
    







    
})();