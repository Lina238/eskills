

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from 'react-router-dom'

import './AjouterAnnonce.css'

const data = {
  "form": {
      "sections": [
          {
              "section_title": "ContactUs",
              "fields": [
                  {
                      "name": "name",
                      "label": "First Name",
                      "required": true,
                      "hidden": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },
                  {
                      "name": "Fname",
                      "label": "Family Name",
                      "required": true,
                      "hidden": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },
                  {
                      "name": "email",
                      "label": "Email",
                      "hidden": false,
                      "required": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },
                {
                    "name": "service",
                    "label": "Message",
                    "hidden": true,
                    "required": true,
                    "data_type": "String",
                    "html_element": "TextField",
                    "error": false
                },
                {
                    "name": "wilaya",
                    "label": "wilaya",
                    "hidden": true,
                    "required": true,
                    "data_type": "String",
                    "html_element": "TextField",
                    "error": false
                },
 
                  {
                    "name": "type",
                    "label": "Type",
                    "hidden": false,
                    "error": false,
                    "variant":"outlined",
                    "options": [
                        {
                            "label": "Online",
                            "value": "online"
                        },
                        {
                            "label": "Offline",
                            "value": "offline"
                        },
                        
                    ],
                    "required": true,
                    "html_element": "multiple"
                },

              ],
             
          }
      ]
  }

}

function Contact(){
    localStorage.clear(localStorage.getItem('jwt'));
    localStorage.clear(localStorage.getItem('pic'));
    const [selectedValue, setSelectedValue] = React.useState('offline');
    const [val, setVal] = React.useState({name:'',
    Fname:'', email:'',
     message:'',wilaya:'',})
    const [image,setImage]=useState();
    const [selectLevel, setLevel] = React.useState([])
    const [like, setLike] = React.useState([])
    const [error, setError] = React.useState(null)
    const [required, setRequired] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
       
    };
  
    const onHandleChange = (e) => {
        
            if(val.name !== "" && val.Fname !== ""
            &&  val.email !== ""  
             
              && val.wilaya !== "" 
              && val.message !== "") 
            {
                console.log("error Falseeeeeeeeeeeeee")
            
               }
            else{
                setError(true)
                setHelperText('required')
                setVal({
                    ...val,
                    [e.target.name]:e.target.value
                })
            }
    };
    
    const onSelectLevel = (e) => {
       
        if(selectLevel.length > 1) 
        {
            setError(false)
            setHelperText('')
        }
        else{
            setError(true)
            setHelperText('required')
            var arr = []
            arr.push(e.target.innerText)
            setLevel(arr)
        }
    }
    const submitForm = (e) => {
        e.preventDefault();
       
        if(val.name !== "" || val.email !== "" 
        || val.Fname !== "" 
         || val.wilaya !== ""
          || val.message !== "" 
            ){
                       
                const uploadData = new FormData();
                uploadData.append('titre', val.title);
                uploadData.append('niveau', val.level);
                uploadData.append('discription', val.service);
                console.log(image.name)
                uploadData.append('image1', image,image.name);
                uploadData.append(' mode', val.mode);
                uploadData.append('nom', val.name+' '+val.Fname);
                uploadData.append('prix', val.price);
                uploadData.append('lieu', val.wilaya);
                uploadData.append('img', null);
                

                    
            
            setError(false)
           
            setHelperText('')
            setShow(true)
        }
        else {
            
            setError(true)
            setHelperText('required')
        }

    }

       
    

    return (
        
        <form className="form-outer-wrapper" onSubmit={submitForm} error>
         
            {
                data.form.sections.map((item) => {
                    return (
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}> <h3>{item.section_title}</h3></Grid>
                            {
                                item.fields.map(data => {
                                    
                                    return (
                                        <Grid item xs={12} sm={6}>
                                            {
                                                data.html_element === "TextField" ?
                                                    <TextField fullWidth={true} variant={data.variant}
                                                     label={data.label} name={data.name} error={error} type={data.data_type === "Integer" ? "number" : "String"} onChange={onHandleChange} helperText={helperText} />
                                                    : data.html_element === "TextArea" ?
                                                        <TextareaAutosize className="textArea" name={data.name} error={error} label={data.label} variant={data.variant} minRows={data.minRows} placeholder={data.placeholder}  onChange={onHandleChange}/>

                                                                : ""
                                            }

                                        </Grid>
                                    )
                                })
                            }
                            
                        </Grid>
                    )
                })
            }
            

            
            <Button type="submit" variant="contained" color=""> Send</Button> <Link to ="/"> <Button type="submit" variant="contained" color=""> Cancel </Button></Link>
        </form>
    )
}


  

export default Contact;
