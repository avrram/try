export class Users {
    uname: string;
    mobile:string;
    email: string;
    password: string;
    id!: number;
    
    
    constructor(uname :string, mobile:string, email:string, password:string){
        this.uname=uname;
        this.mobile=mobile;
        this.email=email;
        this.password=password;
    }
    
}
