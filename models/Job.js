/**
 * Created by lala on 18.07.2015.
 */
var mongoose = require('mongoose');


var jobSchema = mongoose.Schema({
    title: {type:String},
    description: {type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
  Job.find({}).exec(function(error, collection) {
      if (collection.length === 0) {
          Job.create({title: 'Cook', description: 'You will be making bagels'});
          Job.create({title: 'Waiter', description: 'You will be putting food on peoples table'});
          Job.create({title: 'Programmer', description: 'You will be mindlessly typing for hour'});
          Job.create({title: 'Axe Maker', description: 'we need many axes made.. so many..'});
      }
  })
};
