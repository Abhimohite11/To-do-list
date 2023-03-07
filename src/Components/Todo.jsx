import React, { useState } from 'react';

function Todo(props) {
    const[acti,setActi]=useState('')
    const[listdata,setListdata]=useState('')
    function addactivity(){
        setListdata((listdata=>{
            const updatelist=[...listdata,acti]
            setActi('')
            console.log(updatelist)
            return updatelist
        }))
    }
    function removeActivity(i){
        const updatelistData=listdata.filter((elem,id)=>{
            return i!=id
        })
        setListdata(updatelistData)
    }
    function removeall(){
        setListdata([])
    }
    return (
        <div className='container'>
            <div className='header'>Todo List</div>
            <input type="text" placeholder='Add activity' value={acti} onChange={(e)=>{setActi(e.target.value)}}/>
            <button onClick={addactivity}>Clickme</button>
            <p className='List-Heading'>Here is your list:</p>
            {listdata!=[] && listdata.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className='listdata'>{data}</div>
                        <div className='btn-primary'><button onClick={()=>{removeActivity(i)}}>Remove</button></div>
                        </p>
                        
                    </>
                )
            })}
            <button className='ab' onClick={removeall}>Remove all</button>
        </div>
    );
}

export default Todo;