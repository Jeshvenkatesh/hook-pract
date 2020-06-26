import React from 'react';
import Axios from 'axios';

class SendingEmail extends React.Component{

    state={

    }
    handelSubmit=(e)=>{
       e.preventDefault();
      const data ={
          email : e.target.email.value,
          pwd : e.target.password.value
      }

      Axios.post('http://localhost:3000/send/venkateswara.kolli@gmail.com',data)
      .then((response)=>{
          console.log(response)
      })
      .catch((err)=>{
          console.log(err)
      })

      console.log(data);
       e.target.reset()

    }

    render(){

        return(
            <div>
                <form onSubmit={this.handelSubmit}> 
                    <input type="email" name="email" placeholder="email"/>
                    <input type="text" name="password" placeholder="pwd"/>
                    <button type="submit">login</button>
                </form>
            </div>
        )

    }

   
}

export default SendingEmail;