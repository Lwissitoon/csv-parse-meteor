import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Papa from 'papaparse';
const fs = require('fs');
import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);


});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.info.events({
  'click #convert'(event, instance) {
    // increment the counter when button is clicked


    Papa.parse(document.getElementById('doc').files[0],({
       config:{
        delimiter: ",",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        escapeChar: '"',
        header: true,
        transformHeader: undefined,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined,
        transform: undefined
      },
      complete: function(results) {
      console.log(results.data);
      }
  }));
  
  }
});
