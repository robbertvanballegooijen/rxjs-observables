import { Observable, Observer } from 'rxjs';

export function exampleSeven(): void {
  const observable = new Observable((observer: Observer<number>) => {
    let number = 0;

    setInterval(() => {
      observer.next(number++);
    }, 1000);
  });

  const subscription = observable.subscribe(value => console.log(value));

  // unsubscribe after two seconds
  setTimeout(() => {
    subscription.unsubscribe();
  }, 2000);
}
