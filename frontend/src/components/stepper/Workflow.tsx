import Empty from "../not found/Empty";

function Workflow() {
  const text = (
    <span>
      Hey what are still doing here, please click on Previous button below to go
      back to
      <strong>"Application Form"</strong>.
    </span>
  );
  return (
    <div className="workflow">
      <div className="container">
        <Empty text={text} />
      </div>
    </div>
  );
}

export default Workflow;
