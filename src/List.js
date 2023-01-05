import { Component } from "react";
import image from './icon.jpg'

export class List extends Component {
    state = {
        input: '',
        listToDo: []
    }

    onChangeEvent(e) {
        this.setState ({
            userInput: e
        })
    }

    addItem(input) {
        if(input === '') {
            alert ('Please, enter an item')
        } 
        else {
            let listArray = this.state.listToDo;
            listArray.push(input);
            this.setState({
                listToDo: listArray,
                userInput: ''
            })
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.listToDo;
        listArray = [];
        this.setState({
            listToDo: listArray
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type='text' 
                        placeholder='What do you need to do?' 
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>

                    <div className="container">
                        <button className='add btn' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    </div>

                    <ul>{this.state.listToDo.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}><img src={image} width='40px' alt='notepad'/> {item}</li>
                        ))}
                    </ul>
                    
                    <div className="container">
                        <button className='delete btn' onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}