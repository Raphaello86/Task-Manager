import React, { useState } from "react";


function MainView() {
    const [team, setTeam] = useState(false);
    const [task, setTask] = useState("");
    const [addTaskButton, setAddTaskButton] = useState([]);
    const [deviated, setDeviated] = useState(false);
    const [standard, setStandard] = useState(false);
    const [rafalKluska, setRafalKluska] = useState([]);
    const [panX, setPanX] = useState([]);
    const [panY, setPanY] = useState([]);
    const [paniH,setPaniH] = useState([]);
    const [panS, setPanS] = useState([]);
    const [panB, setPanB] = useState([]);
    const [panC, setPanC] = useState([]);
    const [paniG, setPaniG] = useState([]);
    
    const addTaskBtn = () => {
        setAddTaskButton(prevState => [...prevState,task])
        setTask('')
        setRafalKluska(prevState => [...prevState, task])
    }
    const addTask = (e) => {
        setTask(e.target.value)
    }
    const addSelect = () => {
        setTeam(prevState=> prevState === false ? true : false);
        
    }
    const showDeviated = () => {
        setDeviated(true)
        setStandard(false)
    }

    const showStandard = () => {
        setStandard(true)
        setDeviated(false)
    }

    const addTaskRafalKluska = () => {
        setRafalKluska(prevState => [...prevState,task])
        setTask('')

    }
    const addTaskPanX = () => {
        setPanX(prevState => [...prevState,task])
        setTask('')
    }
    const addTaskPanY = () => {
        setPanY(prevState => [...prevState,task])
        setTask('')
    }
    const addTaskPaniH = () => {
        setPaniH(prevState => [...prevState,task])
        setTask('')
    }

    const addTaskPanS = () => {
        setPanS(prevState => [...prevState,task])
        setTask('')
    }
    const addTaskPanB = () => {
        setPanB(prevState => [...prevState,task])
        setTask('')
    }
    const addTaskPanC = () => {
        setPanC(prevState => [...prevState,task])
        setTask('')
    }
    const addTaskPaniG = () => {
        setPaniG(prevState => [...prevState,task])
        setTask('')
    }
    const removeTaskRafalKluska = id => {
        setRafalKluska(prevState => prevState.filter(operation => operation.id !== id));
    }

    return (
        <>
            <div className='container'>
                <nav className='header'>
                    <div className="header__container">
                            <div className='header__link'>
                                <h1 onClick={addSelect}>Team</h1>
                            </div>
                        {team && (
                            <div className='team__select'>
                                <h2 onClick={showDeviated} className='deviated'>Deviated</h2>
                                <h2 onClick={showStandard} className='standard'>Standard</h2>
                            </div>
                        )}
                        
                    </div>
                    {/*<div className='header__link'>*/}
                    {/*    <h1>Person</h1>*/}
                    {/*</div>*/}
                    {/*<div className='header__link'>*/}
                    {/*    <h1>Date</h1>*/}
                    {/*</div>*/}
                </nav>
                {deviated && 
                        (<div className='deviated__person'>
                            <h3 className='person'>Rafal Kluska <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskRafalKluska}/></h3>
                            <h3 className='person'>Pan X <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPanX}/></h3>
                            <h3 className='person'>Pan Y <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPanY}/></h3>
                            <h3 className='person'>Pani H <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPaniH}/></h3>

                        </div>)}
                    {standard && 
                        (<div className='standard__person'>
                            <h3 className='person'>Pan S <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPanS}/></h3>
                            <h3 className='person'>Pan B <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPanB}/></h3>
                            <h3 className='person'>Pan C <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPanC}/></h3>
                            <h3 className='person'>Pani G <img src= 'https://icons-for-free.com/iconfiles/png/512/plus+icon-1320184416519705957.png' style={{width:20, height:20}} onClick={addTaskPaniG}/></h3>
                    </div>)}
                <div>
                    <input type='text' placeholder='Add task' value={task} onChange={addTask} className='task__name' />
                </div>
                {deviated &&
                <div className='deviated__person'>
                <ul className='person__list'>
                    {rafalKluska.map((element,index) => {
                        return <li key={index}>{element}<img src='https://www.flaticon.com/svg/static/icons/svg/860/860778.svg' style={{width:15, height:15}} onClick={removeTaskRafalKluska}/></li>
                    })}
                </ul>
                    <ul className='person__list'>
                        {panX.map((element,index) => {
                            return <li key={index}>{element}<img src='https://www.flaticon.com/svg/static/icons/svg/860/860778.svg' style={{width:20, height:20}}/></li>
                        })}
                    </ul>
                    <ul className='person__list'>
                        {panY.map((element,index) => {
                            return <li key={index}>{element}<img src='https://www.flaticon.com/svg/static/icons/svg/860/860778.svg' style={{width:20, height:20}}/></li>
                        })}
                    </ul>
                    <ul>
                        {paniH.map((element,index) => {
                            return <li key={index} className='person__list' >{element}</li>
                        })}
                    </ul>
                </div>}
                {standard &&
                <div  className='standard__person'>
                    <ul>
                        {panS.map((element,index) => {
                            return <li key={index} className='person__list' >{element}</li>
                        })}
                    </ul>
                    <ul>
                        {panB.map((element,index) => {
                            return <li key={index} className='person__list' >{element}</li>
                        })}
                    </ul>
                    <ul>
                        {panC.map((element,index) => {
                            return <li key={index} className='person__list' >{element}</li>
                        })}
                    </ul>
                    <ul>
                        {paniG.map((element,index) => {
                            return <li key={index} className='person__list' >{element}</li>
                        })}
                    </ul>
                </div>}
                {/*<div className='button__view'>*/}
                {/*    <button onClick={addTaskBtn} className='button'>Wyślij</button>*/}
                {/*</div>*/}

                <section>
                    <div className='made__by'>
                        <img src='https://www.pbd.org.pl/wp-content/uploads/2019/02/3m-2.png' />
                    </div>
                </section>
            </div>
        </>
    );
}

export default MainView;