import './resumeCreator.css'
import ResumeForm from '../Components/ResumeForm/ResumeForm'

const ResumeCreator = () => {
    return (
        <div className="container">
            <div className="preview-section">
                <h1>פה יוצג הקורות חיים</h1>
            </div>
            <div className="control-section">
                <h1>קורות חיים</h1>
                <ResumeForm/>
            </div>
        </div>    
    )
}

export default ResumeCreator;