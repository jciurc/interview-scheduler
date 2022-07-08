import classNames from "classnames";
import './styles/Button.scss';

interface Props {
  confirm?: boolean;
  danger?: boolean;
  disabled?: boolean;
  handleClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  const buttonClass = classNames('button', {
    'button--confirm': props.confirm,
    'button--danger': props.danger,
  });

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