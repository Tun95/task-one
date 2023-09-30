import Empty from "../not found/Empty";

function Preview() {
  const text = <span>Hey c'mon, nothing to see here please. </span>;
  return (
    <div className="preview">
      <div className="container">
        <Empty text={text} />
      </div>
    </div>
  );
}

export default Preview;
