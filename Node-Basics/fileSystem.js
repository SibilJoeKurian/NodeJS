//refferece from https://nodejs.org/dist/latest-v13.x/docs/api/fs.html#fs_fs_appendfile_path_data_options_callback
//calling the fs module of node js
const fs = require('fs')
//calling the syncrohronous append file function
fs.appendFileSync('firstNote.txt','Hello its a check')