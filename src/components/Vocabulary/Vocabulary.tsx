import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from "../../redux/hooks";
import * as wordsActions from '../../redux/slices/wordsSlice';
import { Word } from "../../types/Word";

interface Props {
  words: Array<Word>;
};

function Vocabulary({ words }: Props) {
  const dispatch = useAppDispatch();

  const removeWord = (word) => {
    dispatch(wordsActions.removeWord(word))
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>English</TableCell>
            <TableCell align="right">Ukrainian</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {words.map((word) => (
            <TableRow
              key={word.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {word.eng}
              </TableCell>
              <TableCell align="right">{word.ukr}</TableCell>
              <TableCell align="right" width={50}>
                <IconButton onClick={() => removeWord(word.id)}>
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Vocabulary;