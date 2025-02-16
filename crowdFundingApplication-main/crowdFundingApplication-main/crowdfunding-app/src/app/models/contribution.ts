import { Campaign } from "./campaign";
import { User } from "./user";

export class Contribution {

    //id: number=0;
    amount: number=0;
    backer: User = new User;
    campaign: Campaign = new Campaign;
}
