exports.getProducts = (req, res) => {
    console.log('success')
    res.status(200).json({ success: 'true', message: 'Welcome to the next BIGGG thing'})
}