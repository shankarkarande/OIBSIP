require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const bodyParser = require('body-parser')
const Pizza = require('./models/pizzaModel')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))



app.get("/getpizzas",(req,res)=>{
    Pizza.find({},(err,docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }
    })
})

//razorpay

const Razorpay=require('razorpay')
const shortid=require('shortid')

const razorpay=new Razorpay({
    key_id:'rzp_test_XA7sGOGfg6hDYR',
    key_secret:'APbRThNQmQu8JbtmFW9KLyGf',
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = 'RTt$P9CjVBcW4E$'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'] )

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount =1*100;
	const currency = 'INR'

	const options = {
		amount: amount,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

// app.post('/razorpay',async(req,res)=>{

//     const payment_capture=1
//     // const amount=699
//     const currency='INR'

//     const options ={
//         amount:amount*10000,
//         currency,
//         receipt:shortid.generate(),
//         payment_capture
//     }
//     try{
//         const response=await razorpay.orders.create(options)
//         console.log(response)
//         res.json({
//             id:response.id,
//             currency:response.currency,
//             amount:response.amount
//         })
//     }catch(error){
//         console.log(error)
//     }
    
// })



// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))


//Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req, res)=>{
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`)
})













// https://console.developers.google.com/apis/credentials?project=realtimepizza

// https://cloud.mongodb.com/v2/6208bcd75d64e259b6e97630#metrics/replicaSet/6208c1f4dc838f16a6cc7fb9/explorer/realtime_pizza_/users/find

// https://developers.google.com/oauthplayground/?code=4/0AX4XfWhbO8e2i3INyk3m_wQXzFu0_iNKE9jI3j5nNTxPZGx3AoHtjifSTp9mpRUp1oaXAw&scope=https://mail.google.com/