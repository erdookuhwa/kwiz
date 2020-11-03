import React, { useState, useEffect } from 'react'
import './App.css'
import firebase from './firebase'

function Quizzes(props) {
    // define states for holding quizzes
    const [quizzes, setQuizzes] = useState([])
    const [loading, setLoading] = useState(false)

    // make reference call to db to get all saved quizzes
    const db = firebase.firestore().collection("quizzes");

    // write function to get all quizzes in this collection
    function getQuizzes() {
        setLoading(true);
        db.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setQuizzes(items);
            setLoading(false)
        })

    }

    useEffect(() => {
        getQuizzes();
    }, [])

    let quizEl = quizzes.map((quiz) => <Quizzes {...quiz} />)


    return (
        <div>
            <h2>{props.quizTwo}</h2>
            {quizEl}
        </div>
    )
}


export default Quizzes;