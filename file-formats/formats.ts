import CustomerColumns from "./member-columns";
import CardColumns from "./card-columns";

interface ColumnFormat {
    title: string;
    key: string;
    type: string;
    defaultValue?: string;
    protect?: boolean;
    minLength?: number;
    maxLength?: number;
    options?: string[];
}

function getFormat(type: string) {
    if (type === 'member') {
        return CustomerColumns;
    } else if (type === 'card') {
        return CardColumns;
    } else {
        return CardColumns;
    }
}

export { getFormat, ColumnFormat}