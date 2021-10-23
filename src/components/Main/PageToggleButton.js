import React from "react"

const PageToggleButton = (props)=> {
    const {playersToMap, visibleMarketPage, handlePageToggle, pageBtnNum} = props

    const showButton = (pageNum) => {
        //Jeżeli do wyświetlenia jest max. 5 stron
        if(pageNum===1){
            return true
        }
        if((playersToMap.length < 5*10)){
          if(playersToMap.length > (pageNum-1)*10){
            return true
          }
        }
        //Jeżeli do wyświetlenia jest więcej niż 5 stron
        else{
          if(inRange(pageNum, visibleMarketPage-1, visibleMarketPage+1) && playersToMap.length >= pageNum*10){
            return true
          }
          if(inRange(playersToMap.length, (pageNum-1)*10, pageNum*10)){
            return true
          }
        }
      }

      const inRange = (numberToCheck, min, max) => {
        return numberToCheck >= min && numberToCheck <= max;
      }
    
    if(showButton(pageBtnNum)){
        return (
            <button 
                style={visibleMarketPage === pageBtnNum ? {color: "var(--second-color)", backgroundColor: "var(--first-color)"}:{}}
                className="page-toggle-button" 
                onClick={()=>{handlePageToggle(pageBtnNum*10 - 10, pageBtnNum*10, pageBtnNum)}}
                >{pageBtnNum}
            </button>
        )
    }
    else{
        return null
    }
    
}

export default PageToggleButton