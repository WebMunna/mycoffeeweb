import React from 'react'

const Loading = () => {



    let loadingBoxEdit = 'absolute z-201 lg:top-[40%] lg:left-[45%] md:top-[40%] md:left-[35%] sm:top-[40%] sm:left-[35%] flex items-center justify-center font-semibold border-top-color:transparent text-[20px] text-blue-400'
    let loadingBarEdit = 'mx:w-[100px] mx:h-[100px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] mx:border-[18px] md:border-[15px] sm:border-[10px] border-blue-400 border-dotted rounded-full animate-spin'


  return (
    <div>
         <div className={loadingBoxEdit}>
                <div className={loadingBarEdit}>
                 </div>
                     Processing...
                </div>
    </div>
  )
}

export default Loading