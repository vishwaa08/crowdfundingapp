export class Campaign {
    static id(id: any) {
      throw new Error('Method not implemented.');
    }
    id:number=0;
    title:string="";
    description:string="";
    fundingGoal:number=0;
    currentFunds:number=0;
    endDate:Date= new Date();
    category:string="";
    creator_id:number=0;
    imageUrl: any;
}
