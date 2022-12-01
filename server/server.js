const express = require('express');
// const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
// create storage for file
// const storage = multer.diskStorage({
//     distination : (req, file, cb) => {
//         // 'public' -> we'll store the data
//         cb(null, 'public')
//     },
//     filename : (req, file, cb) => {
//         cb(null, Data.now() + '-' + file.originalname)
//     }

// });

// .single -> we'll save one filee
// const upload = multer({storage}).single('file');

// create Endpoint to save these data, /upload-> end point upload
// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//         if(err) {
//             return res.status(200).json(err)
//         }

//         return res.status(200).send(req.file)
//     })
// })

app.post('/upload' , (req,res) => {
    setTimeout(() => {
         console.log('file uploaded');
         return res.status(200).json({ result: true,msg: 'file uploaded'})
    }, 3000);
});

app.delete('/upload', (req,res) => {
    console.log('file deleted');
    return res.status(200).json({ result: true,msg: 'file deleted'})

})

app.listen(8080, () => {
    console.log('App is running on port 8080')
});