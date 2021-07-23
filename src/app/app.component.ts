import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  word: string = '';
  show: boolean = false;
  deConstructed: string = '';

  shuffle() {
    if (this.word.length == 0) {
      return;
    }

    this.show = true;
    this.deConstructed = this.deconstruct(this.word);
    screen.orientation.unlock();
    // document.body.requestFullscreen();
  }

  deconstruct(word: string): string {
    const newWord = word
      .split('')
      .sort((a, b) => 0.5 - Math.random())
      .join(' ');
    if (word.split('').join(' ') == newWord) return this.deconstruct(word);
    return newWord;
  }
}
