
import React from 'react'
import axios from 'axios';

const apikey ='5f1aaea62f5df566af39f03a';
const instance = axios.create({
    baseURL: 'https://reactrbac-279c.restdb.io/rest/artikel',
    'async': true,
    'crossDomain': true,
    'Acces-Control-Allow-Origin': true,
    headers: {
        'x-apikey' : apikey,
        'content-type' : 'application/json',
        'cache-control' : 'no-cache',
    },
});

class Articles extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmitArticle = this.handleSubmitArticle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.state = {
            articles: [],
            _id: '',
            judul: '',
            isi_artikel: '',
        };
    };

   

  //handlerGET
  handleChange = (e) => {
    this.setState({ ...this.state.articles, [e.target.name]: e.target.value });
    console.log(this.state.articles)
  }

  //handlerPOST
  handleSubmitArticle = event => {
    event.preventDefault();

    this.setState({
      articles: this.state.articles.concat([{ judul: "", isi_artikel:"" }])
    });

    const artikel = {
      judul: this.state.judul,
      isi_artikel: this.state.isi_artikel
    };
    
    instance.post(`https://reactrbac-279c.restdb.io/rest/artikel`, artikel)
      .then(res => {
        // window.location.reload();
      })
  }

  // handlerDELETE
    handleDeleteRow = (_id, e) => {
      instance.delete(`https://reactrbac-279c.restdb.io/rest/artikel/${_id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
    
          const articles = this.state.articles.filter(item => item._id !== _id);
          this.setState({ articles });
        })
    }

  render() {
    // const { judul, isi_artikel } = this.state
    return (
        <div> 
        <form onSubmit={this.handleSubmitArticle}>
            <label>
            Judul:
            <input type="text" value={this.state.judul} name="judul" onChange={this.handleChange} />
            </label>
            <label>
            Artikel:
            <input type="text" value={this.state.isi_artikel} name="isi_artikel" onChange={this.handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>     
        <ul>
        { this.state.articles.map((art) =>
        <div>
          <li>
            <h4>{art.judul}</h4>
            {art.isi_artikel}
          </li>
          <button onClick={(e) => this.handleDeleteRow(art._id, e)}>Delete</button>
        </div>)
        }
        
        </ul>
      </div> 
    )
  }
}

export default Articles

