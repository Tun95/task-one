import Upload from "./forms/Upload";
import Personal from "./forms/Personal";
import Profile from "./forms/Profile";
import AdditionalQts from "./forms/AdditionalQts";

function ApplicationForm() {
  return (
    <div className="application_form form">
      <div className="container">
        <div className="main_content">
          <Upload />
          <Personal />
          <Profile />
          <AdditionalQts />
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
