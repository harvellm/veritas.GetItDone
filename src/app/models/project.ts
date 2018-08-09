export interface IProject {
    ProjectId:number;
    ClientName:string;
    ClientPriority:string;
    ProjectName: string;
    ProjectLead: string;
    ProjectStatus: string;
    ProjectHealth: string; 
    ProjectStartDate: string;  
    ProjectCompletionDate: string;           
    ReleaseDate: string;
    BillingMonth: string;
    EstimatedDevelopment: string;
    EstimatedDatabase: string;
    EstimatedVDP: string;
    EstimatedBAPM: string;
    EstimatedQA: string;
    RemainingDevelopment:string;
    RemainingDatabase: string;
    RemainingVDP: string;
    RemainingBAPM:string;
    RemainingQA: string;
    ReadyToStart: boolean;
}
