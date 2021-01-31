import React from "react";
import "./extraControls.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, Tooltip, CircularProgress } from "@material-ui/core";
import { downloadResume } from "../../api";
import ReactDOMServer from "react-dom/server";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import BlueTemplate from "./templates/BlueTemplate";
import requestSlice from "./state/requestSlice";

function ExtraControls(props) {

    const dispatch = useDispatch();
    
    const { 
      sentDownloadRequest, 
      downloadRequestSucceeded,
      downloadRequestFailed
    } = requestSlice.actions;

    const requestData = useSelector((state) => state.request);
    const formData = useSelector((state) => state.form);

    const downloadRequest = async () => {
        if(requestData.downloadRequest.status !== "loading") {
    
          dispatch(sentDownloadRequest());
          try {
    
            const res = await downloadResume(
              ReactDOMServer.renderToStaticMarkup(props.renderTemplate())
            )
    
            if(res.status === 200) {
              await new Promise(r => setTimeout(r, 2000));
              dispatch(downloadRequestSucceeded())
            } else {
              dispatch(downloadRequestFailed());
            }
    
          } catch(error) {
            dispatch(downloadRequestFailed());
          }
    
        }
      }

  return (
    <div className="extra-controls">
        {
            requestData.downloadRequest.status !== "loading" 
                ?
                (
                    <Tooltip title="הורדה">
                        <Button
                          variant="contained"
                          size="large"
                          color="secondary"
                          id="download-btn"
                          onClick={downloadRequest}
                        >
                          <SaveAltIcon style={{fontSize:"1.5em"}}/>
                        </Button>
                    </Tooltip>
                )
                :
                (   
                    <CircularProgress color="secondary"/>
                )
        }
    </div>
  );
}

export default ExtraControls;