import { Box, Button, TextField } from "@mui/material";
import { uid } from 'uid';
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import * as wordsActions from '../../redux/slices/wordsSlice';
import { Word } from "../../types/Word";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddingWordForm() {
  const dispatch = useAppDispatch();

  const [englishWord, setEnglishWord] = useState('');
  const [ukrainianWord, setUkrainianWord] = useState('');

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newWord: Word = {
      id: uid(),
      eng: englishWord,
      ukr: ukrainianWord,
    }

    dispatch(wordsActions.addWord(newWord))

    setEnglishWord('')
    setUkrainianWord('')
  }

  return (
    <Box sx={modalStyle}>
      <form onSubmit={handleSumbit}>
        <TextField
          value={englishWord}
          onChange={e => setEnglishWord(e.target.value)}
          sx={{ mb: 2 }}
          label="English"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          value={ukrainianWord}
          onChange={e => setUkrainianWord(e.target.value)}
          sx={{ mb: 2 }}
          label="Ukrainian"
          variant="outlined"
          fullWidth
          required
        />

        <Button
          variant="contained"
          sx={{ display: 'block', width: 100, margin: '0 auto 15px' }}
          type="submit"
        >
          Add
        </Button>
      </form>
    </Box>
  );
}

export default AddingWordForm;