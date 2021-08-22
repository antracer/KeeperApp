import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setClick] = useState(false);

    function handleClick() {
      setClick(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <div>
      <form className="create-note">
          {isClicked && <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />}
        <textarea
            name="content"
            onChange={handleChange}
            onClick={handleClick}
            value={note.content}
            placeholder="Take a note..."
            rows={isClicked ? 3 : 1}
          />
        <Zoom in={isClicked}>
          <Fab onClick={(event) => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
    );
}

export default CreateArea;