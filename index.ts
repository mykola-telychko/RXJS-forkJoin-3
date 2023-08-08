import { mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin

const samplePromise = (val) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

const srcArr = of([1, 2, 3, 4, 5]);
// emit array of all 5 results
// marge srcArr and samplePromise results using forkJoin
const example = srcArr.pipe(
  mergeMap((item) => forkJoin(...item.map(samplePromise)))
);

const subscribe = example.subscribe((val) => console.log(val));
