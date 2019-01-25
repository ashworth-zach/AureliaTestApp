import {inject} from 'aurelia-framework';
import {DependencyTest} from './dependency-test';

@inject(DependencyTest)


export class App {
  header: String;
  content: String;
  constructor(DependencyTest) {
    this.header = 'This is Header';
    this.content = 'This is content';
    console.log(DependencyTest.test);

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