console.clear();
import { fromEvent, zip, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

// Example 3: get X/Y coordinates of drag start/finish (mouse down/up)
// https://www.learnrxjs.io/learn-rxjs/operators/combination/zip

const log = (event, val) => `${event}: ${JSON.stringify(val)}`;

const getCoords = pipe(
  map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
);

const documentEvent = (eventName) =>
  fromEvent(document, eventName).pipe(getCoords);

zip(documentEvent('mousedown'), documentEvent('mouseup')).subscribe((e) =>
  console.log(`${log('start', e[0])} ${log('end', e[1])}`)
);
