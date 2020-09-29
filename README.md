
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

**@raydeck/react-modal-base - v3.0.0**

> Globals

# @raydeck/react-modal-base - v3.0.0

## Index

### Interfaces

* [BaseType](#interfacesbasetypemd)
* [ContextType](#interfacescontexttypemd)
* [DeferredType](#interfacesdeferredtypemd)

### Functions

* [makeDeferred](#makedeferred)
* [makeDialog](#makedialog)

## Functions

### makeDeferred

▸ **makeDeferred**\<T>(): [DeferredType](#interfacesdeferredtypemd)\<T>

*Defined in [index.tsx:14](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L14)*

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [DeferredType](#interfacesdeferredtypemd)\<T>

___

### makeDialog

▸ **makeDialog**\<PromiseType, ArgsType>(`__namedParameters`: { Dialog: FC\<ArgsType & [ContextType](#interfacescontexttypemd)\<PromiseType> & { reject?: undefined \| (reason?: any) => void ; resolve?: undefined \| (arg?: PromiseType) => void  }> ; useSetValue: () => ArgsType ; useSetContext: (__namedParameters: {}) => void  }): [FC, () => (args: ArgsType) => Promise\<PromiseType \| undefined>, (C: FC) => FC]

*Defined in [index.tsx:29](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L29)*

#### Type parameters:

Name | Type |
------ | ------ |
`PromiseType` | - |
`ArgsType` | [BaseType](#interfacesbasetypemd) |

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { Dialog: FC\<ArgsType & [ContextType](#interfacescontexttypemd)\<PromiseType> & { reject?: undefined \| (reason?: any) => void ; resolve?: undefined \| (arg?: PromiseType) => void  }> ; useSetValue: () => ArgsType ; useSetContext: (__namedParameters: {}) => void  } |

**Returns:** [FC, () => (args: ArgsType) => Promise\<PromiseType \| undefined>, (C: FC) => FC]


<a name="interfacesbasetypemd"></a>

**@raydeck/react-modal-base - v3.0.0**

> [Globals](#readmemd) / BaseType

# Interface: BaseType

## Hierarchy

* **BaseType**

  ↳ [ContextType](#interfacescontexttypemd)


<a name="interfacescontexttypemd"></a>

**@raydeck/react-modal-base - v3.0.0**

> [Globals](#readmemd) / ContextType

# Interface: ContextType\<**PromiseType**>

## Type parameters

* PromiseType

## Hierarchy

* [BaseType](#interfacesbasetypemd)

  ↳ **ContextType**

## Index

### Properties

* [deferred](#deferred)
* [isOpen](#isopen)
* [setDeferred](#setdeferred)
* [setIsOpen](#setisopen)

## Properties

### deferred

• `Optional` **deferred**: [DeferredType](#interfacesdeferredtypemd)\<PromiseType>

*Defined in [index.tsx:26](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L26)*

___

### isOpen

•  **isOpen**: boolean

*Defined in [index.tsx:24](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L24)*

___

### setDeferred

• `Optional` **setDeferred**: undefined \| (deferred: [DeferredType](#interfacesdeferredtypemd)\<PromiseType>) => void

*Defined in [index.tsx:27](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L27)*

___

### setIsOpen

•  **setIsOpen**: (isOpen: boolean) => void

*Defined in [index.tsx:25](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L25)*


<a name="interfacesdeferredtypemd"></a>

**@raydeck/react-modal-base - v3.0.0**

> [Globals](#readmemd) / DeferredType

# Interface: DeferredType\<**T**>

## Type parameters

* T

## Hierarchy

* **DeferredType**

## Index

### Properties

* [promise](#promise)
* [reject](#reject)
* [resolve](#resolve)

## Properties

### promise

• `Optional` **promise**: Promise\<T>

*Defined in [index.tsx:12](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L12)*

___

### reject

• `Optional` **reject**: undefined \| (reason?: any) => void

*Defined in [index.tsx:11](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L11)*

___

### resolve

• `Optional` **resolve**: undefined \| (arg?: T) => void

*Defined in [index.tsx:10](https://github.com/rhdeck/react-modal-base/blob/6dc4e00/src/index.tsx#L10)*
