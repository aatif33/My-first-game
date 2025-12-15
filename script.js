 let result='';
    const score ={
      Wins : 0,
      Losses : 0,
      Tie : 0,
      round:0,
    };
    document.querySelector('.stonejs').addEventListener('click',()=>{
      S('stone');
    })
    document.querySelector('.paperjs').addEventListener('click',()=>{
      S('paper');
    })
    document.querySelector('.scissorjs').addEventListener('click',()=>{
      S('scissor');
    })
    document.querySelector('.reset').addEventListener('click',()=>{
      reset();
    })
    document.querySelector('.auto').addEventListener('click',()=>{
     autoplay();
    })
    let autoplaying = true;
    let validid;
    function autoplay(){
      if(autoplaying){
        validid=setInterval( ()=>{
        playermove= computer();
        S(playermove);
      },1000);
        autoplaying=false;}
      else {
        clearInterval(validid);
        autoplaying=true;
      }
    let variable='';
    }
    function updatescore(){
    document.querySelector('.js-result').innerHTML=` Results: Lose:${score.Losses} Tie:${score.Tie} Wins:${score.Wins}`;}
    let playermove='';
    function reset(){
      const ok=confirm('confirm?');
      if(ok){
      score.Losses=0,
      score.Wins=0,
      score.Tie=0,
      score.round=0;
      localStorage.removeItem(score);
      updatescore();}
    }
    function computer(){
      let op='';
      let variable= Math.random();
    if(variable>0 && variable<1/3){
      op='stone';
    }
    else if(variable>1/3 && variable<2/3){
      op='paper';
    }
    else{
      op='scissor';
    }
    return op;
    }
    function S(playermove){
    const opp=computer();
      if(playermove===opp){
        result='Tie';
      }
      else if (playermove==='stone'){
        if(opp==='paper'){
          result='Lose';}
        else {
          result='Win';
        }
      }
      else if (playermove==='paper'){
        if(opp==='scissor'){
          result='Lose';}
        else {
          result='Win';
        }
      }
      else if (playermove==='scissor'){
        if(opp==='stone'){
          result='Lose';}
        else {
          result='Win';
        }
      }
      if(result=='Win'){
        score.Wins+=1;
      }
      else if(result=='Lose'){
        score.Losses+=1;
      }
      else{score.Tie+=1;}
      score.round+=1;
      localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-output').innerHTML=`${result}`;
    document.querySelector('.js-player').innerHTML=`playermove: <img class='player' src="${playermove}.png ">`;
    document.querySelector('.js-computer').innerHTML=` Computer move: <image class='computer' src="${opp}.png ">`;
    updatescore();
  }