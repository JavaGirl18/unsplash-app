require('dotenv').config();
const {PhotoModel} = require('./schema')
const mongoose = require('mongoose')
mongoose.connect('process.env.MONGODB_URI')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

    const photo1 = new PhotoModel({
        likes: 8,
        photo: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name:  "Alex Machado",
        description: "sky"
    })

    const photo2 = new PhotoModel({
        likes: 12,
        photo: 'https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
        name:  "Pepi Stojanovski",
        description: "money"
    })
    const photo3 = new PhotoModel({
        likes: 14,
        photo: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        name:  "Casey Horner",
        description: "trees"
    })

    const photos = [photo1, photo2, photo3]

    PhotoModel.deleteMany().then(()=>
        PhotoModel.insertMany(photos))
        .then(() => mongoose.connection.close())
    