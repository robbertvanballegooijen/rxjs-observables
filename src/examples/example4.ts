import { Observable, Observer } from 'rxjs';

export function exampleFour(): void {
  const observable = new Observable((observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
      observer.next(3);
    }, 2000);
    observer.next(4);
    observer.complete();
  });

  observable.subscribe({
    next: value => console.log(`received value ${value}`),
    complete: () => console.log('completed')
  });
}
