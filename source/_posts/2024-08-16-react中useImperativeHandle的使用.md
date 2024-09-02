---
title: react中useImperativeHandle的使用
date: 2024-08-16 15:27:44
cover: 2018/04/27/登录/cover.jpg
categories: react开发
tags:
  - Web开发
  - react开发
author:
    nike: lijinglun
---
<center>【引言】</center>
页面中经常会有写全局的Modal、Alert、Toast、Login、等组件，这些组件通常会被用到很多页面中，如果每个页面都写一个Modal、Alert、Toast、Login、等组件，看起来不够美观，也不利于代码的维护。通过执行方法，即可调用全局的组件，而不需要每个页面都写一个Modal、Alert、Toast、Login、等组件。


<center>【实现1】</center>
子组件
```javascript
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef();

    // 使用 useImperativeHandle 自定义暴露给父组件的实例值
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus(); // 暴露 focus 方法
        },
        getValue: () => {
            return inputRef.current.value; // 暴露获取输入值的方法
        }
    }));

    return <input ref={inputRef} type="text" />;
});

```

父组件

```javascript
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const childRef = useRef();

    const handleFocus = () => {
        childRef.current.focus(); // 调用子组件的 focus 方法
    };

    const handleGetValue = () => {
        console.log(childRef.current.getValue()); // 获取子组件的输入值
    };

    return (
        <div>
            <ChildComponent ref={childRef} />
            <button onClick={handleFocus}>Focus Input</button>
            <button onClick={handleGetValue}>Get Input Value</button>
        </div>
    );
};

export default ParentComponent;

```

<center>【实现2】</center>
```javascript

let captcha = null;

const Captcha = () => {
    const [show, setShow] = useState(false);
    const captchaRef = useRef(null);

    useImperativeHandle(captchaRef, () => ({
        show() {
            setShow(true); // 暴露 show 方法
        },
        hide() {
            setShow(false);// 暴露 hide 方法
        }
    }));

    useEffect(() => {
        captcha = {
            show: () => {
                captchaRef.current.show(); // 暴露 show 方法
            },
            hide: () => {
                captchaRef.current.hide(); // 暴露 hide 方法
            }
        };

        return () => {
            captcha = null;
        };
    }, []);

    return (
        show && <div className="captcha-b" ref={captchaRef}></div>
    );
};

export {
    Captcha,
    captcha
};
```

<center>【总结】</center>
useImperativeHandle 是 React 中用于自定义暴露给父组件的实例值的 hook，它可以让子组件暴露给父组件方法，使得父组件可以直接调用子组件的方法。把组件挂载在根节点上，可以通过暴露出来的方法去调用。例上述方法2中，在引入captcha后，可以在组件需要的时机执行captcha.show()、captcha.hide() 方法，实现调用。