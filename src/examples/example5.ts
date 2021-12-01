import { Observable, Observer } from 'rxjs';

export function exampleFive(): void {
  const observable = new Observable((observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);
    throw new Error('nothing else happens after me');
    observer.next(3);
    observer.complete();
  });

  observable.subscribe({
    next: value => console.log(`received value ${value}`),
    complete: () => console.log('completed'),
    error: error => console.log(error.message)
  });
}
