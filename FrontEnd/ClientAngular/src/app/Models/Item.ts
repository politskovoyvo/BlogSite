export class Item {
    name?:string;
    id:number;
    folderName:string;
    parent:number;
    status?:string;

    constructor (    
    id:number, 
    folderName:string,
    parent:number,
    status:string = null) 
    { 
        this.id = id;
        this.folderName = folderName;
        this.parent = parent;
        this.status = status;
        this.name = folderName;
    }
}