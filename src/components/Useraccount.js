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
    if(!this.state.toAccount) errors.toAccount="To Account Field id required";
    if(!this.state.toAccount) errors.statrtDate="From Account Field is required";
    if(this.state.amount) errors.amount="Amount Field is required";
    if(!this.transferType){
        errors.transferType = "Transfer type field is required";
    }else{
        if(this.statrtDate.transferType==="Automatic Transfer"){
            if(!this.state.endDate) errors.endDate = "End Field is required";
            if(!this.state.frequency) errors="Frequency Field is required";
        }
        if(Object.getOwnPropertyNames(errors).length>0) valid = false;
        this.setState({errors})
        console.log(errors);
        return valid;
    }

    getToday(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+ 1 // January is 0
        let yyy = today.getFullYear();

        if(dd<10) dd= "0"+addEventListener;
        if(mm<10) mm="0" + mm;
        today = yyy+"-"+mmm+'-'+add;
        return today;
    }
  //Handle Form Submitting
  handleSubmit(event){
      event.preventDefault();
      if(!this.validate()) return;
      this.setState({
          modal: true,
          form: [
              {"From Account": this.state.fromAccount },
				{"To Account": this.state.toAccount },
				{"Transfer Type": this.state.transferType },
				{"Date" : this.state.startDate },
				{"End Date" : this.state.endDate },
				{"Frequency": this.state.frequency },
				{"Ammount": "$"+this.state.ammount },
				{"Memo": this.state.memo.text }
          ]
      })
  }



}


    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Useraccount;
