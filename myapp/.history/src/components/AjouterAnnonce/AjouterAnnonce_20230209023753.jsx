

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
                //   {
                //     "name": "module",
                //     "label": "Module",
                //     "required": true,
                //     "hidden": true,
                //     "data_type": "String",
                //     "html_element": "TextField",
                //     "error": false
                //   },
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
                      "name": "level",
                      "label": "level",
                      "hidden": true,
                      "required": true,
                      "data_type": "String",
                      "html_element": "TextField",
                      "error": false
                  },

                
                {
                    "name": "title",
                    "label": "title",
                    "hidden": true,
                    "required": true,
                    "data_type": "String",
                    "html_element": "TextField",
                    "error": false
                },
                {
                    "name": "service",
                    "label": "service",
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
                // {
                //     "name": "wilaya",
                //     "label": "wilaya",
                //     "hidden": true,
                //     "required": true,
                //     "data_type": "String",
                //     "html_element": "TextField",
                //     "error": false
                // },
                // {
                //     "name": "service",
                //     "label": "service",
                //     "hidden": true,
                //     "required": true,
                //     "data_type": "String",
                //     "html_element": "TextField",
                //     "error": false
                // },
                  
                //   {
                //       "name": "level",
                //       "label": "Level",
                //       "hidden": false,
                //       "error": false,
                //       "variant":"outlined",
                //       "options": [
                //           {
                //               "label": "Primary",
                //               "value": "primary"
                //           },
                //           {
                //               "label": "Middle",
                //               "value": "middle"
                //           },
                //           {
                //               "label": "Secondary",
                //               "value": "secondary"
                //           }
                //       ],
                //       "required": true,
                //       "html_element": "multiple"
                //   },
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

function AjouteAnnonce (){
    const [selectedValue, setSelectedValue] = React.useState('offline');
    const [val, setVal] = React.useState({name:'',
    Fname:'', email:'', price:'', level:'',
     title:'',service:'',wilaya:'',
     mode:'',
     photo:''})
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
             &&  val.price !== "" && val.level !== "" 
              && val.wilaya !== "" 
              && val.service !== ""&&val.mode!=='' ) 
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
    const likeEvent = (e) => {
        setLike([...like, e.target.defaultValue])
    }
    
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
        || val.Fname !== "" || val.level !== "" 
         || val.title !== "" || val.wilaya !== ""
          || val.service !== "" ||  val.price !== ""
           
        //    || val.photo!==''
            ){
               
                val.mode=selectLevel[0]
                if(selectLevel[0]==""){
                    selectLevel[0]="online"
                    val.mode="online" 
                }
                console.log(selectLevel)
                const uploadData = new FormData();
                uploadData.append('titre', val.title);
                uploadData.append('email', val.email);
                uploadData.append('niveau', val.level);
                uploadData.append('discription', val.service);
                uploadData.append('image1', image,image.name);
                uploadData.append(' mode', val.mode);
                uploadData.append('nom', val.name+' '+val.Fname);
                uploadData.append('prix', val.price);
                uploadData.append('lieu', val.wilaya);
                uploadData.append('img', null);
                const uploadData1=uploadData
                console.log(localStorage.getItem('jwt1'))
                uploadData1.append('author',JSON.stringify((localStorage.getItem('jwt1')))
                // fetch('http://127.0.0.1:8000/core/annonces1/', {
                //     method: 'POST',
                //     body: uploadData
                //   })
                //   .then( res =>console.log(res))
                //   .catch(error => console.log(error))
                  fetch('http://127.0.0.1:8000/core/Favoriss/', {
                    method: 'POST',
                    body: uploadData1
                  })
                  .then( res => console.log(res))
                  .catch(error => console.log(error))    
            
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
                     <label htmlFor="imgs"> <h4> Add Image </h4>  </label>
                </div>
                <input className="inp" id="imgs" type="file" accept="image/*" onChange={(evt) => setImage(evt.target.files[0])} />
            </div>
            
            <Button type="submit" variant="contained" color=""> Submit</Button> <Link to ="/User"> <Button type="submit" variant="contained" color=""> Cancel </Button></Link>
        </form>
    )
}


  

export default AjouteAnnonce;
