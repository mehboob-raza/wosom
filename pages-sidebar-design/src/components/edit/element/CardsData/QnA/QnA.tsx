import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { styles } from './styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface QuestionInterface {
  ques: string,
  ans: string
}

const QnA = () => {

  const [drop, setDrop] = useState("");
  const [allQuestions, setAllQuestions] = useState<QuestionInterface[]>([{ ques: "Added Item", ans: "Answer" }]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');

  const handleAddQuestion = () => {
    if (question && answer) {
      setAllQuestions([...allQuestions, { ques: question, ans: answer }])
    }
    setQuestion("")
    setAnswer("")
  };

  const handleItemClick = (item: QuestionInterface) => {
    setDrop(item.ques)
    setEditQuestion(item.ques)
    setEditAnswer(item.ans)
  }

  const handleSave = () => {
    if (editQuestion && editAnswer) {
      const filterData = allQuestions.filter((i) => i.ques != drop)
      setAllQuestions([...filterData, { ques: editQuestion, ans: editAnswer }])
    }
    setDrop("")
    setEditQuestion("")
    setEditAnswer("")
  }

  const handleDeleteItem = (item: QuestionInterface) => {
    const newData = allQuestions.filter((i: QuestionInterface) => i != item)
    setAllQuestions(newData)
  }







  return (
    <Box mt={3}>
      <Box>
        <Typography sx={styles.mainHeading}>Add QnA</Typography>
      </Box>
      <Box mt={2} mr={3} ml={3} >
        <Box mt={2}  >
          <Typography sx={styles.miniHeading}>Question</Typography>

          <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='Enter Question'
            variant="outlined"
            onChange={(event) => setQuestion(event.target.value)}
            value={question}
          />

        </Box>

        <Box mt={2} >
          <Typography sx={styles.miniHeading}>Answer</Typography>
          <TextField
            sx={styles.commonWidth}
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder='Enter Answer here...'
            defaultValue=""
            onChange={(event) => setAnswer(event.target.value)}
            value={answer}
          />
        </Box>

        <Box sx={styles.addMoreDiv}>
          <Button onClick={() => handleAddQuestion()} sx={styles.addMoreBtn}>Add</Button>
        </Box>
      </Box>
      <Box>
        <Typography sx={styles.mainHeading}>Added Items</Typography>

        {allQuestions.map((item: QuestionInterface) => (
          <Box>
            <Box border={"1px solid rgba(169, 169, 169, 0.6)"} borderRadius={1} ml={3} mt={1} mr={3} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography onClick={() => handleItemClick(item)} sx={[styles.subHeading, { padding: "15px", marginBottom: '0px', cursor: 'pointer' }]}>{item?.ques}</Typography>
              <Box display={'flex'}>
                {drop == item.ques && <Box>
                  <img height={23} width={14} src={"../../../../../../src/assets/Icons/Edit.svg"} alt='image' style={{ cursor: 'pointer', }} />
                  <img height={23} width={14} onClick={() => handleDeleteItem(item)} src={"../../../../../../src/assets/Icons/Delete.svg"} alt='image' style={{ cursor: 'pointer', marginLeft: '7px' }} />
                </Box>}
                {drop == item.ques ? <KeyboardArrowDownIcon sx={{ marginRight: '5px' }} /> : <KeyboardArrowUpIcon sx={{ marginRight: '5px' }} />}
              </Box>
            </Box>
            {drop == item.ques && <Box mr={3} ml={3} mb={3}>
              <Box mt={2}  >
                <Typography sx={styles.miniHeading}>Question</Typography>

                <TextField sx={styles.commonWidth}
                  id="outlined-basic"
                  placeholder='Enter Question'
                  variant="outlined"
                  onChange={(event) => setEditQuestion(event.target.value)}
                  value={editQuestion}
                />

              </Box>

              <Box mt={2} >
                <Typography sx={styles.miniHeading}>Answer</Typography>
                <TextField
                  sx={styles.commonWidth}
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  placeholder='Enter Answer here...'
                  defaultValue=""
                  onChange={(event) => setEditAnswer(event.target.value)}
                  value={editAnswer}
                />
              </Box>

              <Box sx={styles.addMoreDiv}>
                <Button onClick={() => handleSave()} sx={styles.addMoreBtn}>Save</Button>
              </Box>
            </Box>}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default QnA