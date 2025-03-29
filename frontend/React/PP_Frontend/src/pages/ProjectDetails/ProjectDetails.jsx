import { react } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {  Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
const ProjectDetails = () => {
  const handleProjectInvitation=()=>{

  }
  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-lg font-semibold pb-5">
              Create Ecommerce website
            </h1>
            <div className="space-y-5 pb-10  text-sm">
              <p className="w-full md:max-w-lg lg:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                obcaecati tenetur expedita accusantium odio ab voluptas sequi!
                Sequi, accusantium nam.
              </p>
              <div className="flex">
                <p className="w-36">Project Lead :</p>
                <p>Zosh</p>
              </div>
              <div className="flex">
                <p className="w-36">Members :</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <Avatar className="cursor-pointer" key={item}>
                      <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>

                        <Button size="sm" variant="outline" onClick={handleProjectInvitation}>
                          <span>invite</span>
                          <PlusIcon className="w-3 h-3"/>
                        </Button>
              
                    </DialogTrigger>
                    <DialogContent>

                      <DialogHeader>Invite User</DialogHeader>
                      <InviteUserForm></InviteUserForm>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex">
                <p className="w-36">Category:</p>
                <p>Fullstack</p>
              </div>
              <div className="flex">
                <p className="w-36">Category:</p>
                  <Badge>Zosh</Badge>
              </div>
            </div>
            <section>
              <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
              <div className="lg:flex md:flex gap-3 justify-between py-5">
                <IssueList status="pending" title="todo List"/>
                <IssueList status="in_progress" title="IN Progress "/>
                <IssueList status="done" title="Done"/>


              </div>
            </section>
          </div>
        </ScrollArea> 
        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
