import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import CommentBox from './components/CommentBox.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.get(window.location.pathname);
  }

  get() {
    axios.get("http://localhost:3007/57")
      .then(res => {
        const reviews = res.data;
        reviews.sort((a, b) => {
          return b.helpfulComment - a.helpfulComment;
        })
        this.setState({reviews})
      })
      .catch(err => {
        console.log(err);
      })
  }

  submit(data) {
    axios.post("http://localhost:3007", data)
      .then(res => {
        this.get({reviews});
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
    <div className="app">
      <CommentBox submitReview={this.submit}/>
      <ReviewList reviews={this.state.reviews}/>
    </div>)
  }
};


ReactDOM.render(<App />, document.getElementById('app'));