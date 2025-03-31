import {
  DestroyRef,
  Injector,
  assertInInjectionContext,
  computed,
  effect,
  inject,
  runInInjectionContext,
  signal,
  untracked
} from "./chunk-JPDR6UEA.js";
import {
  isObservable
} from "./chunk-GNFRRIDV.js";
import "./chunk-SJGKX54T.js";
import {
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  share,
  take,
  takeUntil
} from "./chunk-PGOKMGXO.js";
import {
  __spreadValues
} from "./chunk-5K356HEJ.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}

// node_modules/ngxtension/fesm2022/ngxtension-assert-injector.mjs
function assertInjector(fn, injector, runner) {
  !injector && assertInInjectionContext(fn);
  const assertedInjector = injector ?? inject(Injector);
  if (!runner) return assertedInjector;
  return runInInjectionContext(assertedInjector, runner);
}

// node_modules/ngxtension/fesm2022/ngxtension-connect.mjs
function connect(signal2, ...args) {
  const [observable, reducer, injectorOrDestroyRef, useUntracked, originSignal] = parseArgs(args);
  if (observable) {
    let destroyRef = null;
    if (injectorOrDestroyRef instanceof DestroyRef) {
      destroyRef = injectorOrDestroyRef;
    } else {
      const injector = assertInjector(connect, injectorOrDestroyRef);
      destroyRef = injector.get(DestroyRef);
    }
    return observable.pipe(takeUntilDestroyed(destroyRef)).subscribe((x) => {
      const update = () => {
        signal2.update((prev) => {
          if (!isObject(prev)) {
            return reducer?.(prev, x) || x;
          }
          if (!isObject(x)) {
            const reducedValue = reducer ? reducer(prev, x) : x;
            return isObject(reducedValue) ? __spreadValues(__spreadValues({}, prev), reducedValue) : reducedValue;
          }
          return __spreadValues(__spreadValues({}, prev), reducer?.(prev, x) || x);
        });
      };
      if (useUntracked) {
        untracked(update);
      } else {
        update();
      }
    });
  }
  if (originSignal) {
    const injector = injectorOrDestroyRef instanceof Injector ? assertInjector(connect, injectorOrDestroyRef) : void 0;
    return effect(() => {
      signal2.update((prev) => {
        if (!isObject(prev)) {
          return originSignal();
        }
        return __spreadValues(__spreadValues({}, prev), originSignal());
      });
    }, {
      allowSignalWrites: true,
      injector
    });
  }
  return {
    with(...args2) {
      if (!this.subscription) {
        this.subscription = new Subscription();
      } else if (this.subscription.closed) {
        console.info(`[ngxtension connect] ConnectedSignal has been closed.`);
        return this;
      }
      this.subscription.add(connect(signal2, ...args2, injectorOrDestroyRef, useUntracked));
      return this;
    },
    subscription: null
  };
}
function parseArgs(args) {
  if (args.length > 3) {
    return [args[0], args[1], args[2], args[3], null];
  }
  if (args.length === 3) {
    if (typeof args[2] === "boolean") {
      if (isObservable(args[0])) {
        return [args[0], null, args[1], args[2], null];
      } else {
        return [null, null, args[1], args[2], args[0]];
      }
    }
    return [args[0], args[1], args[2], false, null];
  }
  if (args.length === 2) {
    if (typeof args[1] === "boolean") {
      return [null, null, args[0], args[1], null];
    }
    if (typeof args[1] === "function") {
      return [args[0], args[1], null, false, null];
    }
    return [args[0], null, args[1], false, null];
  }
  if (isObservable(args[0])) {
    return [args[0], null, null, false, null];
  }
  if (typeof args[0] === "function") {
    return [null, null, null, false, args[0]];
  }
  return [null, null, args[0], false, null];
}
function isObject(val) {
  return typeof val === "object" && val !== void 0 && val !== null && !Array.isArray(val);
}

// node_modules/ngxtension/fesm2022/ngxtension-signal-slice.mjs
function signalSlice(config) {
  const destroyRef = inject(DestroyRef);
  const injector = inject(Injector);
  const {
    initialState,
    sources = [],
    lazySources = [],
    actionSources = {},
    selectors = () => ({}),
    effects = () => ({})
  } = config;
  const state = signal(initialState);
  const readonlyState = state.asReadonly();
  const state$ = toObservable(state);
  let lazySourcesLoaded = false;
  const subs = [];
  const slice = readonlyState;
  connectSources(state, sources);
  for (const [key, actionSource] of Object.entries(actionSources)) {
    if (isObservable(actionSource)) {
      addReducerProperties(readonlyState, state$, key, destroyRef, actionSource, subs);
    } else {
      const subject = new Subject();
      const observable = actionSource(readonlyState, subject);
      const sharedObservable = observable.pipe(share());
      connect(state, sharedObservable);
      addReducerProperties(readonlyState, state$, key, destroyRef, subject, subs, sharedObservable);
    }
  }
  for (const key in initialState) {
    Object.defineProperty(readonlyState, key, {
      value: computed(() => readonlyState()[key])
    });
  }
  for (const [key, selector] of Object.entries(selectors(slice))) {
    Object.defineProperty(readonlyState, key, {
      value: computed(selector)
    });
  }
  for (const [key, namedEffect] of Object.entries(effects(slice))) {
    console.warn("The 'effects' configuration in signalSlice is deprecated. Please use standard signal effects outside of signalSlice instead.");
    Object.defineProperty(slice, key, {
      value: effect((onCleanup) => {
        const maybeCleanup = namedEffect();
        if (maybeCleanup) {
          onCleanup(() => maybeCleanup());
        }
      })
    });
  }
  destroyRef.onDestroy(() => {
    subs.forEach((sub) => sub.complete());
  });
  const connectLazySources = () => {
    if (!lazySourcesLoaded) {
      lazySourcesLoaded = true;
      connectSources(state, lazySources, injector, true);
    }
  };
  return new Proxy(slice, {
    get(target, property, receiver) {
      connectLazySources();
      return Reflect.get(target, property, receiver);
    },
    apply(target, thisArg, argumentsList) {
      connectLazySources();
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
}
function connectSources(state, sources, injector, useUntracked = false) {
  for (const source of sources) {
    if (isObservable(source)) {
      connect(state, source, injector, useUntracked);
    } else {
      connect(state, source(state.asReadonly()), injector, useUntracked);
    }
  }
}
function addReducerProperties(readonlyState, state$, key, destroyRef, subject, subs, observableFromActionSource) {
  Object.defineProperties(readonlyState, {
    [key]: {
      value: (nextValue) => {
        if (isObservable(nextValue)) {
          return new Promise((res, rej) => {
            nextValue.pipe(takeUntilDestroyed(destroyRef)).subscribe({
              next: (value) => {
                subject.next(value);
              },
              error: (err) => {
                subject.error(err);
                rej(err);
              },
              complete: () => {
                subject.complete();
                res(readonlyState());
              }
            });
          });
        }
        if (observableFromActionSource) {
          observableFromActionSource.pipe(takeUntilDestroyed(destroyRef)).subscribe();
        }
        return new Promise((res) => {
          state$.pipe(take(1)).subscribe((val) => {
            res(val);
          });
          subject.next(nextValue);
        });
      }
    },
    [`${key}$`]: {
      value: subject.asObservable()
    }
  });
  subs.push(subject);
}
export {
  signalSlice
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.4
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngxtension_signal-slice.js.map
