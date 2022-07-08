import classNames from "classnames";
import './styles/Button.scss';

type Props = {
  confirm: string,
  danger: string,
  disabled: boolean,
  onClick: Function,
  children: [],
};

const Button = (props: Props) => {
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