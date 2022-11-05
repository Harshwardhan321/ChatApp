//Render Index page
app.get('/', (req, res) => {
    res.render('index')
})

//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})