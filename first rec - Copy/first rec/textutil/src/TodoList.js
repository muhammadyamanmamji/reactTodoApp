import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("")
    const [listData, setlistData] = useState([])
    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData);
        setlistData((listData) => {
            const ubdatedList = [...listData, activity]
            console.log(ubdatedList);
            setActivity('')
            return ubdatedList

        })
    }
    function removeAtivity(i) {
        const ubdatedlistData = listData.filter((elem, id) => {
            return i != id
        })
        setlistData(ubdatedlistData)


    }

    function removeAll(){
        setlistData([])
    }

    return (
        <>
            <div className='container'>
                <div className='header'>TODO LIST</div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                <p className='List-heading'>Here is your list :{")"}</p>
                {
                    listData != [] && listData.map((data, i) => {
                        return (

                            <>
                                <p key={i}>
                                    <div className='listData'>{data}</div>
                                    <div className='btn-position'>
                                        <button onClick={() => removeAtivity(i)}>remove(-)</button>
                                    </div>
                                </p>
                            </>
                        )
                    })
                }
                {listData.length>= 1 && 
                <button onClick={removeAll}>Remove All</button>}
                
                
            </div>
        </>
    )
}

export default TodoList
