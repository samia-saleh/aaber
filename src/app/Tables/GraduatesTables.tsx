import React from 'react'

const GraduatesTables = () => {
  return (
    <div className='TableContainer'>

    <table className="ResultTable">
 
 <thead>
 <tr>
 <th><label> الاسم </label></th>
  <th><label>   سنة التخرج </label></th>
  <th><label>   الجامعة </label></th>
  <th><label>  الكلية </label></th>
  <th><label>   التخصص  </label></th>
  <th><label>   درجة التخرج</label></th>
    </tr>
 </thead>
 
       <tbody >
       <tr>
       <td><span> محمد علي سالم </span></td>
       <td> <span> 2022 </span></td>
       <td><span>    جامعة حضرموت  </span></td>
       <td><span>   الهندسة   </span></td>
       <td><span> برمجة حاسوب  </span></td>
       <td><span>بكالوريوس</span></td>
       </tr>
       <tr>
       <td><span> محمد علي سالم </span></td>
       <td> <span> 2022 </span></td>
       <td><span>    جامعة حضرموت  </span></td>
       <td><span>   الهندسة   </span></td>
       <td><span> برمجة حاسوب  </span></td>
       <td><span>بكالوريوس</span></td>
       </tr>
       </tbody>
     </table>
</div>
  )
}

export default GraduatesTables
