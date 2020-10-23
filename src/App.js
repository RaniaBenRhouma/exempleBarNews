import React from 'react';
import './App.css';

function App() {
  const newsTab=["our new plat is gonna to be a biiiiiiigg big big bigg biiiiiiiiiiig biggggggg big big bigggggg surprise we will seee youuu agaiiin in ourrr local you are sooooooo sooooooooo sooooooooooooooooooooooo welcomeeedd", "we will see we williiiiiiiiiiiiiiiillllllllllllllllll see jfjfjgjgjgjgjgjgjgdlddmmqfdjmojfsji",
"rrttryuio gooo goooo gggggtt gggtt  ttt tt t t ttttpgpgpggtttt tttttttttttttddd ddddddddddddt tpopo aaszzaaeeeeeeeeeeefezagafdfefeffefgeg", 
"iiiiiiiiiiiiiii iiiitytuytutut ytutut uoioifj,dkffvff'rjifk snej bfjfvkdkcdfvk,cgghgjg jlgkglgloooooo ooooooooooooiiiiiiiiii iiiiiyytyiiuuyyh"]


return (
    <div className="App">
     <div  className="newsBar">
       <div className="news"> 
        
        {newsTab.map(el=> <span style={{marginRight:100}}> <p><span><i class="fas fa-newspaper"></i>
        </span>{el}</p></span>)}
       </div>

     </div>

    </div>
  );
}

export default App;
