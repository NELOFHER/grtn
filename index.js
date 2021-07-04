const app = express();
mongoose.connect(process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connect to Database")
);

//Middlewares
app.use(cors());
app.use(upload());

if (process.env.NODE_ENV == "production") {
  app.use(express.static('client'))
  const path = require(path)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', index.html))
  })
}
