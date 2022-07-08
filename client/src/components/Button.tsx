import classNames from "classnames";
import './styles/Button.scss';

interface Props {
  confirm: boolean;
  danger: boolean;
  disabled: boolean;
  onClick: () => void;
  children: string;
};

const Button: React.FC<Props> = (props) => {
  const buttonClass = classNames('button', {
    'button--confirm': props.confirm,
    'button--danger': props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;