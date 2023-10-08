require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const users = [
    {id : 1, name: 'Irene Buchanan', email: 'jamowuh@akpe.lu', country: 'St. Martin', phone: '+4445252', gender: 'female'}, 
    {id : 2, name: 'Dean Steele', email: 'ojki@wiap.cf', country: 'Sint Maarten', phone: '+7967089', gender: 'male'},
    {id : 3, name: 'Donald Davis', email: 'nukbiner@ciev.au', country: 'Equatorial Guinea', phone: '+5857713', gender: 'male'},
    {id : 4, name: 'Logan Fowler', email: 'ifaunajo@fa.pk', country: 'St. Lucia', phone: '+2723061', gender: 'female'},
    {id : 5, name: 'Jeff Sanchez', email: 'emitaskec@lupa.il', country: 'Singapore', phone: '+5941486', gender: 'male'},
    {id : 6, name: 'Callie Schwartz', email: 'jopuk@felit.bz', country: 'New Caledonia', phone: '+6001136', gender: 'male'},
    {id : 7, name: 'Stanley Thornton', email: 'tabwuow@awiher.tt', country: 'Anguilla', phone: '+2190993', gender: 'male'},
    {id : 8, name: 'Ryan James', email: 'lolhirrob@konaje.rw', country: 'Latvia', phone: '+3220309', gender: 'male'},
    {id : 9, name: 'Ricardo Hayes', email: 'orpokha@culboziw.ly', country: 'St. Martin', phone: '+7833990', gender: 'male'},
    {id : 10, name: 'Rena Fox', email: 'fezarowa@hivkuf.kn', country: 'Estonia', phone: '+2782499', gender: 'female'},
    {id : 11, name: 'Jeanette Lambert', email: 'igiaj@juvmoejo.mm', country: 'Tunisia', phone: '+3625293', gender: 'female'},
    {id : 12, name: 'Jeffery Alexander', email: 'pubne@os.cc', country: 'Myanmar (Burma)', phone: '+4908896', gender: 'male'},
    {id : 13, name: 'Annie Barton', email: 'gavton@teli.sz', country: 'Comoros', phone: '+5303992', gender: 'female'},
    {id : 14, name: 'Don Bowers', email: 'ne@cafrekuda.li', country: 'South Georgia & South Sandwich Islands', phone: '+5446245', gender: 'male'},
    {id : 15, name: 'Jack Snyder', email: 'fo@fuwne.gl', country: 'Barbados', phone: '+5967006', gender: 'male'},
    {id : 16, name: 'Erik Maxwell', email: 'aw@fitvoase.ly', country: 'Åland Islands', phone: '+7481627', gender: 'male'},
    {id : 17, name: 'Alice Johnson', email: 'ofzonja@et.cy', country: 'St. Lucia', phone: '+4061136', gender: 'female'}
];

const posts = [
    {id: 1, headline: 'Outline work crop fur wire', body: 'Review dollar addition improve scene four depend careful room firm you hospital bad wheat.', author_id: '1', views: '69', likes: '30', published: '4/27/2045'},
    {id: 2, headline: 'Period engine satellites breathing pet itself goose', body: 'Handsome difficult island wrong tower neighborhood our careful room firm you hospital bad wheat.', author_id: '16', views: '83', likes: '56', published: '7/6/2041'},
    {id: 3, headline: 'Quick terrible speak new report growth break', body: 'Love dug nails rocky his friend stop careful room firm you hospital bad wheat.', author_id: '12', views: '48', likes: '15', published: '7/28/2081'},
    {id: 4, headline: 'Tongue still lungs old zero flat gulf', body: 'Partly writer slip function greater raise market careful room firm you hospital bad wheat.', author_id: '7', views: '52', likes: '8', published: '10/6/2082'},
    {id: 5, headline: 'Gain same likely lady palace article fence', body: 'Come control beyond until tea chief manufacturing careful room firm you hospital bad wheat.', author_id: '17', views: '19', likes: '17', published: '3/7/2088'},
    {id: 6, headline: 'Stopped cannot combine couple chain period gently', body: 'Route furniture value flame cell opinion whenever careful room firm you hospital bad wheat.', author_id: '12', views: '94', likes: '56', published: '2/16/2053'},
    {id: 7, headline: 'Seen command through addition stems because union', body: 'Enemy leather again wonder exchange instrument plural careful room firm you hospital bad wheat.', author_id: '13', views: '5', likes: '4', published: '7/22/2039'},
    {id: 8, headline: 'Paragraph base important massage thirty shut held', body: 'Electricity coach determine coach dress lack truth careful room firm you hospital bad wheat.', author_id: '12', views: '91', likes: '90', published: '12/15/2081'},
    {id: 9, headline: 'Noun case feet stranger gain lady shoulder', body: 'Wrapped grade magic allow mice wife onto careful room firm you hospital bad wheat.', author_id: '11', views: '54', likes: '52', published: '3/15/2049'},
    {id: 10, headline: 'Height twice disease wrote available potatoes afternoon', body: 'Wate speech occasionally official service mountain grabbed careful room firm you hospital bad wheat.', author_id: '11', views: '77', likes: '23', published: '3/9/2098'},
    {id: 11, headline: 'Mighty pitch frequently spite poetry sport fun', body: 'Length program arrangement native importance mountain noon careful room firm you hospital bad wheat.', author_id: '15', views: '87', likes: '1', published: '4/19/2070'},
    {id: 12, headline: 'Through accident through consist group live especially', body: 'Provide dry attached was shown vegetable layers careful room firm you hospital bad wheat.', author_id: '10', views: '47', likes: '38', published: '1/8/2066'}
]

// app.use(cors());
app.use(express.json());  // to support JSON-encoded bodies


const port = process.env.port || 3000;


app.get('/users', (req, res)=>{
    const currentPage = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;


    const results = {};

    // show "next" when response not above last page
    if (endIndex < users.length) {
        results.next = {
            page : currentPage + 1,
            limit 
        }
    }

    // show "previous" when response above last page
    if (startIndex > users.length) {
        results.previous = {
            page : currentPage - 1,
            limit
        }
    }


    results.data = users.slice(startIndex, endIndex);
    // results.data = posts.slice(startIndex, endIndex);
    return res.status(200).json({results});
    
});


app.listen(port, ()=> console.log(`app running on http://localhost:${port}/users`));
