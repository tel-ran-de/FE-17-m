import React from 'react'
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import {Container} from "@material-ui/core";

function App() {
    return (
        <Container maxWidth="md" className="main-container" >
            <h2 className="text-center">ToDo List Application</h2>
            <section id="form">
                <Form/>
            </section>
            <section id="list">
                <ToDoList />
            </section>
        </Container>
    );
}

export default App;
