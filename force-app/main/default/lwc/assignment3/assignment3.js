import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Department', fieldName: 'department' },
    { label: 'Title', fieldName: 'title'},

];
export default class Assignment3 extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        const data = generateData({ amountOfRecords: 15 });
        this.data = data;
    }
}

