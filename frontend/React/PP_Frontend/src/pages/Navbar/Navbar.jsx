import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CreateProjectForm from "../Project/CreateProjectForm";
import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@radix-ui/react-dropdown-menu";
  import {
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";


const Navbar= () => {
    const navigate = useNavigate()
    return(
        <div className="border-b py-4 px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <p onClick={()=> navigate("/")} className="cursor-pointer">Project Management</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant ="ghost">New Project</Button>
                    </DialogTrigger>
                    
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Project</DialogTitle>
                        </DialogHeader>
                        <CreateProjectForm/>
                    </DialogContent>
                </Dialog>
                <Button onClick={()=> navigate("/upgrade_plan")} className="cursor-pointer" variant = "ghost">Upgrade</Button>
            </div>
            <div className="flex gap-3 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon" className= "rounded-full border-2 border-gray-500" >
                            <PersonIcon className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>Surabhi</p>
            </div>
        </div>
    );
};

export default Navbar;