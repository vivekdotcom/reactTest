
import React, { useState } from 'react'
import User from '../User'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Report.css'

var state = {
    file: null,
    base64URL: ""
};

const Report = () => {

    const [Number, setNumber] = useState("");
    // const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [imgUrl, setImgurl] = useState("");

    const getNumber = (e) => {
        setNumber(e.target.value)
    }

    const getFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            // console.log(e.target.files[0])
            setName(e.target.files[0].name);
            setType(e.target.files[0].type);
            setSize(e.target.files[0].size);
            // setImgurl(URL.createObjectURL(e.target.files[0]));
            let { file } = state;
            file = e.target.files[0];
            console.log('file-', file)
            getBase64(file)
                .then(result => {
                    file["base64"] = result;
                    // localStorage.setItem("File Is", file);
                    this.setState({
                        base64URL: result,
                        file
                    });
                })
                .catch(err => {
                    console.log(err);
                });

                
            setImgurl(file);
        }
        // setFile(e.target.value)

    }

    

    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                // console.log("Called", reader);
                baseURL = reader.result;
                // console.log(baseURL);
                resolve(baseURL);
            };
            console.log("datarwgethryhjutmyikmyujn", fileInfo);
        });
    };


    // console.log(name, type, size, imgUrl)
    // console.log('imageURL-', imgUrl)

    const ReportHandle = (e) => {
        e.preventDefault();
        const reportData = {
            "number_value": Number,
            "jpgFILE": {
                "name": name,
                "size": size,
                "type": type,
                "data": imgUrl.base64
            }
        }

        axios.post("https://paul.blueboxonline.com/api/v1/app/report", reportData)
            .then((res) => {
                console.log(res);
            })

    }

    
    axios.get("https://paul.blueboxonline.com/api/v1/users/session")
    .then((res) => {
        console.log(res);
    })

    return (
        <>
            <User />
            <div style={{ backgroundColor: "#dddddd54", paddingTop: "5px" }}>
                <h1 >Report</h1>
                <div className='report-main-containor'>
                    <Form style={{ paddingTop: "30px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter a value between 1 and 10</Form.Label>
                            <Form.Control className='report-input-field' type="number" placeholder="Value" onChange={getNumber} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Attech a JPG file</Form.Label>
                            <Form.Control className='report-input-field custom-file-input' type="file" placeholder="file" onChange={getFile} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={ReportHandle}>
                            Generate Report
                        </Button>
                    </Form>

                    <Form className='text-area'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control className='report-input-field' value="data : Ram" type="textarea" style={{ height: "200px" }} />

                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Report