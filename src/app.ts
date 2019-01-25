import {inject} from 'aurelia-framework';
import {DependencyTest} from './dependency-test';
import { Http2ServerRequest } from 'http2';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
@inject(DependencyTest)


export class App {
  header: String;
  content: String;
  constructor(DependencyTest) {
    this.header = 'This is Header';
    this.content = 'This is content';
    console.log(DependencyTest.test);

  }
  getData() {
    httpClient.fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
 }
 myPostData(){
   header:this.header;
   content:this.content;
 }
 postData(myPostData) {
  httpClient.fetch('http://jsonplaceholder.typicode.com/posts', {
     method: "POST",
     body: JSON.stringify(myPostData)
  })

  .then(response => response.json())
  .then(data => {
     console.log(data);
  });
}
  updateContent() {
    this.header = 'This is NEW header...'
    this.content = 'This is NEW content...';
  }
  resetContent() {
    this.header = 'This is Header';
    this.content = 'This is content';
  }
  created(owningView, myView) {
    // Invoked once the component is created...
    // this.header = "stuff"
  }
  bind(bindingContext, overrideContext) {
    // Invoked once the databinding is activated...
  }

  attached(argument) {
    // Invoked once the component is attached to the DOM...
  }

  detached(argument) {
    // Invoked when component is detached from the dom
  }

  unbind(argument) {
    // Invoked when component is unbound...
  }
}