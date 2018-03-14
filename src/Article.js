import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            isComOpen: false
        }
    }

    render(){
        console.log(this.props);
        const {article} = this.props
        const {isOpen} = this.state
        
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? "Slėpti" : "Rodyti" }
                </button>
                {this.getBody()}
            </div>
        )
    }

    getCom() {
        if (!this.state.isComOpen) return null
        
        const {article} = this.props
        //if (article.comments) { {console.log(article.comments)} }
        const commentElements = article.comments.map((comment) => <li key={comment.id} >{comment.user}:{comment.text}</li>)
        //{console.log(commentElements)}
        return <section><ul>{commentElements}</ul></section>
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        //const {isComOpen} = this.state
        return <div><section>{article.text}</section><button onClick={this.toggleComOpen}>{this.state.isComOpen ? "Slėpti komentarus" : "Rodyti komentarus" }</button>{this.getCom()}</div>
        //return <section>{article.text}</section>
    }


    toggleComOpen = () =>{
        this.setState({
            isComOpen: !this.state.isComOpen
        })
    }

    toggleOpen = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
