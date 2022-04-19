import React, { useState } from 'react';


const Contact = () => {

  const [data,setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent=(event)=>{
    const {name ,value} = event.target;
    setData((perVal)=>{
      return {
        ...perVal,
        [name]:value,
      }
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`${data.fullname}`);
  };
  return (
    <>
      <div className='my-5'>
        <div className='text-center'><h3>Contact us</h3>
        </div>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent} placeholder="Enter your Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Phone</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent} placeholder="Enter Your Number"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={InputEvent} placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1"
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent} rows="3"></textarea>
                </div>
                <div className='col-12'>
                  <button type="submit" className="btn btn-outline-primary">Submit form</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;