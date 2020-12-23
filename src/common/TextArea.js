import { TextField } from '@material-ui/core';

const TextArea = () => {
    return (
        <TextField 
            variant="filled" 
            label="פירוט" 
            multiline 
            rows={3}
            style={{
            flex: 1,
        }}
        />
    )
}

export default TextArea