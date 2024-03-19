import './App.css';

function App() {
  return (
      <div className="App">

        <header id="header" className="App-header">
          <h1> Simple Calculator </h1>
        </header>

        <div id="area">
          <form>
            <div id="intro">
              <p>This is a simple calculator:</p>
              <p>Enter valid numbers in the two input fields, select the math symbols, then click on the "=" button to calculate and get the result.</p>
              <br />
              <p>The current calculation methods available:</p>
              <p>* Addition: a + b</p>
              <p>* Subtraction: a - b</p>
              <p>* Multiplication: a * b</p>
              <p>* Division: a / b</p>
              <p>* Exponentiation: a^b</p>
            </div>
            
            <div id="input">
              <label>Number 1: </label>
              <input type="number" id="num_1" />

              <br />
              <br />

              <select id="math_symbol">
                <option value="add"> + </option>
                <option value="sub"> - </option>
                <option value="mul"> * </option>
                <option value="div"> / </option>
                <option value="pow"> ^ </option>
              </select>

              <br/>
              <br/>

              <label>Number 2: </label>
              <input type="number" id="num_2" />

              <br />
              <br />

              <input type="button" id="button" value="=" onClick={cal} />
            </div>
            <div id="output">
              <p>
                <strong id="message"></strong>
              </p>
            </div>
          </form>
        </div>
    </div>
  );
}

function cal(event) {
  const input_1 = document.getElementById('num_1').value;
  const input_2 = document.getElementById('num_2').value;

  // check input number
  if (input_1 === '' || input_2 === '') {
    event.preventDefault();
    alert('Please enter the numbers in both input fields first');
  } else {
    const num_1 = parseFloat(input_1);
    const num_2 = parseFloat(input_2);
    const method = document.getElementById('math_symbol').value;
    let result;
    let symbol;

    switch (method) {
      case 'add':
        result = num_1 + num_2;
        symbol = '+';
        break;
      case 'sub':
        result = num_1 - num_2;
        symbol = '-';
        break;
      case 'mul':
        result = num_1 * num_2;
        symbol = '*';
        break;
      case 'div':
        if (num_2 === 0) {
          result = 'error; cannot divide by 0';
          symbol = '/';
        } else {
          result = num_1 / num_2;
          symbol = '/';
        }
        break;
      case 'pow':
        result = Math.pow(num_1, num_2);
        symbol = '^';
        break;
      default:
        result = 'Invalid operation';
    }

    // change text color if error
    if (result === 'error; cannot divide by 0') {
      document.getElementById('message').style.color = 'red';
    } else {
      document.getElementById('message').style.color = 'black';
    }

    const message = `${num_1} ${symbol} ${num_2} = ${result}`;
    document.getElementById('message').innerHTML = message;
  }
}


export default App;
