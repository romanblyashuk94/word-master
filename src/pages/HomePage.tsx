import { useState } from "react";
import Vocabulary from "../components/Vocabulary/Vocabulary";
import { useAppSelector } from "../redux/hooks";
import { Button, Modal } from "@mui/material";
import AddingWordForm from "../components/AddingWordForm/AddingWordForm";


function HomePage() {
  const { vocabulary } = useAppSelector(state => state.words);

  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ display: 'block', width: 250, margin: '0 auto 15px' }}
        onClick={() => setIsAdding(true)}
      >
        Add new words
      </Button>

      {vocabulary.length > 0
        ? <Vocabulary words={vocabulary} />
        : <p>Add some words to your vocabulary</p>}

      {isAdding && (
        <Modal
          open={isAdding}
          onClose={() => setIsAdding(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <AddingWordForm onClose={() => setIsAdding(false)} />
          </div>
        </Modal>
      )
      }
    </div >
  );
}

export default HomePage;