# vanilla-jsx

A thought experiment in using the JSX parser to create vanilla DOM elements. So instead of something like this:

```js
document.getElementById('test').innerHTML = `<div>...<div>`;
```

Or this:

```js
const myDiv = document.createElement('div');
myDiv.className = 'foo';
myDiv.setAttribute('blah', 'baz');
document.getElementById('test').appendChild(myDiv);
```

You could do this:

```js
/** @jsx dom */
import dom from 'something';

document.getElementById('test').appendChild(
  <div>
    Foobar
    ...
    <span>Blah</span>
    {someArray.map(elem => <div>{elem}</div>)}
  </div>
);
```
