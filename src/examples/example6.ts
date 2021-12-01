import { Observable, Observer } from 'rxjs';


export function exampleSix(): void {
  const observable = new Observable((observer: Observer<number>) => {
    let number = 0;
    setInterval(() => {
      observer.next(number++);
    }, 1000);
  });

  // when we only want to use 'next', instead of passing an observer object, we just pass the next callback
  observable.subscribe(value => console.log(value));
}
