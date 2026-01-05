import React, { useEffect, useState } from "react";

export default function App() {

    useEffect(() => {
        const fruits = document.querySelector('#fruits');

        const handler = (e) => {
            if (e.target.tagName === 'LI') {
              window.location.href = '/' + e.target.id;
            }
        };

        fruits.addEventListener('click', handler);

        return () => {
            fruits.removeEventListener('click', handler);
        };
    }, []);

    return(
        <div>
            <ul id='fruits'>
                <h1>List of fruits</h1>
                <li id='apple'>Apple</li>
                <li id='orange'>Orange</li>
                <li id='grape'>Grapes</li>
            </ul>
        </div>
    )
}

// Instead of adding click listeners to every <li>,
// we add one listener to the parent <ul> and detect which child was clicked.

// Step-by-step flow

// 1) You attach ONE click listener to <ul id="fruits"> User clicks on a <li>

// 2) Fires on <li>

// 3) Bubbles up to <ul>

// 4) <ul>’s listener receives the event

// 5) e.target tells which element was actually clicked

// 6) If it’s an LI, you act on it