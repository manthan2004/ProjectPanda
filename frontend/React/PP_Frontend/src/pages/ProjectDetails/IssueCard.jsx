import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue, updateIssueStatus } from "@/Redux/Issue/Action";
import { use, useEffect, useState } from "react";

const IssueCard = ({item,projectId}) => {
  const [newstat,setstat]=useState();
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(deleteIssue(item.id));
  }
  useEffect(()=>{
      if(newstat)dispatch(updateIssueStatus({id:item.id,status:newstat}));
  },[newstat])

    const navigate= useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2 ">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center  ">
          <CardTitle className="cursor-pointer" onClick= {()=> navigate( `/projects/${projectId}/issue/${item.id}`)} > {item.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full " size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>{setstat("in_progress")}}>In Progress</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{setstat("Done")}}>Done</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>{setstat("pending")}}>To Do</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardContent className="py-0 p-0">
          <div className="flex items-center justify-between">
            <p>FBP - {1}</p>
            <DropdownMenu className="w-[30rem] border border-red-400">
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-gray-900 hover:text-black text-white rounded-full"
                  size="icon"
                >
                  <Avatar>
                    <AvatarFallback>
                      <PersonIcon></PersonIcon>
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList issueDetails={item}></UserList>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
export default IssueCard;
