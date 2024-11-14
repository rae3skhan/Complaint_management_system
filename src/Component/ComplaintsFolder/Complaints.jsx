import React from 'react'
import addImg from '../../assets/images/write.gif'
import salovedImg from '../../assets/images/solved.gif'
import pendingImg from '../../assets/images/pending.gif'
import rejectImg from '../../assets/images/rejected.gif'
import { Link } from 'react-router-dom'

function Complaints() {
  let complaintsArr = [
    {name: 'Add-Complaint', img: addImg, counter: 5},
    {name: 'Solved-Complaint', img: salovedImg, counter: 6},
    {name: 'Pending-Complaint', img: pendingImg, counter: 9},
    {name: 'Rejected-Complaint', img: rejectImg, counter: 10}
  ]
  return (
    <>


    <div className='flex flex-wrap justify-center items-center'>
<div
  class="w-full bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md"
>
  <h1 class="text-lg font-bold font-sans text-center">Total Complaints</h1>
  <div class="py-1">
    <p class="text-lg font-bold font-sans text-center">
     30
    </p>
  </div>

</div>
     

      {complaintsArr.map((complaint)=>(
       
<div
  class="profile-card w-[250px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group m-3"
>
  <div
    class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
  >
    <div
      class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300"
    >
      <img src={complaint.img} alt="" className="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"/>
      <div
        class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"
      ></div>
    </div>
  </div>
  <div class="headings *:text-center *:leading-4">
    <p class="text-xl font-serif font-semibold text-[#434955]">{complaint.name}</p>
    <p class="text-xl font-serif font-semibold text-[#434955] my-3">{complaint.counter}</p>
   
  </div>
 
  <hr
    class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300"
  />
</div>
      ))}
    </div>
    </>
  )
}

export default Complaints;