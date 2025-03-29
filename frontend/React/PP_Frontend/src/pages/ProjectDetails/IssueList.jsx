import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import IssueCard from "./IssueCard";
import { PlusIcon } from "lucide-react";
import CreateIssueForm from "./CreateIssueForm";
const IssueList=({title,status})=>{
    return (<>
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lg:w-[310px]">
                    <CardHeader>
                        <CardTitle>
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className="space-y-2">
                           {[1,1,1].map((item)=> <IssueCard key={item}></IssueCard>)}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-full flex items-center gap-2">Create Issue
                                <PlusIcon/>
                                </Button>           
                            
                         
                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>
                            Create New Issue
                        </DialogTitle>

                    </DialogHeader>
                    <CreateIssueForm/>
                </DialogContent>
            </Dialog>
        </div>
    </>
    )
}
export default IssueList;
