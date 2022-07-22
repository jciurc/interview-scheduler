import './styles/button.scss';

interface Props {
  confirm?: boolean;
  danger?: boolean;
  disabled?: boolean;
  handleClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  const buttonClass: cssClass = ('button '
    + (props.confirm ? 'button--confirm ' : '')
    + (props.danger ? 'button--danger ' : '')
  );

  return (
    <button
      className={buttonClass}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;