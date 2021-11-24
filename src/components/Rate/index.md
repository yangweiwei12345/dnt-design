---
title: Rate 评分
group:
  path:
  title: 基础组件
---

# Rate 评分

> 评分组件

## 何时使用

- 对评价进行展示
- 对事物进行快速的评级操作

## 代码演示

```jsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => <Rate />;
```

```jsx
/**
 * title: 半星
 * desc: 支持选中半星
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => <Rate allowHalf defaultValue={2.5} />;
```

```jsx
/**
 * title: 文案展示
 * desc: 给评分组件加上文案展示
 */
import React, { useState } from 'react';
import { Rate } from '@cspire/dnt-design';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default () => {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  );
};
```

```jsx
/**
 * title: 只读
 * desc: 只读，无法进行鼠标交互。
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => <Rate disabled defaultValue={2.5} />;
```

```jsx
/**
 * title: 清除
 * desc: 支持允许或者禁用清除
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => (
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </>
);
```

```jsx
/**
 * title: 其他字符
 * desc: 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => (
  <>
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);
```

```jsx
/**
 * title: 自定义字符
 * desc: 可以使用 (RateProps) => ReactNode 的方式自定义每一个字符。
 */
import React from 'react';
import { Rate } from '@cspire/dnt-design';

export default () => (
  <>
    <Rate defaultValue={2} character={({ index }) => index + 1} />
  </>
);
```

## API

<API hideTitle></API>
