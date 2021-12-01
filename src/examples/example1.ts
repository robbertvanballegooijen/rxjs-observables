import { Observable, Observer } from 'rxjs';

export function exampleOne(): void {
  const observable = new Observable((observer: Observer<number>) => {
    console.log('delivering next notification');
    observer.next(1);
  });

  observable.subscribe();
}
