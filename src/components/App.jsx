import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes.js';

function App(props) {
    return (
        <React.StrictMode>
            <Header />
            {notes.map(note => <Note key={note.key} title={note.title} content={note.content} />)}
            <Footer />
        </React.StrictMode>
    );
}

export default App;