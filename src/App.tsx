import "./App.css";

function App() {
  let test = 10;
  let isLogin = true;

  return (
    <div>
      <p>{test}</p>
      <p>{isLogin}</p>
      <p>falsy: {0}</p>
      <p>{isLogin ? "da login" : "chua logic"}</p>
      {/* <p>{isLogin && "da login"}</p>
      <p>{!isLogin && "chua login"}</p> */}
    </div>
  );
}

export default App;

// tsx: typescript xml/html
// jsx: javascript xml

// template string: ${}

// true
// falsy: false, undefined, null, NaN, ''

//

let result = false && "da login";

result = false;

// hooks -> func / class
// function component vs class component

// component -> thành phần

// react: 2012 2013 -> class component(state)
// 2018: 16.8 -> hooks -> function component + hooks
// function

// hooks: useState, useEffect, useRef, useCallback,
