
<a name="readmemd"></a>

Template for making easy-to-work-with tempates

# ts-template

## Usage

1. [Copy this template](https://github.com/rhdeck/ts-template/)
2. Clone to a local directory (eg `git clone https://github.com/me/my-repository/ && cd my-repository`)
3. Run `yarn && yarn setup` to initialize the node package (Get rid of template strings - and this readme!)
4. Happy Coding!

## Useful Scripts

1. `yarn build` will build using typescript pre-configured to node-compatible defaults
2. `yarn docs` will auto-generate a README.md that starts with TOP.md, then adds CLI documentation (via [commanderdoc](https://npmjs.com/package/commanderdoc)) for any tool you have set up, and then library documentation after that.
3. `yarn test` is pre-configured to test for typescript errors
4. `yarn watch` will watch the codebase for changes and rebuild (using [livelink](https://npmjs.com/package/@raydeck/livelink))

## Git code protections

1. `git commit` will be blocked on the `main` branch unless you set the environment variable `ALLOWMAIN=1` Branch commits and PRs are thus encouraged
2. `git commit` also tests messages for meeting the commitline standard conventions.
3. `git commit` blocks pushes that do not pass `yarn test` (as a base case, they must pass typescript compilation)
4. `npm publish` will always rebuild the code, the documentation, and push those changes back to the repository.
5. `npm publish` will only publish the lib and src directories - any others are no

## A note on "main"

I made a deliberate choice to change the primary branch from `master` to `main` for reasons that are obvious to some. This repository endeavors to make that just automatic.

PRs and feedback welcome via GitHub issues.


<a name="_librarymd"></a>

[@raydeck/react-modal-base - v1.0.2](#readmemd)

# @raydeck/react-modal-base - v1.0.2

## Index

### Interfaces

* [BaseType](#interfacesbasetypemd)
* [ContextType](#interfacescontexttypemd)
* [DeferredType](#interfacesdeferredtypemd)

### Functions

* [makeDeferred](#makedeferred)
* [makeDialog](#makedialog)

## Functions

###  makeDeferred

▸ **makeDeferred**‹**T**›(): *[DeferredType](#interfacesdeferredtypemd)‹T›*

Defined in index.tsx:14

**Type parameters:**

▪ **T**

**Returns:** *[DeferredType](#interfacesdeferredtypemd)‹T›*

___

###  makeDialog

▸ **makeDialog**‹**PromiseType**, **ArgsType**›(`Dialog`: FC‹ArgsType & [ContextType](#interfacescontexttypemd)‹PromiseType› & object›, `setValue`: function, `setContext`: function): *[FC, function, function]*

Defined in index.tsx:29

**Type parameters:**

▪ **PromiseType**

▪ **ArgsType**: *[BaseType](#interfacesbasetypemd)*

**Parameters:**

▪ **Dialog**: *FC‹ArgsType & [ContextType](#interfacescontexttypemd)‹PromiseType› & object›*

▪ **setValue**: *function*

▸ (): *ArgsType*

▪`Default value`  **setContext**: *function*= ({}) => {}

▸ (`args`: Partial‹ArgsType›, `baseContext`: [ContextType](#interfacescontexttypemd)‹PromiseType› & ArgsType): *void*

**Parameters:**

Name | Type |
------ | ------ |
`args` | Partial‹ArgsType› |
`baseContext` | [ContextType](#interfacescontexttypemd)‹PromiseType› & ArgsType |

**Returns:** *[FC, function, function]*


<a name="interfacesbasetypemd"></a>

[@raydeck/react-modal-base - v1.0.2](#readmemd) › [BaseType](#interfacesbasetypemd)

# Interface: BaseType

## Hierarchy

* **BaseType**

  ↳ [ContextType](#interfacescontexttypemd)


<a name="interfacescontexttypemd"></a>

[@raydeck/react-modal-base - v1.0.2](#readmemd) › [ContextType](#interfacescontexttypemd)

# Interface: ContextType ‹**PromiseType**›

## Type parameters

▪ **PromiseType**

## Hierarchy

* [BaseType](#interfacesbasetypemd)

  ↳ **ContextType**

## Index

### Properties

* [deferred](#optional-deferred)
* [isOpen](#isopen)
* [setDeferred](#optional-setdeferred)
* [setIsOpen](#setisopen)

## Properties

### `Optional` deferred

• **deferred**? : *[DeferredType](#interfacesdeferredtypemd)‹PromiseType›*

Defined in index.tsx:26

___

###  isOpen

• **isOpen**: *boolean*

Defined in index.tsx:24

___

### `Optional` setDeferred

• **setDeferred**? : *undefined | function*

Defined in index.tsx:27

___

###  setIsOpen

• **setIsOpen**: *function*

Defined in index.tsx:25

#### Type declaration:

▸ (`isOpen`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isOpen` | boolean |


<a name="interfacesdeferredtypemd"></a>

[@raydeck/react-modal-base - v1.0.2](#readmemd) › [DeferredType](#interfacesdeferredtypemd)

# Interface: DeferredType ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **DeferredType**

## Index

### Properties

* [promise](#optional-promise)
* [reject](#optional-reject)
* [resolve](#optional-resolve)

## Properties

### `Optional` promise

• **promise**? : *Promise‹T›*

Defined in index.tsx:12

___

### `Optional` reject

• **reject**? : *undefined | function*

Defined in index.tsx:11

___

### `Optional` resolve

• **resolve**? : *undefined | function*

Defined in index.tsx:10
