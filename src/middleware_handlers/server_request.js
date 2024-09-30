import axios from "axios";

export async function searchingInvoices(
    invoiceNumber,
    invoiceSender,
    invoiceReceiver,
    startDatePeriod,
    endDatePeriod
) {
    const url = `http://localhost:3000/?invoiceNumber=${invoiceNumber}&invoiceSender=${invoiceSender}&invoiceReceiver=${invoiceReceiver}&startDatePeriod=${startDatePeriod}&endDatePeriod=${endDatePeriod}`;

    return await axios.get(url)
        .then((response) => response.data)
        .catch(error => console.log(error));

}

export async function createInvoice(props) {
    let data = ''

    await axios.post("http://localhost:3000/new-invoice", JSON.stringify(props.fields), {headers:{'Content-Type': 'application/json'}})
        .then((response) => {
            data = response.data
        })
        .catch(error => console.log(error));

    return data;
}