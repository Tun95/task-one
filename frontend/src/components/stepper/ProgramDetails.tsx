import Empty from "../not found/Empty";

function ProgramDetails() {
  const text = (
    <span>
      Nothing to see here, please click on Next button below to proceed to{" "}
      <strong>"Application Form"</strong> for more info.
    </span>
  );

  return (
    <div className="program_details">
      <div className="container">
        <Empty text={text} />
      </div>
    </div>
  );
}

export default ProgramDetails;
