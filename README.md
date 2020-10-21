
<a name="readmemd"></a>

# react-modal-base


<a name="_librarymd"></a>

**[@raydeck/react-modal-base - v4.0.0](#readmemd)**

> Globals

# @raydeck/react-modal-base - v4.0.0

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

*Defined in [index.tsx:14](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L14)*

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [DeferredType](#interfacesdeferredtypemd)\<T>

___

### makeDialog

▸ **makeDialog**\<PromiseType, ArgsType>(`__namedParameters`: { Dialog: FC\<ArgsType & [ContextType](#interfacescontexttypemd)\<PromiseType> & { reject?: undefined \| (reason?: any) => void ; resolve?: undefined \| (arg?: PromiseType) => void  }> ; useSetValue: () => ArgsType ; useSetContext: (__namedParameters: {}) => void  }): [FC, () => [(arg: Partial\<ArgsType>) => Promise\<PromiseType \| undefined>, (arg?: PromiseType) => void], (C: FC) => FC]

*Defined in [index.tsx:29](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L29)*

#### Type parameters:

Name | Type |
------ | ------ |
`PromiseType` | - |
`ArgsType` | [BaseType](#interfacesbasetypemd) |

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { Dialog: FC\<ArgsType & [ContextType](#interfacescontexttypemd)\<PromiseType> & { reject?: undefined \| (reason?: any) => void ; resolve?: undefined \| (arg?: PromiseType) => void  }> ; useSetValue: () => ArgsType ; useSetContext: (__namedParameters: {}) => void  } |

**Returns:** [FC, () => [(arg: Partial\<ArgsType>) => Promise\<PromiseType \| undefined>, (arg?: PromiseType) => void], (C: FC) => FC]


<a name="interfacesbasetypemd"></a>

**[@raydeck/react-modal-base - v4.0.0](#readmemd)**

> [Globals](#readmemd) / BaseType

# Interface: BaseType

## Hierarchy

* **BaseType**

  ↳ [ContextType](#interfacescontexttypemd)


<a name="interfacescontexttypemd"></a>

**[@raydeck/react-modal-base - v4.0.0](#readmemd)**

> [Globals](#readmemd) / ContextType

# Interface: ContextType\<**PromiseType**>

## Type parameters

Name |
------ |
`PromiseType` |

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

*Defined in [index.tsx:26](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L26)*

___

### isOpen

•  **isOpen**: boolean

*Defined in [index.tsx:24](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L24)*

___

### setDeferred

• `Optional` **setDeferred**: undefined \| (deferred: [DeferredType](#interfacesdeferredtypemd)\<PromiseType>) => void

*Defined in [index.tsx:27](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L27)*

___

### setIsOpen

•  **setIsOpen**: (isOpen: boolean) => void

*Defined in [index.tsx:25](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L25)*


<a name="interfacesdeferredtypemd"></a>

**[@raydeck/react-modal-base - v4.0.0](#readmemd)**

> [Globals](#readmemd) / DeferredType

# Interface: DeferredType\<**T**>

## Type parameters

Name |
------ |
`T` |

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

*Defined in [index.tsx:12](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L12)*

___

### reject

• `Optional` **reject**: undefined \| (reason?: any) => void

*Defined in [index.tsx:11](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L11)*

___

### resolve

• `Optional` **resolve**: undefined \| (arg?: T) => void

*Defined in [index.tsx:10](https://github.com/rhdeck/react-modal-base/blob/3e40bb1/src/index.tsx#L10)*
