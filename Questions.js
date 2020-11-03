import React, { useState, useEffect } from 'react'
import './App.css'
import firebase from './firebase'

function Questions(props) {
    // define states for holding questions
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    // make ref call to db in firestore to get questions
    const qz = firebase.firestore().collection("quizzes/CD5sniFI8JWDZFUQmQC7/questions")

    // function to grab data for the questions (qz)
    function getQuestions() {
        setLoading(true);
        qz.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setQuestions(items);
            setLoading(false)
        });
    }

    useEffect(() => {
        getQuestions();
    }, [])

    // if (loading) {
    //     return <h5>Page is loading...</h5>
    // }

    // hold questions element
    // let qElems = questions.map((question) =>  <Questions {...question} /> )

    return (
        <div>
            <h2>{props.question}</h2>
            <h2>{props.correct}</h2>
            {/* {qElems} */}
        </div>
    )
}

export default Questions;
