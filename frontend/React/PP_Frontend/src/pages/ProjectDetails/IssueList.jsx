import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import IssueCard from "./IssueCard";
import { PlusIcon } from "lucide-react";
import CreateIssueForm from "./CreateIssueForm";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssues } from "@/Redux/Issue/Action";
const IssueList=({title,status})=>{
    const {issue}=useSelector(store=>store)
    console.log(issue.issues)
    const {id}=useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchIssues(id))
    },[id])
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
                           {issue.issues.filter(issue=>issue.status==status).map((item)=> <IssueCard item={item} projectId={id} key={item.id}></IssueCard>)}
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
                    <CreateIssueForm status={status}/>
                </DialogContent>
            </Dialog>
        </div>
    </>
    )
}
export default IssueList;
