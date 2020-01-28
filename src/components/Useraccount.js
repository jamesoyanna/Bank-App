import React, { Component } from 'react';

export class Useraccount extends Component {
constructor(props){
    super(props);
    
    //Imitializing State
    this.state = {
      route: "contact",
      fromAccount: 0,
      toAccount: 0,
      transferType: "",
      amount: 0,
      memo: {
        text: "",
        len: 0
      },
      fromAccounts: [
        { id: "154", amount: 1212.0, name: "Taiye's Account" },
        { id: "164", amount: 1412.0, name: "Kelvin's 1" },
        { id: "174", amount: 1612.0, name: "Account 2" },
        { id: "184", amount: 1812.0, name: "Account 3" },
        { id: "194", amount: 1912.0, name: "Account 4" },
        { id: "204", amount: 2012.0, name: "Account 5" }
      ],

      toAccounts: [
        { id: "164", amount: 1412.0, name: "Account 1" },
        { id: "174", amount: 1612.0, name: "Account 2" },
        { id: "184", amount: 1812.0, name: "Account 3" },
        { id: "194", amount: 1912.0, name: "Account 4" },
        { id: "204", amount: 2012.0, name: "Account 5" }
      ],
      startDate: this.getToday(),
      endDate: null,
      frequency: null,
      modal: false,
      errors: []

    };
}
  //Helper Functions
  changeForm(event){
      const fromAccount = event.target.value;
      let toAccounts = [...this.state.fromAccounts];
      toAccounts = _.without(toAccounts, _.find(toAccounts, ["id", fromAccount]));
     const toAccount = (fromAccount===this.state.toAccount) ? 0: this.state.toAccount;
  this.setState({fromAccount, toAccounts, toAccount});
  }

changeTo(event) {this.setState({toAccount:event.target.value});}
changeAmount(event) {this.setState({ amount: event.target.value});}
changeMemo(event){this.setState({memo: {text:event.target.value, len:event.target.value.length}})};
changeTransfer(event){this.setState({transferType: event.target.value, endDate:null, frequency: null});}
changeFrequncy(event){this.setState({frequency: event.target.value});}
changeStartDate(event){this.setState({startDate: event.target.value});}
changeEndDate(event){this.setState({statrtDate: event.target.value});}
showModal(modal){this.setState({modal})}
confirmSubmit(){this.setState({modal:false, route: "confirm"})}
restart(){this.setState({
    route: "form",
    fromAccount: 0,
    toAccount: 0,
    transferType: "",
    amount: 0,
    memo:{
        text: "",
        len: 0
    },
    startDate: this.getToday(),
    endDate: null,
frequency: null,
modla:false,
form: []
})}

setRoute(route){this.setState({route})}

validate(){
    let errors = {};
    let valid = true;
    if(!this.state.fromAccount) errors.fromAccount="From Account Field is Required";
    if(!this.state.toAccount)
}


    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Useraccount;
