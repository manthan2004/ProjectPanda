// import { Button } from "@/components/ui/button"
// import { DialogClose } from "@/components/ui/dialog"
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { useForm } from "react-hook-form"

// const CreateProjectForm = () => {
//     const form = useForm(
//         {
//             defaultValues:{
//                 Name: "",
//                 Description: "",
//                 Category: "",
//                 Tags: [javascript, React]
//             },
//         }
//     );
//     const onSubmit= (data) =>{
//         console.log('Create Project data', data)
//     }
//     return(
//         <div> 
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)}>
//                     <FormField control = {form.control}
//                     name = "name"
//                     render ={({field})=> 
//                     <FormItem>
//                         <FormControl>
//                             <Input {...field}
//                             type= "Text"
//                             className = "border w-full border-gray-700 py-5 px-5 "
//                             placeholder = "Project name..."
//                             />
//                         </FormControl>
//                         <FormMessage/>
//                     </FormItem> } 
//                     />
//                     <DialogClose>
//                         {false ? 
//                         (<div>
//                             <p>You can create only 3 projects with free plan, Please upgrade your plan to avail more features.
//                             </p>
//                         </div>
//                     ):(
//                     <Button type="submit" className= " w-full mt-5" >
//                          Create Project
//                          </Button>
//                         ) }
//                     </DialogClose>
//                 </form>
//             </Form>
//         </div>
//     );
// };

// export default CreateProjectForm

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CreateProjectForm = () => {
    const form = useForm({
        defaultValues: {
            name: "", // 🔹 Fixed casing: "Name" → "name"
            description: "", // 🔹 Added missing default fields
            category: "",
            tags: ["javascript", "React"] // 🔹 Fixed syntax error (tags should be a string array)
        },
    });

    const onSubmit = (data) => {
        console.log("Create Project data", data);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* 🔹 Fixed incorrect "name" property */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text" // 🔹 Fixed incorrect "Text" casing
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Project name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* 🔹 Removed <DialogClose> wrapping <Button> (incorrect usage) */}
                    {false ? (
                        <div>
                            <p>
                                You can create only 3 projects with a free plan. Please upgrade your plan to avail more features.
                            </p>
                        </div>
                    ) : (
                        <Button type="submit" className="w-full mt-5">
                            Create Project
                        </Button>
                    )}
                </form>
            </Form>
        </div>
    );
};

export default CreateProjectForm;
