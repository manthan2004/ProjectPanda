import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { tags } from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { createProject, fetchProjects } from "@/Redux/Project/Action";
import { useDispatch, useSelector } from "react-redux";

const CreateProjectForm = () => {
    const dispatch=useDispatch();
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: ["JavaScript", "React"], // Ensure this is an array
        },
    });

    // Moved inside component, after `form` is initialized
    const handleTagsChange = (newValue) => {
        const currentTags = form.getValues("tags") || [];

        const updatedTags = currentTags.includes(newValue)
            ? currentTags.filter((tag) => tag !== newValue)
            : [...currentTags, newValue];

        form.setValue("tags", updatedTags, { shouldValidate: true });
    };
    const {project}=useSelector(store=>store);
    const onSubmit = (data) => {
        dispatch(createProject(data))
        console.log("Create Project data", data);
    };

    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Project Name */}
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="Project name..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Project Description */}
                    <FormField control={form.control} name="description" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="Project description..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Category Selection */}
                    <FormField control={form.control} name="category" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="fullstack">Full Stack</SelectItem>
                                        <SelectItem value="frontend">Frontend</SelectItem>
                                        <SelectItem value="backend">Backend</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Tags Selection */}
                    <FormField control={form.control} name="tags" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select value="" onValueChange={handleTagsChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Tags" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {tags?.sort((a, b) => a.localeCompare(b)).map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>

                            {/* Selected Tags Display */}
                            <div className="flex gap-1 flex-wrap mt-2">
                                {field.value.map((item) => (
                                    <div key={item} onClick={() => handleTagsChange(item)}
                                        className="cursor-pointer flex rounded-full items-center border gap-2 px-3 py-1">
                                        <span className="text-sm">{item}</span>
                                        <Cross1Icon className="h-3 w-3" />
                                    </div>
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Submit Button */}
                    <DialogClose>
                        {false ? (
                            <div>
                                <p>You can create only 3 projects with a free plan. Please upgrade your plan to avail more features.</p>
                            </div>
                        ) : (
                            <Button type="submit" className="w-full mt-5">
                                Create Project
                            </Button>
                        )}
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
};

export default CreateProjectForm;
