import CardColumns from "./card-columns";

interface ColumnFormat {
    title: string;
    key: string;
    type: string;
    defaultValue?: string;
    protect?: boolean;
    minLength?: number;
    maxLength?: number;
    padZerosLeft?: boolean;
    options?: string[];
}


function getFormat(type: string) {
    if (type === 'card') {
        return CardColumns;
    }

    return [];
}

export { getFormat, ColumnFormat}