
import React from "react";
class Comp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      comment: [],
    };
    this.myRef = React.createRef();
  }

  handlerClick = () => {
      let current = this.state.count;
      current++;
      this.setState({
          count: current
      });
  };

  addComment = () => {
      let comment = this.myRef.current.value;
      let comments = this.state.comment;

      comments.push(comment);
      this.setState({
          'comments': comments
      });
      this.myRef.current.value = ''

  }

  render() {
    return (
      <>
        <h1>State</h1>
        <div>
          <button onClick={this.handlerClick}>This button change state</button>
        </div>
        <div>{this.state.count % 2 === 0 ? 'even' : 'out' }</div>
        <div>
            {this.state.count}
        </div>
        <div>
            <textarea ref={this.myRef}></textarea>
        </div>
        <div>
            <button onClick={this.addComment}>Add Comment</button>
        </div>
        <div>
            <ul>
                {this.state.comment.map((item,index) => <li key={index.toString()}>{item}</li>)}
            </ul>
        </div>
      </>
    );
  }
}

export default Comp1;
