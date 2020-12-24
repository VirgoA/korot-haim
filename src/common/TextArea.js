import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const TextArea = (props) => {
    return (
        <TextField
            variant="filled" 
            label="פירוט" 
            multiline 
            rows={3}
            style={{
                flex: 1
            }}
            // onChange={(e)=>{
            //     props.handleState(e.target.value)
            // }}
        />
    )
}

export default TextArea