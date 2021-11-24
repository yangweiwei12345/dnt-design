import * as React from 'react';
import RcRate from 'rc-rate';

// import Tooltip from '../Tooltip';
import { ConfigContext } from '../config-provider';
import './index.less';

export interface RateProps {
  /**
   * @description 类名前缀
   * @default ant
   */
  prefixCls?: string;
  /**
   * @description star 总数
   * @default 5
   */
  count?: number;
  /**
   * 当前数，受控值
   * @default
   */
  value?: number;
  /**
   * 默认值
   * @default
   */
  defaultValue?: number;
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: boolean;
  /**
   * 是否允许再次点击后清除
   * @default true
   */
  allowClear?: boolean;
  /**
   * 只读，无法进行交互
   * @default false
   */
  disabled?: boolean;
  /**
   * 自定义每项的提示信息
   * @default
   */
  tooltips?: Array<string>;
  /**
   * 选择时的回调
   * @default
   */
  onChange?: (value: number) => void;
  /**
   * 鼠标经过时数值变化的回调
   * @default
   */
  onHoverChange?: (value: number) => void;
  /**
   * 失去焦点时的回调
   * @default
   */
  onBlur?: () => void,
  /**
   * 获取焦点时的回调
   * @default
   */
  onFocus?: () => void,
  /**
   * 按键回调
   * @default
   */
  onKeyDown?: (event: KeyboardEvent) => void,
  /**
   * 自定义字符
   * @default <StarFilled />
   */
  character?: React.ReactNode;
  /**
   * @description  自定义类名前缀
   * @default
   */
  className?: string;
  /**
   * 自定义样式类名
   * @default
   */
  style?: React.CSSProperties;
}

interface RateNodeProps {
  index: number;
}

const Rate = React.forwardRef<unknown, RateProps>(({ prefixCls, tooltips, ...props }, ref) => {
  const characterRender = (node: React.ReactElement, { index }: RateNodeProps) => {
    if (!tooltips) return node;
    return node; //<Tooltip title={tooltips[index]}>{node}</Tooltip>;
  };

  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const ratePrefixCls = getPrefixCls('rate', prefixCls);

  return (
    <RcRate
      ref={ref}
      characterRender={characterRender}
      {...props}
      prefixCls={ratePrefixCls}
      direction={direction}
    />
  );
});

Rate.displayName = 'Rate';

Rate.defaultProps = {
};

export default Rate;