import React, {
  FC,
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
interface DeferredType<T> {
  resolve?: (arg?: T) => void;
  reject?: (reason?: any) => void;
  promise?: Promise<T>;
}
function makeDeferred<T>() {
  const o: DeferredType<T> = {};
  o.promise = new Promise<T>((_resolve, _reject) => {
    o.resolve = _resolve;
    o.reject = _reject;
  });
  return o;
}
interface BaseType {}
interface ContextType<PromiseType> extends BaseType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  deferred?: DeferredType<PromiseType>;
  setDeferred?: (deferred: DeferredType<PromiseType>) => void;
}
function makeDialog<PromiseType, ArgsType extends BaseType, T = any>({
  Dialog,
  useSetValue,
  useSetContext = ({}) => {},
}: {
  Dialog: FC<
    ArgsType &
      ContextType<PromiseType> & {
        resolve?: (arg?: PromiseType) => void;
        reject?: (reason?: any) => void;
      }
  >;
  useSetValue: () => ArgsType;
  useSetContext: (
    args: Partial<ArgsType>,
    baseContext: ContextType<PromiseType> & ArgsType
  ) => void;
}): [
  FC,
  () => [
    (arg: Partial<ArgsType>) => Promise<PromiseType | undefined>,
    (arg?: PromiseType) => void
  ],
  (C: FC<T>) => FC<T>
] {
  const context = createContext<
    (ContextType<PromiseType> & ArgsType) | undefined
  >(undefined);
  const Provider = context.Provider;
  const WrappedProvider: FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [deferred, setDeferred] = useState<DeferredType<PromiseType>>();
    const contextValue = useSetValue();
    const value = useMemo(
      () => ({ ...contextValue, isOpen, setIsOpen, deferred, setDeferred }),
      [contextValue, isOpen, setIsOpen, deferred, setDeferred]
    );
    const resolve = useCallback(
      (arg?: PromiseType) => {
        setIsOpen(false);
        value.deferred?.resolve!(arg);
      },
      [value.deferred?.resolve]
    );
    const reject = useCallback(
      (reason?: any) => {
        setIsOpen(false);
        value.deferred?.reject!(reason);
      },
      [value.deferred?.reject]
    );
    return (
      <Provider value={value}>
        {children}
        <Dialog {...value} resolve={resolve} reject={reject} isOpen={isOpen} />
      </Provider>
    );
  };
  const useShowDialog: () => [
    (args: Partial<ArgsType>) => Promise<PromiseType | undefined>,
    (arg?: PromiseType) => void
  ] = () => {
    const myContext = useContext(context);
    const showDialog = useCallback(
      async (args: Partial<ArgsType>): Promise<PromiseType> => {
        if (!myContext) {
          throw new Error(
            "Context not set - is this hook being used outside of the WrappedDialog tree?"
          );
        }
        const deferred = makeDeferred<PromiseType>();
        myContext.setDeferred!(deferred);
        myContext.setIsOpen(true);
        useSetContext(args, myContext);
        return deferred.promise!;
      },
      myContext ? Object.values(myContext) : []
    );
    const resolve = useCallback<(arg?: PromiseType) => void>(
      (arg: PromiseType | undefined) => {
        myContext!.setIsOpen(false);
        if (myContext && myContext.deferred) myContext.deferred.resolve!(arg);
      },
      [myContext]
    );

    return [showDialog, resolve];
  };
  const withProvider = (C: FC<T>): FC<T> => (props: T) => (
    <WrappedProvider>
      <C {...props} />
    </WrappedProvider>
  );
  return [WrappedProvider, useShowDialog, withProvider];
}
export default makeDialog;
