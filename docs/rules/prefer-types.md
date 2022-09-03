# prefer using type over interface (prefer-types)

You can generally use `type` to do most things you might want to use `interface` for, with the exception of [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).

Using `type` allows you to access many powerful features which are not available with `interface`, such as:

- Type Aliases
- Mapped types
- Conditional Types
- Unions

This rule aims to enforce a consistent way of creating types by generally prefering `type` over `interface` except for particular exceptions.

## Rule Details

This rule encourages the use of `type` over `interface`.

Examples of ❌ **incorrect** code for this rule:

```ts
interface Person {
  name: string;
}
```

Examples of ✅ **correct** code for this rule:

```ts
type Person = {
  name: string;
};
```

## Options

### `whitelist`

Whitelists usage of `interface` names that are in the whitelist.

This can be used if there are special cases where you want to use a particular interface. For example, you may want to have a global `interface` that you modify using declaration merging.

Examples with `{ whitelist: ['AllowedInterface', 'Array']}`

#### ✅ Correct

```ts
// Whitelisted interface name
interface AllowedInterface {
  value: string;
}

// Declaration merging onto a global interface
declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}
```

### `whitelistPrefix`

Whitelists usage of `interface` names that are prefixed with a prefix in the whitelist.

Examples with `{ whitelistPrefix: ['I']}`

#### ✅ Correct

```ts
interface IPerson {
  name: string;
}

interface ICar {
  wheels: number;
}
```

## When Not To Use It

If you would like to use interfaces without restrictions.
