import React, { useState } from 'react';
import Profile from './Profile';
import Interest from './Interest';
import Settings from './Settings';
import './TabForm.css';

const TabFormNav = () => {

    const [activeTab,setActiveTab] = useState(0);
    const tabs = [
        {
            name: 'Profile',
            component: Profile,
            validation: () => { //Note we also have javascript regex to test email and all.
                const err = {};
                if(!data.name || data.name.length<2)
                    err.name = 'Name is not valid'
                if(!data.age || data.age <18)
                    err.age = 'Age is not valid'
                if(!data.email || data.email.length<2)
                    err.email = 'email is not valid'

                setError(err);
                return err.name || err.age || err.email ? false : true //if no errors, return true
            }
        },
        {
            name: 'Interest',
            component: Interest,
            validation: () => {
                const err = {};
                if(!data.interest || data.interest.length<1) //atleast one to be checked
                 err.interest = 'Select atleast one interest'

                setError(err);
                return err.interest  ? false : true
            }
        },
        {
            name: 'Settings',
            component: Settings,
            validation: () => {
                return true
            }
        }
    ]
    const ActiveTabComponent = tabs[activeTab].component;

    const [data,setData] = useState({
        name: 'Sheetal',
        age: '23',
        email: 'abc@gmail.com',
        interest: ['coding','badminton'],
        theme: 'dark'
    })

    const handlePrev = () => {
        if(tabs[activeTab].validation())
            setActiveTab((curr)=> curr - 1);
    }

    const handleNext = () => {
        if(tabs[activeTab].validation())
            setActiveTab((curr)=> curr + 1);
    }

    const handleSubmit = () => { console.log("data here", data)}

    const [error,setError] = useState({})

    return(
        <div>
            <div className='navContainer'>
            {tabs.map((item,index)=>(<div key={index} className='navItems' onClick={()=> { tabs[activeTab].validation() && setActiveTab(index)}}>{item.name}</div>))}
            </div>
            <div className='tabBody'>
              <ActiveTabComponent data={data} setData={setData} error={error}/>
            </div>
            <div>
                {activeTab > 0 && <button onClick={handlePrev}>Previous</button>}
                {activeTab < tabs.length - 1 && <button onClick={handleNext}>Next</button>}
                {activeTab == tabs.length - 1 && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    )
}
export default TabFormNav 