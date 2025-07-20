import React from 'react';
import { useState } from 'react';
import './Main.css'
const Main = () => {
    let [obj,setObj] =useState([])
    let [newurl,seturl] = useState("")
    let [newusername,setusername] = useState("")
    let [newpassword,setpassword] = useState("")

    function handleObject(){
        let newObj = {
            url:newurl,
            username:newusername,
            password:newpassword
        }
        
        if(newurl.length==0){
            alert("Url cannot be empty")
            return
        }
        if(newpassword.length==0){
            alert("password cannot be empty")
            return
        }
        if(newusername.length==0){
            alert("username cannot be empty")
            return
        }
        setObj(o => [...o,newObj])
        // console.log(newObj);x
        seturl("")
        setpassword("")
        setusername("")
    }

    function handleUrl(){
        seturl(document.getElementById("website").value)
    }
    function handleUsername(){
        setusername(document.getElementById("username").value)
    }
    function handlePassword(){
        setpassword(document.getElementById("password").value)
    }
    function handleRemove(i){
        let ob=[...obj]
        ob=ob.filter((_,index)=> index!=i)
        setObj(ob);
    }
    let elements = obj.map((element,index)=><tr className="unordered" key={index}>
                                                <td className='list start'>
                                                    {element.url}
                                                </td>
                                                <td className='list middle'>
                                                   {element.username}
                                                </td> 
                                                <td className='list end'>
                                                {element.password}
                                                </td>
                                              

                                                <button className="remove" onClick={()=>handleRemove(index)}>Delete</button>
                                               
                                            </tr>)
    
                                   
  return (
    <>
        <div className="header">
        &lt; Welcome to Password Manager / &gt;
        </div>
        <div className="container">
            <div className=" main web">
                <label htmlFor="website">Website URL</label>
                <input type="text" name="Website" id="website" value={newurl} placeholder='Enter the website url' onChange={handleUrl} />
            </div>
            <div className="main user">
                <label htmlFor="username">UserName</label>
                <input type="text" name="Username" id="username" placeholder='Enter the username'  value={newusername} onChange={handleUsername} className='user'/>
            </div>
            <div className="main pass">
                <label htmlFor="password" >Password</label>
                <input type="password" name="Password" id="password"  value={newpassword} placeholder='Enter the password' onChange={handlePassword} />
            </div>
          <button className='btn' onClick={handleObject}>Submit</button>
        </div>
       
        <div className="display"> 
            <p>Passwords will be visible here</p>
            <table>
                <thead>
                    <tr>
                        <td className='hell'>URL</td>
                        <td className='hell'>Username</td>
                        <td className='hell'>Password</td>
                        <td className='hell'>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    
                        {elements}
                  
                </tbody>
            </table>
            <ul></ul>
        </div>
    </>
  );
}

export default Main;
