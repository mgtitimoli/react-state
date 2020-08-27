import type {Dispatch, SetStateAction} from "react";

type SetStateFrom<TState> = Dispatch<SetStateAction<TState>>;

type StateTupleFrom<TState> = [TState, SetStateFrom<TState>];

export type {SetStateFrom, StateTupleFrom};
