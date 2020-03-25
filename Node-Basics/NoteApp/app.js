const yargs=require('yargs')

yargs.command({
    command:'add',
    describe:'add a note',
    handler:function(){
        console.log('In add command')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('remove a note');
    }
})

yargs.command({
    command:'list',
    describe:'list a note',
    handler: function(){
        console.log('list a note')
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'read a note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(){
        console.log('read a note')
    }
})

yargs.parse()

