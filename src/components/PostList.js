import React, { Component } from "react";
import axios from "axios";

//get request
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [], //get the api request using in componentdidmount
      errMsg: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //how to access that data, question!!
      .then((data) => {
        console.log(data);
        this.setState({ posts: data.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: "Empty data" });
      });
  }
  render() {
    const { posts, errMsg } = this.state;
    console.log(this.state);
    return (
      <div>
        <button>
          <a href="https://nafiuli131.github.io/">See My Portfolio</a>
        </button>
        <h1 style={{ color: "red" }}> Post List </h1>
        <table>
          <tr>
            <th style={{ width: "10%", border: "1px solid black" }}>ID</th>
            <th style={{ width: "30%", border: "1px solid black" }}>Title</th>
            <th style={{ width: "60%", border: "1px solid black" }}>Body</th>
          </tr>
          {posts.length
            ? posts.map((post) => (
                <tr>
                  <td style={{ width: "10%", border: "1px solid black" }}>
                    {post.id}
                  </td>
                  <td style={{ width: "30%", border: "1px solid black" }}>
                    {post.title}
                  </td>
                  <td style={{ width: "60%", border: "1px solid black" }}>
                    {post.body}
                  </td>
                </tr>
              ))
            : null}
        </table>
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
