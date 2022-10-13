declare class Bss {
    #private;
    constructor(selectElement: HTMLSelectElement, options?: Options);
    enable(): void;
    disable(): void;
    clear(): void;
    setValue(value: string): void;
    removeValue(value: string): void;
    getValue(): string | string[];
}
export default Bss;
interface Options {
    search?: boolean;
    create?: boolean;
    clear?: boolean;
    maxHeight?: string;
    labels?: any;
    autoClose: boolean;
}
