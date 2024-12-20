export interface MainPageI {
    mainData: string;
}
export interface LangI {
    head: Head;
    def: Def[];
}

export interface Head {}

export interface Def {
    text: string;
    pos: string;
    tr: Tr[];
}

export interface Tr {
    text: string;
    pos: string;
    syn: Syn[];
    mean: Mean[];
    ex: Ex[];
}

export interface Syn {
    text: string;
}

export interface Mean {
    text: string;
}

export interface Ex {
    text: string;
    tr: Tr2[];
}

export interface Tr2 {
    text: string;
}
