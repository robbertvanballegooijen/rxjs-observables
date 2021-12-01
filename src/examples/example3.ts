import { Observable, Observer } from 'rxjs';

export function exampleThree(): void {
  const observable = new Observable((observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
      // deliver after two seconds
      observer.next(3);
    }, 2000);
    observer.next(4);
  });
  
  observable.subscribe({
    next: (value) => {
      console.log(`received next notification with value: ${value}`);
    }
  });
}
