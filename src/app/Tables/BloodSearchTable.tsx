import React from 'react'

const BloodSearchTable = () => {
  return (
    <div className='TableContainer'>

    <table className="ResultTable">
 
 <thead>
 <tr>
  <th><label> اسم المتبرع </label></th>
  <th><label>  المكان </label></th>
  <th><label>   الفصيلة</label></th>
  <th><label>  رقم الجوال</label></th>
  <th><label>   رقم الواتس</label></th>
    </tr>
 </thead>
 
       <tbody className='Bloods'>
       <tr>
       <td><span> محمد سالم علي </span></td>
       <td> <span> المكلا </span><span> حضرموت </span> <span> اليمن </span></td>
       <td><span>    A+ </span></td>
       <td><span>   771234567  </span></td>
       <td><span> 771234567 </span></td>
       </tr>
       <tr>
       <td><span> عبدالله صالح محمد </span></td>
       <td> <span> جدة </span><span> مكةالمكرمة  </span> <span> السعودية </span></td>
       <td><span> A+ </span></td>
       <td><span>    776586656  </span></td>
       <td><span> 776586656  </span></td>
       </tr>
       </tbody>
     </table>
</div>
  )
}

export default BloodSearchTable
