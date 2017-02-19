'use strict';

function App(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(Payees, null),
    React.createElement(Billers, null)
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));