console.log(this);

function a(){
    console.log(this);
};

var b = function(){
    console.log(this)
}

a();
b();


var c = {
    name: 'The c object',
    log: function(){
        var self = this;
        self.name = 'Update object'
        console.log(this);

        var setname = function(newname){
            self.name = newname;
        }

        setname('Update again! The c object');
        console.log(self);
    }
}

c.log();