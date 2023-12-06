const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const imageRouter = require('./routes/homeRoutes/homeRoutes');
const headingRouter = require('./routes/everestHeading/heading');
const availabiltyRouter = require('./routes/availibility/everestAvailibility');
const includeRouter = require('./routes/includes/include');
const itineraryRouter = require('./routes/Itinerary/Itinerary');
const equipmentRouter = require('./routes/equipment/equipment');
const mapRouter = require('./routes/mapElevation/mapElevation');
const faqRouterr = require('./routes/faq/FaqRoutes')


const app = express();
const PORT = process.env.PORT || 6500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/image', imageRouter);
app.use('/overview', headingRouter);
app.use('/availibility', availabiltyRouter);
app.use('/include', includeRouter);
app.use('/itinerary', itineraryRouter);
app.use('/equipment', equipmentRouter);
app.use('/uploads', express.static('uploads'));
app.use('/mapRouter', mapRouter)
app.use('/faq', faqRouterr)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

main().catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb+srv://aceHimalyas:omjtJTodXVPKrF06@acehiamlyass.x36zopa.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database is Connected");
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
