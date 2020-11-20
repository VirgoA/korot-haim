import './resumeForm.css'

const ResumeForm = () => {
    return (
        <form>
            {/* 
                We should probably split each section of the form to be its own component,
                it will make it easier to add and remove sections as we go.
            */}
            <h3>פרטים אישיים</h3>
            <div className="form-section">

                <div className="row-inputs">
                    <div className="input-box">
                        <label>שם פרטי</label>
                        <input dir="rtl"></input>
                    </div>

                    <div className="input-box">
                        <label>שם משפחה</label>
                        <input dir="rtl"></input>
                    </div>
                </div>
W
                <div className="row-inputs">
                    <div className="input-box">
                        <label>מייל</label>
                        <input></input>
                    </div>

                    <div className="input-box">
                        <label>טלפון</label>
                        <input></input>
                    </div>
                </div>

            </div>
        </form> 
    )
}

export default ResumeForm;