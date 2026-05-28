import React, { useState } from 'react'

import Timer from './Timer';
import { useSelector } from 'react-redux';

import ShowaTimer from './ShowaTimer';

const TimerPage = () => {

  const [toshow,setShow] = useState(false);

  const alltimers = useSelector((state)=>state.Timer.timers)

  function newtimerhandler(){
    setShow(true);

  }

  if( toshow ){
    return(

      <div>
        <Timer toshow={toshow}  setShow={setShow} />
      </div>

    )
  }
 
  return (
    <div>
      <div>
        <div className='mt-10 text-3xl flex justify-center items-center bg-slate-600 text-white' >
          <button
          className='px-2 text-4xl '
          onClick={newtimerhandler}
          >Add timer <span className='text-5xl' >+</span> </button>
        </div>

        {/* now we will show all the cards */}

          
          {

            (alltimers.length >0 )?
            (
            <div className='flex flex-row py-3 px-4 justify-start items-center gap-4 flex-wrap' >
              {alltimers.map((eachtimer,idx)=>{
                // console.log(eachtimer)
                return <ShowaTimer
                key={eachtimer.id}
                eachtimer={eachtimer}
                cnt={idx}
                />
              })}
            </div>
            )
            :(
            <div className='py-[15rem] text-red-600 flex justify-center items-center' >
              NO TIMER TO SHOW
            </div>
            )

          }




      </div>
    </div>
  )
}

export default TimerPage
