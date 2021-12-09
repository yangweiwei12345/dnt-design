import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  /**
   * 类名
   * @default
   */
  className?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 尺寸
   * @default 'lg'
   */
  size?: ButtonSize;
  /**
   * 按钮类型
   * @default 'default'
   */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**
   * link类型的href
   * @default
   */
  href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children, href } = props;

  // btn, btn-lg btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
