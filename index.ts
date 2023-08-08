import { mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

const myPromise = (val) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

const source = of([1, 2, 3, 4, 5]);
//emit array of all 5 results
const example = source.pipe(mergeMap((q) => forkJoin(...q.map(myPromise))));

const subscribe = example.subscribe((val) => console.log(val));
