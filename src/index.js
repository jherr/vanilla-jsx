/** @jsx dom */

const dom = (name, props, ...children) => {
  const elem = document.createElement(name);

  Object.keys(props || {}).forEach(k => {
    if (k === 'style') {
      Object.keys(props[k]).forEach(sk => {
        elem.style[sk] = props[k][sk];
      });
    } else {
      elem[k] = props[k];
    }
  });

  (children || []).forEach(child => {
    if(Array.isArray(child)) {
      child.forEach(c => elem.appendChild(c));
    } else if (typeof child === 'object') {
      elem.appendChild(child);
    } else {
      elem.appendChild(document.createTextNode(child));
    }
  });

  return elem;
};

const arr = ['Hey', 'There', 'Jack'];

const foo = (
  <div>
    <div className="foo" style={{ fontSize: 50 }}>Hi there</div>
    {arr.map(name => (<div>{name}</div>))}
  </div>
);

document.getElementById('test').appendChild(foo);
