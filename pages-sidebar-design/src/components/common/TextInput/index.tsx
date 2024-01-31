import { styles } from './styles'
import { TextField } from '@mui/material'

const TextInput = () => {
    return (
        <TextField sx={styles.commonWidth}
            id="outlined-basic"
            placeholder='My wedding Story'
            variant="outlined"
        />
    )
}

export default TextInput