import {api,track, LightningElement,wire } from 'lwc';
// import {CurrentPageReference} from 'lightning/navigation';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
// import { fireEvent } from '../c/pubsub/pubsub';

export default class LeftChild extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @api tabledata;
    @api columns;
    @track keyword;
    @track filteredArray=[];
    // @wire(CurrentPageReference) pageRef;

    
    handleName(event){
        this.keyword=event.target.value;
        console.log(this.keyword);
    }

    handleClick(){
        console.log("is it in");
        this.filteredArray=this.tabledata.filter((item)=>item.name==this.keyword);
        // this.tabledata.forEach(function(element){
        //     console.log('in here ');
        //     // console.log(element.name);
        //     if(element.name===this.keyword){
        //         console.log('checking now');
        //         this.filteredArray.push(element);
        //     }else{
        //         console.log('No such match');
        //     }
            
        // });
        
        // this.filteredArray=this.tabledata.filter((item)=>item.name==this.keyword);
        console.log(this.filteredArray);
        if(this.filteredArray.length!=0){
            fireEvent(this.pageRef,'filteredItem',this.filteredArray);
            console.log('event fired');
            this.filteredArray=[];
        }else{
            console.log("No such results");
        }
        
    }
}