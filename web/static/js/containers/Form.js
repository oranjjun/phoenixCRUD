import React from "react"
import axios from "axios"
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      subtitle: '',
      image: '',
      link: '',
      author: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
    axios({
      method: 'post',
      headers: {"Content-Type": "application/json"},
      url: 'http://localhost:4000/api/blogs',
      data: {
        blogs: {
          title: this.state.title,
          subtitle: this.state.subtitle,
          image: this.state.image,
          link: this.state.link,
          author: this.state.author
        }
      }
    })
    /*axios.post('http://localhost:4000/api/blogs', {
      headers: {"Content-Type": "application/json"},
      data: {
          title: this.state.title,
          subtitle: this.state.subtitle,
          image: this.state.image,
          link: this.state.link,
          author: this.state.author
      }
    })*/
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              name="title"
              className="input"
              type="text"
              value = {this.state.title}
              onChange = {this.handleChange}
            />
          </div>
        </div>
      <div className="field">
          <label className="label">Subtitle</label>
          <div className="control">
            <input
              name="subtitle"
              className="input"
              type="text"
              value = {this.state.subtitle}
              onChange = {this.handleChange}
            />
          </div>
        </div>
      <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              name="image"
              className="input"
              type="text"
              placeholder="Enter Image URL"
              onChange = {this.handleChange}
            />
          </div>
        </div>
      <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              name="link"
              className="input"
              type="text"
              value = {this.state.link}
              onChange = {this.handleChange}
            />
          </div>
        </div>
      <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              name="author"
              className="input"
              type="text"
              value = {this.state.author}
              onChange = {this.handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          value="Submit"
          className="button is-primary"
        >
        Submit
        </button>
      </form>
    )
  }
}
export default Form