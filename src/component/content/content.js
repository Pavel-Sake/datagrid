import React from "react";
import './content.css'
import List from "../List/List";
import TableFunctions from "../TableFunctions/TableFunctions";

 function Content () {

   return (
     <div className='content'>
       <header className='header fixedBlock'>
         <h1 className='header__title'>Person List</h1>
       </header>
       <TableFunctions/>
       <List/>
     </div>
   )
 }


 export default Content
