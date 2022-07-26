import { CSSInterpolation } from '@emotion/serialize';
export interface ReactDiffViewerStyles {
    diffContainer?: string;
    diffRemoved?: string;
    diffAdded?: string;
    line?: string;
    highlightedGutter?: string;
    contentText?: string;
    gutter?: string;
    highlightedLine?: string;
    lineNumber?: string;
    marker?: string;
    wordDiff?: string;
    wordAdded?: string;
    wordRemoved?: string;
    codeFoldGutter?: string;
    emptyGutter?: string;
    emptyLine?: string;
    codeFold?: string;
    titleBlock?: string;
    content?: string;
    splitView?: string;
    [key: string]: string | undefined;
}
export interface ReactDiffViewerStylesVariables {
    diffViewerBackground?: string;
    diffViewerTitleBackground?: string;
    diffViewerColor?: string;
    diffViewerTitleColor?: string;
    diffViewerTitleBorderColor?: string;
    addedBackground?: string;
    addedColor?: string;
    removedBackground?: string;
    removedColor?: string;
    wordAddedBackground?: string;
    wordRemovedBackground?: string;
    addedGutterBackground?: string;
    removedGutterBackground?: string;
    gutterBackground?: string;
    gutterBackgroundDark?: string;
    highlightBackground?: string;
    highlightGutterBackground?: string;
    codeFoldGutterBackground?: string;
    codeFoldBackground?: string;
    emptyLineBackground?: string;
    gutterColor?: string;
    addedGutterColor?: string;
    removedGutterColor?: string;
    codeFoldContentColor?: string;
}
export interface ReactDiffViewerStylesOverride {
    variables?: {
        dark?: ReactDiffViewerStylesVariables;
        light?: ReactDiffViewerStylesVariables;
    };
    diffContainer?: CSSInterpolation;
    diffRemoved?: CSSInterpolation;
    diffAdded?: CSSInterpolation;
    marker?: CSSInterpolation;
    emptyGutter?: CSSInterpolation;
    highlightedLine?: CSSInterpolation;
    lineNumber?: CSSInterpolation;
    highlightedGutter?: CSSInterpolation;
    contentText?: CSSInterpolation;
    gutter?: CSSInterpolation;
    line?: CSSInterpolation;
    wordDiff?: CSSInterpolation;
    wordAdded?: CSSInterpolation;
    wordRemoved?: CSSInterpolation;
    codeFoldGutter?: CSSInterpolation;
    emptyLine?: CSSInterpolation;
    content?: CSSInterpolation;
    titleBlock?: CSSInterpolation;
    splitView?: CSSInterpolation;
}
declare const _default: (styleOverride: ReactDiffViewerStylesOverride, useDarkTheme?: boolean, emotion?: {
    css: {
        (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
        (...args: CSSInterpolation[]): string;
    };
    cx: (...classNames: import("@emotion/css").ClassNamesArg[]) => string;
}) => ReactDiffViewerStyles;
export default _default;
