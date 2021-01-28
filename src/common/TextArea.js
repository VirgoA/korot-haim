import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";

const TextArea = (props) => {
  return (
    <Editor
      className="tinyMCE"
      initialValue="<p></p>"
      apiKey="vn45h6ki675w3yybivtcmkhrdeklzqss4720bt8pfnirac5e"
      init={{
        height: 200,
        width: "100%",
        skin: "material-classic",
        content_css: "material-classic",
        icons: "material",
        menubar: false,
        branding: false,
        directionality: "rtl",
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify",
      }}
      onEditorChange={props.onChange}
    />
  );
};

export default TextArea;
