import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssueById, updateIssueStatus } from "@/Redux/Issue/Action";
import { fetchComments } from "@/Redux/Comment/Action";

const IssueDetails = () => {
    const { projectId, issueId } = useParams();
    const {issue,comment}=useSelector(store=>store)
    const dispatch=useDispatch();
    const handleUpdateIssueStatus = (status) =>{
        dispatch(updateIssueStatus({id:issueId,status}))
        console.log(status)
    }
    console.log("comment:",comment.comments)
    useEffect(()=>{
        dispatch(fetchIssueById(issueId))
        dispatch(fetchComments(issueId))
    },[issueId])
    return (
        <div className="px-20 py-8 text-gray-400">
           <div className="flex justify-between border p-10 rounded-lg">
                <ScrollArea className="h-[80vh] w-[60%]">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-400">{issue.issueDetails?.title}</h1>
                        <div className="py-5">
                            <h2 className="font-semibold text-gray-400">Description</h2>
                            <p className="text-gray=400 text-sm mt-3"> {issue.issueDetails?.description}</p>
                        </div>
                        <div className="mt-5">
                            <h1 className="pb-3">Activity</h1>
                            <Tabs defaultValue="comments" className="w-[400px]">
                                <TabsList className="mb-5">
                                    <TabsTrigger value="all">
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger value="comments">
                                        Comments
                                    </TabsTrigger>
                                    <TabsTrigger value="history">
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    Make all changes to your account here.
                                </TabsContent>
                                <TabsContent value="comments">
                                    <CreateCommentForm issueId= {issueId}/>
                                    <div className="mt-8 space-y-6">
                                        {comment.comments.map((item)=><CommentCard item={item} key={item} /> )}
                                    </div>
                                </TabsContent>
                                <TabsContent value="history">
                                    Passwords History : Change your password here
                                </TabsContent>
                                

                            </Tabs>
                        </div>
                    </div>
                </ScrollArea>
                <div className="w-full lg:w-[30%] space-y-2">
                <Select onValueChange={handleUpdateIssueStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue defaultValue="To do" placeholder="To do"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">To do</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="Done">Done</SelectItem>
                    </SelectContent>
                </Select>
                <div className="border rounded-lg">
                    <p className="border-b py-3 px-5 text-lg">Details</p>
                    <div className="p-5">
                        <div className="space-y-7">
                            <div className="flex gap-10 items-center">
                                <p className="w-[7rem]">Assignee</p>
                                 {issue.issueDetails?.assignee?.fullName? 
                                 <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>{issue.issueDetails?.assignee?.fullName[0]}</AvatarFallback>
                                    </Avatar>
                                    <p>{issue.issueDetails?.assignee?.fullName }</p>
                                </div>:<p>unassigned</p>}
                                
                            </div>
                            <div className="flex gap-10 items-center">
                                <p className="w-[7rem]">Labels</p>
                                <div className="flex items-center gap-3">
                                    <p>None</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <p className="w-[7rem]">Status</p>
                                <Badge>
                                   {issue.issueDetails?.status}
                                </Badge>
                            </div>
                            <div className="flex gap-10 items-center">
                                <p className="w-[7rem]">Release</p>
                                <div className="flex items-center gap-3">
                                    <p>31-03-25</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <p className="w-[7rem]">Reporter</p>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>S</AvatarFallback>
                                    </Avatar>
                                    <p>Surabhi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
           </div>
        </div>
    );
};

export default IssueDetails;
