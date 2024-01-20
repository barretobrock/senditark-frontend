export function formatStr(value, as='number') {
    if (as === 'number') {
        return (value ? value : 0 ).toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2}).replace(',', ' ');
    } else if (as === 'date') {
        const date_val = new Date(Date.parse(value));
        const fmt_year = date_val.getFullYear();
        let fmt_month = date_val.getMonth() + 1;
        if (fmt_month < 10) {
            fmt_month = '0' + fmt_month;
        }

        let fmt_day = date_val.getDate();
        if (fmt_day < 10) {
            fmt_day = '0' + fmt_day;
        }

        return fmt_year + '-' + fmt_month + '-' + fmt_day;
    }
    return value;
}