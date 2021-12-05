# Node Backend
A simple node based server app to calculate patient BMI data and return BMI CATEGORY and HEALTH RISK information

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.5

    $ npm --version
    6.14.14

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
## Install

    $ git clone https://github.com/Diptyajit1994/nodeBackend
    $ cd nodeBackend
    $ npm install


## Running the  server project Compiles and hot-reloads for development

    $ npm run dev

## Compiles and minifies for production

    $ npm run build
    
## Run your tests

    $ npm run test

# REST API

The REST API to the node app is described below.

## Get list of all patient BMI data

### Request

`GET /api/all-patient-info`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/all-patient-info

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Surrogate-Control: no-store
    Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
    Pragma: no-cache
    Expires: 0
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 778
    ETag: W/"30a-izP2EkaLbPxzBkXdhQkFVnREXS4"
    Date: Sun, 05 Dec 2021 07:34:57 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"data":{"patientBMIData":[{"Gender":"Male","HeightCm":171,"WeightKg":96,"BMI":32.83,"BMI_CATEGORY":"Moderately Obese","HEALTH_RISK":"Medium Risk"},{"Gender":"Female","HeightCm":167,"WeightKg":82,"BMI":29.4,"BMI_CATEGORY":"Overweight","HEALTH_RISK":"Enhanced Risk"}],"overweightCount":1},"success":true}

## Calculate patient BMI information 

### Request

`POST /api/calculate-patient_BMI-info`

    curl -i --request POST 'http://localhost:3000/api/calculate-patient_BMI-info' \
    --header 'Content-Type: application/json' \
    --data-raw '[
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82
        }
    ]'

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Surrogate-Control: no-store
    Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
    Pragma: no-cache
    Expires: 0
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 424
    ETag: W/"1a8-zFfIsIs4VqmuOp5G6/8pFkjF7Zg"
    Date: Sun, 05 Dec 2021 07:47:04 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    {"data":{"patientBMIData":[{"Gender":"Male","HeightCm":171,"WeightKg":96,"BMI":32.83,"BMI_CATEGORY":"Moderately Obese","HEALTH_RISK":"Medium Risk"},{"Gender":"Male","HeightCm":161,"WeightKg":85,"BMI":32.79,"BMI_CATEGORY":"Moderately Obese","HEALTH_RISK":"Medium Risk"},{"Gender":"Female","HeightCm":167,"WeightKg":82,"BMI":29.4,"BMI_CATEGORY":"Overweight","HEALTH_RISK":"Enhanced Risk"}],"overweightCount":1},"success":true}