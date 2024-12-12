import React from 'react'

const SearchTecnicals = () => {
  return (
    <div className='TableContainer'>
    <table className="ResultTable">
    
    <thead>
    <tr>
     <th><label> الاسم</label></th>
     <th><label>  التخصص الفني </label></th>
     <th><label>  اوقات العمل</label></th>
     <th><label>  التلفون</label></th>
     <th><label>  طريقة العمل</label></th>
     <th><label>العنوان</label></th>
       </tr>
    </thead>
    
          <tbody>
          <tr>
          <td><span> محمد علي سالم </span></td>
          <td> <span> كهرباء </span></td>
          <td><span>  دوام كامل </span></td>
          <td><span>   777135465  </span><span> 736545864</span></td>
          <td><span> مقاوله</span></td>
          <td><span> المكلا </span><span> حضرموت </span> <span> اليمن </span></td>
         
          </tr>
          <tr>
          <td><span>   عبدالله علي محمد </span></td>
          <td> <span> سباكة </span></td>
          <td><span>  الفترة المسائية  </span></td>
          <td><span>   777135465  </span><span> 736545864</span></td>
          <td><span> مقاوله</span></td>
          <td><span> المكلا </span><span> حضرموت </span> <span> اليمن </span></td>
         
          </tr>


         

          </tbody>
        </table>
  </div>
  )
}

export default SearchTecnicals
