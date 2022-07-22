import Button from "components/Button";

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
};

const Confirm: React.FC<Props> = (props) => {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Delete the appointment?</h1>
      <section className="appointment__actions">
        <Button danger handleClick={props.onCancel}>Cancel</Button>
        <Button danger handleClick={props.onConfirm}>Confirm</Button>
      </section>
    </main>
  );
};

export default Confirm;