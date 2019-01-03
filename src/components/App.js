import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import Gift from "./Gift";
import {max_number} from "../helper";

export default class App extends Component {
  static propTypes = {
  }
  state = {
    gifts: []
  }

  addGift = () => {
    const { gifts } = this.state;
    gifts.push({id: max_number(gifts.map(gift => gift.id))+1});
    this.setState({gifts})
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts});
  }

  render() {
    return (
      <div className="gift">
        <h2>Gift giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
              return (
                <Gift 
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              );
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}