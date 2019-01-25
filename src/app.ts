export class App {
  header:String;
  content:String;
  constructor(){
    this.header = 'This is Header';
    this.content = 'This is content';
  }
  updateContent() {
    this.header = 'This is NEW header...'
    this.content = 'This is NEW content...';
  }
  resetContent() {
    this.header = 'This is Header';
    this.content = 'This is content';
  }
}