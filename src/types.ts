import type {Dispatch, SetStateAction} from "react";

type ReactSetStateFrom<TState> = Dispatch<SetStateAction<TState>>;

type ReactStateTupleFrom<TState> = [TState, ReactSetStateFrom<TState>];

export type {ReactSetStateFrom, ReactStateTupleFrom};
