//Get username and roomname from form and pass it to room
app.post('/room', (req, res) => {
    roomname = req.body.roomname;
    username = req.body.username;
    res.redirect(`/room?username=${username}&roomname=${roomname}`)
})

//Rooms
app.get('/room', (req, res)=>{
    res.render('room')
})
