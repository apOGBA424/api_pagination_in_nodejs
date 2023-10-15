require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const User = require('./model/users');
const Post = require('./model/posts');

app.use(cors());
app.use(express.json());  // to support JSON-encoded bodies

const port = process.env.port || 3000;



// connect to database
mongoose.connect(process.env.db1_uri, {useNewUrlParser: true, useUnifiedTopology: true});
const databaseConn = mongoose.connection;


databaseConn.once('open', async()=>{
    /**************************************************
    *       for uploading USERS only
    * ************************************************/
    if(await User.countDocuments().exec() > 0){
        return
    }
    Promise.all([
        User.create({name: 'Irene Buchanan', email: 'jamowuh@akpe.lu', country: 'St. Martin', phone: '+4445252', gender: 'female'}), 
        User.create({name: 'Dean Steele', email: 'ojki@wiap.cf', country: 'Sint Maarten', phone: '+7967089', gender: 'male'}),
        User.create({name: 'Donald Davis', email: 'nukbiner@ciev.au', country: 'Equatorial Guinea', phone: '+5857713', gender: 'male'}),
        User.create({name: 'Logan Fowler', email: 'ifaunajo@fa.pk', country: 'St. Lucia', phone: '+2723061', gender: 'female'}),
        User.create({name: 'Jeff Sanchez', email: 'emitaskec@lupa.il', country: 'Singapore', phone: '+5941486', gender: 'male'}),
        User.create({name: 'Callie Schwartz', email: 'jopuk@felit.bz', country: 'New Caledonia', phone: '+6001136', gender: 'male'}),
        User.create({name: 'Stanley Thornton', email: 'tabwuow@awiher.tt', country: 'Anguilla', phone: '+2190993', gender: 'male'}),
        User.create({name: 'Ryan James', email: 'lolhirrob@konaje.rw', country: 'Latvia', phone: '+3220309', gender: 'male'}),
        User.create({name: 'Ricardo Hayes', email: 'orpokha@culboziw.ly', country: 'St. Martin', phone: '+7833990', gender: 'male'}),
        User.create({name: 'Rena Fox', email: 'fezarowa@hivkuf.kn', country: 'Estonia', phone: '+2782499', gender: 'female'}),
        User.create({name: 'Jeanette Lambert', email: 'igiaj@juvmoejo.mm', country: 'Tunisia', phone: '+3625293', gender: 'female'}),
        User.create({name: 'Jeffery Alexander', email: 'pubne@os.cc', country: 'Myanmar (Burma)', phone: '+4908896', gender: 'male'}),
        User.create({name: 'Annie Barton', email: 'gavton@teli.sz', country: 'Comoros', phone: '+5303992', gender: 'female'}),
        User.create({name: 'Don Bowers', email: 'ne@cafrekuda.li', country: 'South Georgia & South Sandwich Islands', phone: '+5446245', gender: 'male'}),
        User.create({name: 'Jack Snyder', email: 'fo@fuwne.gl', country: 'Barbados', phone: '+5967006', gender: 'male'}),
        User.create({name: 'Erik Maxwell', email: 'aw@fitvoase.ly', country: 'Åland Islands', phone: '+7481627', gender: 'male'}),
        User.create({name: 'Alice Johnson', email: 'ofzonja@et.cy', country: 'St. Lucia', phone: '+4061136', gender: 'female'})  
    ]).then(()=>{ console.log('Added users')});
    
    /**************************************************
    *       for uploading POSTS only
    * ************************************************/
    if(await Post.countDocuments().exec() > 0){
        return
    }
    Promise.all([
        Post.create({headline: 'Outline work crop fur wire', body: 'Review dollar addition improve scene four depend careful room firm you hospital bad wheat.', author_id: '1', views: '69', likes: '30', published: '4/27/2045'}),
        Post.create({headline: 'Period engine satellites breathing pet itself goose', body: 'Handsome difficult island wrong tower neighborhood our careful room firm you hospital bad wheat.', author_id: '16', views: '83', likes: '56', published: '7/6/2041'}),
        Post.create({headline: 'Quick terrible speak new report growth break', body: 'Love dug nails rocky his friend stop careful room firm you hospital bad wheat.', author_id: '12', views: '48', likes: '15', published: '7/28/2081'}),
        Post.create({headline: 'Tongue still lungs old zero flat gulf', body: 'Partly writer slip function greater raise market careful room firm you hospital bad wheat.', author_id: '7', views: '52', likes: '8', published: '10/6/2082'}),
        Post.create({headline: 'Gain same likely lady palace article fence', body: 'Come control beyond until tea chief manufacturing careful room firm you hospital bad wheat.', author_id: '17', views: '19', likes: '17', published: '3/7/2088'}),
        Post.create({headline: 'Stopped cannot combine couple chain period gently', body: 'Route furniture value flame cell opinion whenever careful room firm you hospital bad wheat.', author_id: '12', views: '94', likes: '56', published: '2/16/2053'}),
        Post.create({headline: 'Seen command through addition stems because union', body: 'Enemy leather again wonder exchange instrument plural careful room firm you hospital bad wheat.', author_id: '13', views: '5', likes: '4', published: '7/22/2039'}),
        Post.create({headline: 'Paragraph base important massage thirty shut held', body: 'Electricity coach determine coach dress lack truth careful room firm you hospital bad wheat.', author_id: '12', views: '91', likes: '90', published: '12/15/2081'}),
        Post.create({headline: 'Noun case feet stranger gain lady shoulder', body: 'Wrapped grade magic allow mice wife onto careful room firm you hospital bad wheat.', author_id: '11', views: '54', likes: '52', published: '3/15/2049'}),
        Post.create({headline: 'Height twice disease wrote available potatoes afternoon', body: 'Wate speech occasionally official service mountain grabbed careful room firm you hospital bad wheat.', author_id: '11', views: '77', likes: '23', published: '3/9/2098'}),
        Post.create({headline: 'Mighty pitch frequently spite poetry sport fun', body: 'Length program arrangement native importance mountain noon careful room firm you hospital bad wheat.', author_id: '15', views: '87', likes: '1', published: '4/19/2070'}),
        Post.create({headline: 'Through accident through consist group live especially', body: 'Provide dry attached was shown vegetable layers careful room firm you hospital bad wheat.', author_id: '10', views: '47', likes: '38', published: '1/8/2066'})
    ])
})



// app.get('/users', paginatedResults(users), (req, res)=>{
app.get('/users', paginatedResults(User), (req, res)=>{
    return res.status(200).json(res.paginatedResult);
});

// app.get('/posts', paginatedResults(posts), (req, res)=>{
app.get('/posts', paginatedResults(Post), (req, res)=>{
    return res.status(200).json(res.paginatedResult);
});



function paginatedResults(model) {
    return (req, res, next)=>{
        const currentPage = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;

        const results = {};

        // show "next" when response not above last page
        if (endIndex < model.length) {
            results.next = {
                page : currentPage + 1,
                limit 
            }
        }

        // show "previous" when response above last page
        if (startIndex > 0) {
            results.previous = {
                page : currentPage - 1 ,
                limit
            }
        }


        // results.data = model.slice(startIndex, endIndex);
        results.data = model.find().limit(limit);
        res.paginatedResult = results;
        next();
    }
}


app.listen(port, ()=> console.log(`app running on http://localhost:${port}/users`));
