import React from 'react'
import './RoomMap.css'

export default function RoomMap({room_w,room_h,list,pos}) {
  return (
    <div className='room' style={{width:room_w,height:room_h}}>
        <div className='point'style={{backgroundColor:'black', left:`calc(${pos.X * room_w}px - 10px)`   , top: `calc(${pos.Y * room_h}px)`}}>
        </div>
        {list.map((obj,idx)=>(
            <div key={idx} className='point' style={{backgroundColor:'red', left: `calc(${obj.X * room_w}px - 10px)`, top: `calc(${obj.Y * room_h}px - 10px)`}}></div>

        ))}

    </div>

    
  )
}
