class FlashMessage {

  constructor(message) {
    this.message = message;
  }

  display() {
    alert(this.message);
  }
}

let flash = new FlashMessage("Hello from ES2015");
flash.display();
