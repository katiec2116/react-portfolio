import resume from "../../assets/resume.pdf"
function ResumeDisplay() {
    
    return (
      <div className = "my-5">
      <embed className = "my-4" src={resume} width="100%" height="1100px"/>
      </div>
    );
  }
  
  export default ResumeDisplay;