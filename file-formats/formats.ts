import CustomerColumns from "./customer-columns";
import CardColumns from "./card-columns";
import TransactionColumns from "./transaction-columns";
import MaintenanceColumns from "./maintenance-columns";

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
    if (type === 'customer') {
        return CustomerColumns;
    } else if (type === 'card') {
        return CardColumns;
    } else if (type === 'transaction') {
        return TransactionColumns;
    } else if (type === 'maintenance') {
        return MaintenanceColumns;
    } else if (type === 'eligibility') {
        return MaintenanceColumns;
    } else {
        return CardColumns;
    }
}

export { getFormat, ColumnFormat}