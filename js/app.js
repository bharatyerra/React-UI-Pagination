function App(props) {
    return (
      <div>
          <Payees/>
          <Billers/>
      </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);