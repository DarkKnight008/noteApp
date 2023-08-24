import React, { useState } from 'react'


export default function NoteForm(props) {
    const [notes, setnotes] = useState([])
    const [newNote, setnewNote] = useState("")

    let handleOnChange = (event) => {
        setnewNote(event.target.value);
    }

    const handleEdit = (id, newText) => {
        let newNote = notes.map((note) =>
            note.id === id ? { ...note, text: newText } : note
        )

        setnotes(newNote)
    }

    const handleDelete = (id) => {
        let updatedNotes = notes.filter((note) => note.id !== id)

        setnotes(updatedNotes)
    }

    const handleNewNote = () => {
        const nodeId = Date.now()

        const note = {
            id: nodeId,
            text: newNote
        }

        setnotes([...notes, note])

        setnewNote("")
    }

    return (
        <div className="container">
            <div class="mb-3">
                <h2>{props.title}</h2>
                <textarea class="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={newNote} rows="3"></textarea>
                <button className="btn btn-primary my-3" onClick={handleNewNote}><strong>Add Note</strong></button>
            </div>

            <div className="container">
                <ul className="list-unstyled">
                    {notes.map((note) => (

                        <li key={note.id}>{
                            <div class="card my-2">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    {note.text}
                                    <div>
                                        <button className="btn btn-secondary mx-1" onClick={() => handleEdit(note.id, prompt())}>Edit</button>
                                        <button className="btn btn-danger mx-1" onClick={() => handleDelete(note.id)}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        }</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
