import './resumeCreator.css'
import ResumeForm from './ResumeForm'

const ResumeCreator = () => {
    return (
        <div className="container">
            <div className="resume-control">
                <h1>קורות חיים</h1>
                <ResumeForm/>
            </div>
            <div className="resume-preview">
                <h1>פה יוצג הקורות חיים</h1>
            </div>
        </div>    
    )
}

export default ResumeCreator;