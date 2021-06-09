import React from 'react'
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div className="container pt-4" >
            <h2 className="text-center">ToDo List Application</h2>
            <section id="form">
                <Form/>
            </section>
            <section className="list-wrapper">
                <ToDoList />
            </section>
        </div>
    );
}

export default App;
