import React from 'react';
import "./style-main.css"
import "./style-bean.css"
import "./style-market.css"

import PlayerBean from "./PlayerBean.js"
import PlayersList from "./PlayersList.js"
import FormationButton from "./FormationButton.js"
import theSquad from "./theSquad"


function Main()  {
    

    return (
        <div id="main-grid">
            <div id="menu"></div>
            <div id="pitch-img-container"> 
                <div id="teamData">
                    <FormationButton formation={"4-4-2"} />
                    <FormationButton formation={"4-3-3"} />
                    <FormationButton formation={"4-5-1"} />
                    <FormationButton formation={"5-4-1"} />
                    <FormationButton formation={"5-3-2"} />
                    <FormationButton formation={"3-5-2"} />
                    <FormationButton formation={"3-4-3"} />
                </div>
                <div id="pitch">
                    <div id="pitch-line-gk">
                        <PlayerBean surname={theSquad[0].surname} shirtNumber={theSquad[0].shirtNumber} overallPoints={theSquad[0].overallPoints} price={theSquad[0].price} className={theSquad[0].className1 + " " + theSquad[0].className2 + " " + theSquad[0].className3 + " " + theSquad[0].className4}/>
                    </div>
                    <div id="pitch-line-def">
                        <PlayerBean surname={theSquad[1].surname} shirtNumber={theSquad[1].shirtNumber} overallPoints={theSquad[1].overallPoints} price={theSquad[1].price} className={theSquad[1].className1 + " " + theSquad[1].className2 + " " + theSquad[1].className3 + " " + theSquad[1].className4}/>
                        <PlayerBean surname={theSquad[2].surname} shirtNumber={theSquad[2].shirtNumber} overallPoints={theSquad[2].overallPoints} price={theSquad[2].price} className={theSquad[2].className1 + " " + theSquad[2].className2 + " " + theSquad[2].className3 + " " + theSquad[2].className4}/>
                        <PlayerBean surname={theSquad[3].surname} shirtNumber={theSquad[3].shirtNumber} overallPoints={theSquad[3].overallPoints} price={theSquad[3].price} className={theSquad[3].className1 + " " + theSquad[3].className2 + " " + theSquad[3].className3 + " " + theSquad[3].className4}/>
                        <PlayerBean surname={theSquad[4].surname} shirtNumber={theSquad[4].shirtNumber} overallPoints={theSquad[4].overallPoints} price={theSquad[4].price} className={theSquad[4].className1 + " " + theSquad[4].className2 + " " + theSquad[4].className3 + " " + theSquad[4].className4}/>
                        <PlayerBean surname={theSquad[5].surname} shirtNumber={theSquad[5].shirtNumber} overallPoints={theSquad[5].overallPoints} price={theSquad[5].price} className={theSquad[5].className1 + " " + theSquad[5].className2 + " " + theSquad[5].className3 + " " + theSquad[5].className4}/>
                    </div>
                    <div id="pitch-line-mid">
                        <PlayerBean surname={theSquad[6].surname} shirtNumber={theSquad[6].shirtNumber} overallPoints={theSquad[6].overallPoints} price={theSquad[6].price} className={theSquad[6].className1 + " " + theSquad[6].className2 + " " + theSquad[6].className3 + " " + theSquad[6].className4}/>
                        <PlayerBean surname={theSquad[7].surname} shirtNumber={theSquad[7].shirtNumber} overallPoints={theSquad[7].overallPoints} price={theSquad[7].price} className={theSquad[7].className1 + " " + theSquad[7].className2 + " " + theSquad[7].className3 + " " + theSquad[7].className4}/>
                        <PlayerBean surname={theSquad[8].surname} shirtNumber={theSquad[8].shirtNumber} overallPoints={theSquad[8].overallPoints} price={theSquad[8].price} className={theSquad[8].className1 + " " + theSquad[8].className2 + " " + theSquad[8].className3 + " " + theSquad[8].className4}/>
                        <PlayerBean surname={theSquad[9].surname} shirtNumber={theSquad[9].shirtNumber} overallPoints={theSquad[9].overallPoints} price={theSquad[9].price} className={theSquad[9].className1 + " " + theSquad[9].className2 + " " + theSquad[9].className3 + " " + theSquad[9].className4}/>
                        <PlayerBean surname={theSquad[10].surname} shirtNumber={theSquad[10].shirtNumber} overallPoints={theSquad[10].overallPoints} price={theSquad[10].price} className={theSquad[10].className1 + " " + theSquad[10].className2 + " " + theSquad[10].className3 + " " + theSquad[10].className4}/>
                    </div>
                    <div id="pitch-line-fwd">
                        <PlayerBean surname={theSquad[11].surname} shirtNumber={theSquad[11].shirtNumber} overallPoints={theSquad[11].overallPoints} price={theSquad[11].price} className={theSquad[11].className1 + " " + theSquad[11].className2 + " " + theSquad[11].className3 + " " + theSquad[11].className4}/>
                        <PlayerBean surname={theSquad[12].surname} shirtNumber={theSquad[12].shirtNumber} overallPoints={theSquad[12].overallPoints} price={theSquad[12].price} className={theSquad[12].className1 + " " + theSquad[12].className2 + " " + theSquad[12].className3 + " " + theSquad[12].className4}/>
                        <PlayerBean surname={theSquad[13].surname} shirtNumber={theSquad[13].shirtNumber} overallPoints={theSquad[13].overallPoints} price={theSquad[13].price} className={theSquad[13].className1 + " " + theSquad[13].className2 + " " + theSquad[13].className3 + " " + theSquad[13].className4}/>
                    </div>
                </div>
                <div id="market">
                    <PlayersList />
                </div>
                <div id="schedule"></div>
            </div>
            <div id="bench">
                <PlayerBean surname={theSquad[14].surname} shirtNumber={theSquad[14].shirtNumber} overallPoints={theSquad[14].overallPoints} price={theSquad[14].price} className={theSquad[14].className1 + " " + theSquad[14].className2 + " " + theSquad[14].className3 + " " + theSquad[14].className4}/>
                <PlayerBean surname={theSquad[15].surname} shirtNumber={theSquad[15].shirtNumber} overallPoints={theSquad[15].overallPoints} price={theSquad[15].price} className={theSquad[15].className1 + " " + theSquad[15].className2 + " " + theSquad[15].className3 + " " + theSquad[15].className4}/>
                <PlayerBean surname={theSquad[16].surname} shirtNumber={theSquad[16].shirtNumber} overallPoints={theSquad[16].overallPoints} price={theSquad[16].price} className={theSquad[16].className1 + " " + theSquad[16].className2 + " " + theSquad[16].className3 + " " + theSquad[16].className4}/>
                <PlayerBean surname={theSquad[17].surname} shirtNumber={theSquad[17].shirtNumber} overallPoints={theSquad[17].overallPoints} price={theSquad[17].price} className={theSquad[17].className1 + " " + theSquad[17].className2 + " " + theSquad[17].className3 + " " + theSquad[17].className4}/>
            </div>
                
            <div id="footer"></div>
        </div>
    )
    
}


export default Main