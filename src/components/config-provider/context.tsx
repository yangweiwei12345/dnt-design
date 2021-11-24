import * as React from 'react';
// import defaultRenderEmpty, { RenderEmptyHandler } from './renderEmpty';
// import { Locale } from '../locale-provider';
import { SizeType } from './SizeContext';
// import { RequiredMark } from '../form/Form';

export interface CSPConfig {
  nonce?: string;
}

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  // renderEmpty: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  // locale?: Locale;
  pageHeader?: {
    ghost: boolean;
  };
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
  // form?: {
  //   requiredMark?: RequiredMark;
  // };
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `ant-${suffixCls}` : 'ant';
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,

  // renderEmpty: defaultRenderEmpty,
});

export const ConfigConsumer = ConfigContext.Consumer;
