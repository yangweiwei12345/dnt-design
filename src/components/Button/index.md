---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  path:
  title: 基础组件
---

## Button

### 按钮类型

```tsx
/**
 * title: 按钮类型
 * desc:
 */
import React from 'react';
import { Button } from '@cspire/dnt-design';

export default () => {
  return (
    <>
      <Button>default</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link">link</Button>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
