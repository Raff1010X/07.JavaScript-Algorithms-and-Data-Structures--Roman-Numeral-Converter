class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.convertToRoman = this.convertToRoman.bind(this);
  }

  componentDidMount() {
   this.setState({
      input: 1234,
      output: this.convertToRoman(1234)
    });
  }
  
  convertToRoman(num) {
    const numToRom = [
      { num: 1000, rom: "M" },
      { num: 900, rom: "CM" },
      { num: 500, rom: "D" },
      { num: 400, rom: "CD" },
      { num: 100, rom: "C" },
      { num: 90, rom: "XC" },
      { num: 50, rom: "L" },
      { num: 40, rom: "XL" },
      { num: 10, rom: "X" },
      { num: 9, rom: "IX" },
      { num: 5, rom: "V" },
      { num: 4, rom: "IV" },
      { num: 1, rom: "I" }
    ];
    let result = "";
    numToRom.forEach((el) => {
      while (el.num <= num) {
        result += el.rom;
        num -= el.num;
      }
    });
    return result;
  }

  handleKeyPress(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      output: this.convertToRoman(e.target.value)
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Roman Numeral Converter</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          maxlength="4"
          onKeyPress={this.handleKeyPress}
        ></input>
        <div id="output">{this.state.output}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
