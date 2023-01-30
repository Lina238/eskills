

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from 'react-router-dom'

import './AjouterAnnonce.css'
import Profile from '../profile/profile';




const data = {
  "form": {
      "sections": [
          {
              "section_title": "Add an Annonce",
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
                    "name": "module",
                    "label": "Module",
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
                      "name": "price",
                      "label": "Price",
                      "hidden": false,
                      "required": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },
                  {
                      "name": "discription",
                      "label": "discription",
                      "hidden": true,
                      "required": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },
                  {
                      "name": "address",
                      "label": "Address",
                      "hidden": true,
                      "required": true,
                      "minRows": "3",
                      "placeholder": "Entrer Address",
                      "html_element": "TextArea"
                  },
                  {
                    "name": "service",
                    "label": "Service",
                    "minRows": "3",
                    "placeholder": "Votre Service",
                    "html_element": "TextArea"
                },
                  {
                    "name": "wilaya",
                    "label": "Wilaya",
                    "hidden": false,
                    "required": true,
                    "data_type": "String",
                    "html_element": "TextField",
                    "error": false
                },
                
                  
                {
                    "name": "Level",
                    "label": "Level",
                    "hidden": false,
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
                }
              ],
             
          }
      ]
  }

}

function AjouteAnnonce (){
    const [selectedValue, setSelectedValue] = React.useState('offline');
    const [val, setVal] = React.useState({name:'',Fname:'',module:'', email:'', price:'', discription:'', address:'',service:'',wilaya:'',photo:''})
    const [selectLevel, setLevel] = React.useState([])
    const [like, setLike] = React.useState([])
    const [error, setError] = React.useState(null)
    const [required, setRequired] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
       
    };
    const [dat,setData]=useState();
    console.log(dat)
    
   
    
    const onHandleChange = (e) => {
            if(val.name !== "" && val.Fname !== "" && val.module !== "" &&  val.email !== ""
              &&  val.price !== "" && val.discription !== ""  && val.wilaya !== ""  && selectLevel !== "" ) 
            {
                console.log("error Falseeeeeeeeeeeeee")
                const  state = {
                    nom: val.name+' '+val.Fname, 
                    email:val.email,
                    mode:selectLevel,
                    niveau:val.level,
                    discription:val.discription,
                    titre:val.titre,
                    image:val.photo,
                    prix:val.price,
                    lieu:val.wilaya
                 }
                 fetch('http://127.0.0.1:8000/core/annonces/', {
                   method: 'POST',
                   headers: {'Content-Type': 'application/json'},
                   body: JSON.stringify(state)
                 })
                 .then( data => data.json())
                 .then(
                   data => {
                     console.log(data)
                     Window.Alert("announce added ;)")
                }
                 )
                 .catch( error => console.error(error))
                setError(false)
                setHelperText('')
                            
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
    const likeEvent = (e) => {
        setLike([...like, e.target.defaultValue])
    }
    
    const onSelectLevel = (e) => {
        console.log("setLevel", e.target.innerText)
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
        console.log("selectLevel", val, selectLevel, like)
        if(val.name !== "" || val.email !== "" || val.Fname !== "" || val.discription !== ""  || val.address !== "" || val.wilaya !== "" || val.service !== "" ||  val.price !== "" || val.module !== "" ||selectLevel.length > 0 || like.length > 0 || val.photo!=='' ){
            console.log("Submit Data")
            console.log()
            setError(false)
            setHelperText('')
            setShow(true)
        }
        else {
            console.log("Submit Data222222222")
            setError(true)
            setHelperText('required')
        }

    }

    
    const resetBtn = () => {
        setVal({name:'',Fname:'',module:'',  email:'', price:'', discription:'', address:'',
         service:'', wilaya:'', level:'',photo:''})
        setLevel([])
    }

    return (
        
        <form className="form-outer-wrapper" onSubmit={submitForm} error>
            <div>
                {
                       
                        console.log("vallllllllllll", val, error, selectLevel)
                   
                }
                {show ?
                <ul style={{listStyle:'none'}}>
                    <li> First Name:{val.name}</li>
                    <li>Family Name: {val.Fname}</li>
                    <li>Email:{val.email}</li>
                    <li>Address:{val.address}</li>
                    <li>Price:{val.price}</li>
                    <li>discription: {val.discription}</li>
                    <li>Service:{val.service}</li>
                    <li>Module:{val.module}</li>
                    <li>Wilaya:{val.wilaya}</li>
                    <li>level:{val.level}</li>
                    <li>{selectLevel}</li>
                </ul>
                : ""}
            </div>
            {
                data.form.sections.map((item) => {
                    return (
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}> <h3>{item.section_title}</h3></Grid>
                            {
                                item.fields.map(data => {
                                    console.log("data", data)
                                    return (
                                        <Grid item xs={12} sm={6}>
                                            {
                                                data.html_element === "TextField" ?
                                                    <TextField fullWidth={true} variant={data.variant} label={data.label} name={data.name} error={error} type={data.data_type === "Integer" ? "number" : "String"} onChange={onHandleChange} helperText={helperText} />
                                                    : data.html_element === "TextArea" ?
                                                        <TextareaAutosize className="textArea" name={data.name} error={error} label={data.label} variant={data.variant} minRows={data.minRows} placeholder={data.placeholder}  onChange={onHandleChange}/>
                                                        : data.html_element === "Select" ?
                                                            <Autocomplete
                                                                id="combo-box-demo"
                                                                options={data.options}
                                                                getOptionLabel={(option) => option.label}
                                                                style={{ width: 300 }}
                                                               

                                                                renderInput={(params) => <TextField name={data.name} helperText={helperText} error={error} {...params} label={data.label} variant={data.variant}/>}
                                                            />
                                                            : data.html_element === "multiple" ?
                                                                <Autocomplete
                                                                    id="combo-box-demo"
                                                                    multiple
                                                                    options={data.options}
                                                                    onChange={onSelectLevel}
                                                                    getOptionLabel={(option) => option.label}
                                                                    style={{ width: 300 }}
                                                                    
                                                                    renderInput={(params) => <TextField error={error} helperText={helperText} {...params} label={data.label} variant={data.variant}/>}
                                                                />
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
            
            <div className="main">
                <div className="uploadimage">
                     <label htmlFor="imgs"> <h4> Add Img </h4>  </label>
                </div>
                <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e)=>setData(e.target.files)} />
            </div>
            
            <Button type="submit" variant="contained" color=""> Submit</Button> <Link to ="/User"> <Button type="submit" variant="contained" color=""> Cancel </Button></Link>
        </form>
    )
}


  

export default AjouteAnnonce;
