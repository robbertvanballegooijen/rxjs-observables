import { Observable, Observer } from 'rxjs';

export function exampleTwo(): void {
  const observable = new Observable((observer: Observer<number>) => {
    console.log('delivering next notification');
    observer.next(1);
  });

  observable.subscribe({
    next: (value) => {
      console.log(`received next notification with value: ${value}`);
    }
  });
}
