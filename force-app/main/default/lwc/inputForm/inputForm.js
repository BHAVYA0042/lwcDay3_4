import { LightningElement,track,api } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class InputForm extends LightningElement {
    @track pName={fname:"",lname:""};
    // @track isInvalid=true;
    @track creds={email:"",password:""};
    @track contact;
    @track address={city:"",state:"",country:""};
    @track passwordValid=false;
    @track contactValid=false;

    get formValidity(){
        const valid=this.passwordValid && this.contactValid;
        var final=!valid;
        return (final);
    }
    


    handleName(event){
        var {name,value}=event.target;
        
        if(name=='firstName'){
            this.pName.fname=value;
        }
        else if(name=='lastName'){
            this.pName.lname=value;
        }
    }
    handleCreds(event){
        var {name,value}=event.target;
        if(name=='email'){
            this.creds.email=value;
        }
        else if(name=='password'){
            if(value==""){
                this.passwordValid=false;
            }else{
                this.creds.password=value;
            }
            
        }
        else if(name=='confirmPassword'){
            if(this.creds.password!=value){
                 this.passwordValid=false;
                 console.log('password is invalid',this.passwordValid);
            }
            else{
                this.passwordValid=true;
                console.log('password is valid');
               
            }
        }
    }
    handleContact(event){
        // this.contact=event.target.value;
        const mobilePattern= /^[789]\d{9}$/;
        if(mobilePattern.test(event.target.value)!=true || event.target.value.length==0){
            console.log('invalid');
            this.contactValid=false;
            
        }else{
            this.contact=event.target.value;
            this.contactValid=true;
            console.log('contact is valid' ,this.contactValid);
        }
        
    }
    handleAddress(event){
        var {name,value}=event.target;
        if(name=='city'){
            this.address.city=value;
        }
        else if(name=='state'){
            this.address.state=value;
        }
        else if(name=='country'){
            this.address.country=value;
        }
    }
       
    handleFormClick(){
        console.log('Name is ',this.pName.fname,this.pName.lname);
        console.log(`${this.pName.fname}'s email is: ${this.creds.email}`);
        console.log('button clicked');
        
        
        console.log(`${this.pName.fname}'s lives in: ${this.address.city},${this.address.state},${this.address.country}`);
    }

}

   