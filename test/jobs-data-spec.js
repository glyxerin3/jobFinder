/**
 * Created by lala on 20.07.2015.
 */
var expect = require("chai").expect;

var mongoose = require('mongoose');
var jobModel = require('../models/Job');

var Promise = require("bluebird");
var jobsData = require("../job-data.js");


function resetJobs() {

    return new Promise(function(resolve,reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    })
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);

describe("get jobs", function() {

    var jobs;

    before(function(done) {
        jobsData.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            });


    }); // before

    it("should never be empty sice jobs are seeded", function() {
        expect(jobs.length).to.be.at.least(1);
    }); // it should

    it("should have a job with a title", function() {
        expect(jobs[0].title).to.not.be.empty;
    });

    it("should have a job with a description", function() {
        expect(jobs[0].description).to.not.be.empty;
    });

});
