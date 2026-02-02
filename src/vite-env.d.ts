declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.js' {
    const content: any;
    export = content;
}
